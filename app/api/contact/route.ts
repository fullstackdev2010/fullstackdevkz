// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";            // Resend requires Node (not Edge)
export const dynamic = "force-dynamic";     // don’t pre-render; read env at runtime

type Body = {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
  website?: string; // honeypot
  source?: string;
};

// Lazy + safe: do not throw at module load if API key is absent
function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  try {
    return new Resend(key);
  } catch {
    return null;
  }
}

function isEmail(s: string) {
  return /^\S+@\S+\.\S+$/.test(s);
}

// simple HTML escaper
function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    const ip =
      (req.headers.get("x-forwarded-for") || "").split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const body = (await req.json()) as Body;

    // Honeypot: if filled, accept silently
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Basic validation
    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }
    if (!isEmail(body.email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email." },
        { status: 400 }
      );
    }

    // Read env at runtime (after build)
    const CONTACT_TO = process.env.CONTACT_TO;
    const CONTACT_FROM = process.env.CONTACT_FROM || "onboarding@resend.dev";
    const resend = getResend();

    if (!CONTACT_TO) {
      return NextResponse.json(
        { ok: false, error: "CONTACT_TO env is missing on the server." },
        { status: 500 }
      );
    }
    if (!resend) {
      return NextResponse.json(
        { ok: false, error: "Email service not configured." },
        { status: 500 }
      );
    }

    // Compose subject + text
    const subject = `Contact: ${body.name} – ${body.projectType || "Project"}`;
    const lines = [
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      body.company ? `Company: ${body.company}` : null,
      body.projectType ? `Project Type: ${body.projectType}` : null,
      body.budget ? `Budget: ${body.budget}` : null,
      body.timeline ? `Timeline: ${body.timeline}` : null,
      `IP: ${ip}`,
      body.source ? `Source: ${body.source}` : null,
      "",
      "Message:",
      body.message,
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <style>
        body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }
        .card { padding:16px 20px; border:1px solid #e5e7eb; border-radius:12px; background:#fff; }
        .row { margin: 0 0 8px 0; }
        .muted { color:#6b7280; }
        pre { white-space:pre-wrap; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
      </style>
      <div class="card">
        <h2 style="margin:0 0 10px 0;">New contact request</h2>
        <div class="row"><strong>Name:</strong> ${escapeHtml(body.name)}</div>
        <div class="row"><strong>Email:</strong> ${escapeHtml(body.email)}</div>
        ${body.company ? `<div class="row"><strong>Company:</strong> ${escapeHtml(body.company)}</div>` : ""}
        ${body.projectType ? `<div class="row"><strong>Project:</strong> ${escapeHtml(body.projectType)}</div>` : ""}
        ${body.budget ? `<div class="row"><strong>Budget:</strong> ${escapeHtml(body.budget)}</div>` : ""}
        ${body.timeline ? `<div class="row"><strong>Timeline:</strong> ${escapeHtml(body.timeline)}</div>` : ""}
        <div class="row muted">IP: ${escapeHtml(ip)}</div>
        ${body.source ? `<div class="row muted">Source: ${escapeHtml(body.source)}</div>` : ""}
        <hr style="margin:14px 0; border:none; border-top:1px solid #e5e7eb;" />
        <div><strong>Message:</strong></div>
        <pre>${escapeHtml(body.message)}</pre>
      </div>
    `;

    // Send with Resend
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject,
      text: lines,
      html,
      replyTo: body.email, // reply directly from the inbox
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
