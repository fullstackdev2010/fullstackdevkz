// app/contact/page.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { GlassCard } from "@/components/ui/GlassCard";
import Select from "@/components/ui/Select";

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  existingSystem: string;
  budget: string;
  timeline: string;
  message: string;
  /** honeypot for bots */
  website: string;
};

const EMAIL = "info@fullstackdev.kz";
const ADDRESS = "Almaty, Kazakhstan";
const INTENT_PROJECT_TYPES: Record<string, string> = {
  "mobile-app-development": "Mobile App Development",
  "react-native-development": "React Native Development",
  "web-app-development": "Web Application Development",
  "saas-development": "SaaS Development",
  "mvp-development": "MVP Development",
  "backend-api-development": "Backend & API Development",
  "custom-business-software": "Custom Business Software",
};

export default function Page() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    existingSystem: "",
    budget: "",
    timeline: "",
    message: "",
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; msg: string }>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const intent = new URLSearchParams(window.location.search).get("intent");
    const projectType = intent ? INTENT_PROJECT_TYPES[intent] : undefined;
    if (projectType) setForm((current) => ({ ...current, projectType }));
  }, []);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((f) => ({ ...f, [name]: value }));
      setErrors((current) => ({ ...current, [name]: "" }));
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
      form.existingSystem ? `Existing Product/System: ${form.existingSystem}` : null,
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
      const nextErrors: Record<string, string> = {};
      if (!form.name.trim()) nextErrors.name = "Please enter your name.";
      if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) nextErrors.email = "Please enter a valid email address.";
      if (!form.message.trim()) nextErrors.message = "Please describe the project or workflow.";
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0 || form.website.trim()) return;
      setSubmitting(true);
      setResult(null);

      // Honeypot → silently succeed
      if (form.website.trim()) {
        setSubmitting(false);
        setResult({ ok: true, msg: "Thanks! We’ll be in touch shortly." });
        return;
      }

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
          setResult({ ok: true, msg: "Your inquiry was sent. You do not need to submit it again." });
          setForm({
            name: "",
            email: "",
            company: "",
            projectType: "",
            existingSystem: "",
            budget: "",
            timeline: "",
            message: "",
            website: "",
          });
        } else {
          setResult({
            ok: false,
            msg: "We could not send the inquiry. Your details are still here; try again or use the email link.",
          });
        }
      } catch {
        setResult({
          ok: false,
          msg: "We could not reach the email service. Your details are still here; try again or use the email link.",
        });
      } finally {
        setSubmitting(false);
      }
    },
    [form]
  );

  // Higher-contrast inputs for dark UI
  const inputBase =
    "mt-1 w-full rounded-xl border border-white/25 bg-white/10 text-white placeholder-white/60 " +
    "px-3 py-2 outline-none focus:border-white/60 focus:ring-0 transition-colors";

  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Rounded glass container with mesh (same layout as home/work/services/stack) */}
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 border glass">
          {/* Mesh background confined to this section */}
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
            backgroundSrc="/brand/contact.webp"
            viewBox="0 0 1600 900"
            photos={[]}
          />
          <div className="absolute inset-0">
            <MeshBackground
              brightness={0.8}
              opacity={0.95}
              palette={['#7AA2FF', '#8DF2D6', '#FFB3EC']}
            />
          </div>

          {/* Foreground content INSIDE glass */}
          <div className="relative z-10 pointer-events-auto">
            <header className="max-w-3xl">
              <h1 className="text-4xl font-semibold">Tell Us About Your Software Project</h1>
              <p className="mt-3 text-[var(--muted)]">
                Tell us what you need to build, improve, or connect. Include the users,
                main workflow, current systems, and target timeline where possible.
              </p>
            </header>

            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {/* Form */}
              <GlassCard className="md:col-span-3">
                <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4" data-conversion="project-inquiry" noValidate>
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
                        className={inputBase}
                        placeholder="Your name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && <p id="name-error" className="mt-1 text-sm text-red-300">{errors.name}</p>}
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
                        className={inputBase}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && <p id="email-error" className="mt-1 text-sm text-red-300">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="existingSystem" className="block text-sm text-[var(--muted)]">
                      Existing product or system
                    </label>
                    <Select
                      id="existingSystem"
                      name="existingSystem"
                      value={form.existingSystem}
                      onChange={(v) => setForm((f) => ({ ...f, existingSystem: v }))}
                      placeholder="Select if relevant…"
                      options={[
                        "Idea or new product",
                        "Existing web application",
                        "Existing mobile application",
                        "Existing backend or API",
                        "Existing business workflow",
                        "Other",
                      ]}
                    />
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
                      className={inputBase}
                      placeholder="Company or team (optional)"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {/* Project type */}
                    <div>
                      <label htmlFor="projectType" className="block text-sm text-[var(--muted)]">
                        Project type
                      </label>
                      <Select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={(v) => setForm((f) => ({ ...f, projectType: v }))}
                        placeholder="Select…"
                        options={[
                          "Mobile App Development",
                          "React Native Development",
                          "Web Application Development",
                          "SaaS Development",
                          { label: "MVP Development", value: "MVP Development" },
                          "Backend & API Development",
                          "Custom Business Software",
                          { label: "On-device OCR / OCRScan", value: "On-device OCR / OCRScan" },
                          { label: "Other", value: "Other" },
                        ]}
                      />
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="budget" className="block text-sm text-[var(--muted)]">
                        Budget
                      </label>
                      <Select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={(v) => setForm((f) => ({ ...f, budget: v }))}
                        placeholder="Select…"
                        options={["Under $5k", "$5k–$15k", "$15k–$50k", "$50k+"]}
                      />
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="timeline" className="block text-sm text-[var(--muted)]">
                        Timeline
                      </label>
                      <Select
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={(v) => setForm((f) => ({ ...f, timeline: v }))}
                        placeholder="Select…"
                        options={["ASAP", "1–2 months", "Quarter", "Flexible"]}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-[var(--muted)]">
                      Project description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      required
                      rows={6}
                      className={inputBase}
                      placeholder="Describe the users, workflow, current systems, integrations, and the result you need."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && <p id="message-error" className="mt-1 text-sm text-red-300">{errors.message}</p>}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      data-cta="submit-project-inquiry"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/5 disabled:opacity-50"
                    >
                      {submitting ? (
                        <LoaderCircle className="animate-spin" size={16} aria-hidden />
                      ) : (
                        <Send size={16} aria-hidden />
                      )}
                      {submitting ? "Sending…" : "Send request"}
                    </button>

                    {result && (
                      <p
                        className={`text-sm ${result.ok ? "text-emerald-300" : "text-red-300"}`}
                        role="status"
                      >
                        {result.msg}
                      </p>
                    )}
                  </div>
                  {result && !result.ok && (
                    <a href={buildMailtoHref()} className="text-sm font-medium underline">
                      Open this inquiry in your email app
                    </a>
                  )}
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
                    Prefer email? Send the users, workflow, current systems, integrations, and target release context. We use these details only to understand and respond to the inquiry.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
