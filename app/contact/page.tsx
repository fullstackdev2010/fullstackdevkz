// app/contact/page.tsx
"use client";

import { useCallback, useMemo, useState } from "react";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { GlassCard } from "@/components/ui/GlassCard";

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  /** honeypot for bots */
  website: string;
};

const EMAIL = "fsdkzdep2010@gmail.com";
const ADDRESS = "Almaty, Kazakhstan";

export default function Page() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; msg: string }>(null);

  const disabled = useMemo(() => {
    // minimal client validation
    if (!form.name.trim()) return true;
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return true;
    if (!form.message.trim()) return true;
    // honeypot
    if (form.website.trim()) return true;
    return false;
  }, [form]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setForm((f) => ({ ...f, [name]: value }));
    },
    []
  );

  const buildMailtoHref = useCallback(() => {
    const subject = encodeURIComponent(`New contact request from ${form.name}`);
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      form.projectType ? `Project Type: ${form.projectType}` : null,
      form.budget ? `Budget: ${form.budget}` : null,
      form.timeline ? `Timeline: ${form.timeline}` : null,
      "",
      "Message:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    const body = encodeURIComponent(lines);
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }, [form]);

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (disabled) return;
      setSubmitting(true);
      setResult(null);
      // If honeypot filled, silently succeed
      if (form.website.trim()) {
        setSubmitting(false);
        setResult({ ok: true, msg: "Thanks! We’ll be in touch shortly." });
        return;
      }
      // Try POST /api/contact if you add it; otherwise fall back to mailto:
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            to: EMAIL,
            source: "contact-page",
          }),
        });
        if (res.ok) {
          setResult({ ok: true, msg: "Thanks! We received your request." });
          setForm({
            name: "",
            email: "",
            company: "",
            projectType: "",
            budget: "",
            timeline: "",
            message: "",
            website: "",
          });
        } else {
          // Fallback to mailto
          window.location.href = buildMailtoHref();
          setResult({
            ok: true,
            msg: "Opening your mail client… If it didn’t open, email us directly.",
          });
        }
      } catch {
        // Network/route missing → mailto fallback
        window.location.href = buildMailtoHref();
        setResult({
          ok: true,
          msg: "Opening your mail client… If it didn’t open, email us directly.",
        });
      } finally {
        setSubmitting(false);
      }
    },
    [buildMailtoHref, disabled, form]
  );

  return (
    <section className="relative min-h-screen">
      {/* Section-scoped mesh so it won’t cover the global footer */}
      <MeshWithPhotoInsets
        className="pointer-events-none absolute inset-0 z-0"
        backgroundSrc="/brand/contact.svg"
        viewBox="0 0 1600 900"
        photos={[]}
      />
      {/* Soft readability veil */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      {/* Content sits above mesh + tint */}
      <main className="relative z-20 mx-auto max-w-7xl px-6 py-24">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-semibold">Contact</h1>
          <p className="mt-3 text-[var(--muted)]">
            Tell us a bit about your project and how to reach you. We’ll reply by email.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {/* Form */}
          <GlassCard className="md:col-span-3">
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
              {/* Honeypot (hidden) */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={onChange}
                className="hidden"
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm text-[var(--muted)]">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 outline-none focus:border-white/40"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-[var(--muted)]">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 outline-none focus:border-white/40"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-[var(--muted)]">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 outline-none focus:border-white/40"
                  placeholder="Company or team (optional)"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label htmlFor="projectType" className="block text-sm text-[var(--muted)]">
                    Project type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={onChange}
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 outline-none focus:border-white/40"
                  >
                    <option value="">Select…</option>
                    <option>Mobile App (Expo)</option>
                    <option>Backend API (FastAPI)</option>
                    <option>On-device OCR / UNIScan</option>
                    <option>Web / Next.js</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm text-[var(--muted)]">
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={onChange}
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 outline-none focus:border-white/40"
                  >
                    <option value="">Select…</option>
                    <option>Under $5k</option>
                    <option>$5k–$15k</option>
                    <option>$15k–$50k</option>
                    <option>$50k+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm text-[var(--muted)]">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={onChange}
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 outline-none focus:border-white/40"
                  >
                    <option value="">Select…</option>
                    <option>ASAP</option>
                    <option>1–2 months</option>
                    <option>Quarter</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[var(--muted)]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={6}
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 outline-none focus:border-white/40"
                  placeholder="Tell us what you’re building…"
                />
              </div>

              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting || disabled}
                  className="inline-flex items-center rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/5 disabled:opacity-50"
                >
                  {submitting ? "Sending…" : "Send request"}
                </button>

                {result && (
                  <p
                    className={`text-sm ${
                      result.ok ? "text-emerald-300" : "text-red-300"
                    }`}
                    role="status"
                  >
                    {result.msg}
                  </p>
                )}
              </div>
            </form>
          </GlassCard>

          {/* Contact info */}
          <GlassCard className="md:col-span-2">
            <h2 className="text-xl md:text-2xl font-semibold">Direct contact</h2>
            <div className="mt-4 space-y-3 text-[var(--muted)]">
              <p>
                Email:{" "}
                <a className="underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </p>
              <p>Address: {ADDRESS}</p>
              <p className="text-sm">
                Prefer email? Send details about your project, scope, and timeline. You’ll hear back soon.
              </p>
            </div>
          </GlassCard>
        </div>
      </main>
    </section>
  );
}
