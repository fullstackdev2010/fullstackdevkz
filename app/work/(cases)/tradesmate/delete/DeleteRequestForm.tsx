"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { LoaderCircle, Mail, Trash2 } from "lucide-react";

type FormState = { name: string; email: string; business: string; details: string; confirm: boolean; website: string };
const EMAIL = "info@fullstackdev.kz";

export default function DeleteRequestForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", business: "", details: "", confirm: false, website: "" });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; msg: string }>(null);
  const disabled = useMemo(() => !form.name.trim() || !/^\S+@\S+\.\S+$/.test(form.email.trim()) || !form.business.trim() || !form.confirm || Boolean(form.website.trim()), [form]);
  const updateField = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { const { name, value } = event.target; setForm((current) => ({ ...current, [name]: value })); }, []);
  const message = useMemo(() => ["TradesMate account and data deletion request", `Requester name: ${form.name}`, `Account email: ${form.email}`, `Business name: ${form.business}`, form.details ? `Additional details:\n${form.details}` : null, "", "The requester confirms that they own or administer this account and understands that identity verification may be required."].filter(Boolean).join("\n"), [form]);
  const mailtoHref = useMemo(() => `mailto:${EMAIL}?subject=${encodeURIComponent("TradesMate account and data deletion request")}&body=${encodeURIComponent(message)}`, [message]);
  const onSubmit = useCallback(async (event: React.FormEvent) => { event.preventDefault(); if (disabled) return; setSubmitting(true); setResult(null); try { const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: form.name, email: form.email, company: form.business, projectType: "TradesMate deletion", timeline: "Business account and associated data", message, website: form.website, source: "tradesmate-account-deletion" }) }); if (!response.ok) throw new Error("Request delivery failed"); setResult({ ok: true, msg: "Your deletion request was sent. Check your email for any verification follow-up." }); setForm({ name: "", email: "", business: "", details: "", confirm: false, website: "" }); } catch { window.location.href = mailtoHref; setResult({ ok: true, msg: "Opening your email app so you can send the request directly." }); } finally { setSubmitting(false); } }, [disabled, form, mailtoHref, message]);
  const inputClass = "mt-1 w-full rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-white placeholder-white/55 outline-none transition-colors focus:border-white/60";

  return <form onSubmit={onSubmit} className="space-y-5">
    <input type="text" name="website" value={form.website} onChange={updateField} className="hidden" aria-hidden="true" tabIndex={-1} autoComplete="off" />
    <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="name" className="text-sm text-[var(--muted)]">Your name *</label><input id="name" name="name" value={form.name} onChange={updateField} required autoComplete="name" className={inputClass} /></div><div><label htmlFor="email" className="text-sm text-[var(--muted)]">TradesMate account email *</label><input id="email" name="email" type="email" value={form.email} onChange={updateField} required autoComplete="email" className={inputClass} /></div></div>
    <div><label htmlFor="business" className="text-sm text-[var(--muted)]">Business name *</label><input id="business" name="business" value={form.business} onChange={updateField} required autoComplete="organization" className={inputClass} /></div>
    <div><label htmlFor="details" className="text-sm text-[var(--muted)]">Additional details</label><textarea id="details" name="details" value={form.details} onChange={updateField} rows={4} placeholder="Anything that will help us locate the correct account" className={inputClass} /></div>
    <label className="flex gap-3 rounded-xl border border-white/15 bg-black/10 p-4"><input type="checkbox" checked={form.confirm} onChange={(event) => setForm((current) => ({ ...current, confirm: event.target.checked }))} className="mt-1 accent-emerald-400" /><span className="text-sm leading-6 text-[var(--muted)]">I confirm that I own or administer this account and understand that FullStack Dev KZ may contact me to verify the request before deletion. *</span></label>
    <div className="flex flex-wrap items-center gap-4"><button type="submit" disabled={submitting || disabled} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-50">{submitting ? <LoaderCircle className="animate-spin" size={16} aria-hidden /> : <Trash2 size={16} aria-hidden />}{submitting ? "Sending request..." : "Request deletion"}</button><a href={mailtoHref} className="inline-flex items-center gap-2 text-sm underline"><Mail size={16} aria-hidden />Send by email instead</a></div>
    {result ? <p role="status" className="rounded-xl border border-emerald-300/30 bg-emerald-300/10 p-4 text-sm text-emerald-100">{result.msg}</p> : null}
    <p className="text-xs leading-5 text-[var(--muted)]">See the <Link href="/work/tradesmate/privacy" className="underline">TradesMate Privacy Policy</Link> for retention, verification, and service-provider information.</p>
  </form>;
}
