"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { LoaderCircle, Mail, Trash2 } from "lucide-react";

type RequestType = "organizer-account" | "guest-account";

type FormState = {
  requestType: RequestType;
  name: string;
  email: string;
  club: string;
  event: string;
  details: string;
  confirm: boolean;
  website: string;
};

const EMAIL = "info@fullstackdev.kz";

export default function DeleteRequestForm() {
  const [form, setForm] = useState<FormState>({
    requestType: "organizer-account",
    name: "",
    email: "",
    club: "",
    event: "",
    details: "",
    confirm: false,
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; msg: string }>(null);

  const disabled = useMemo(() => {
    if (!form.name.trim()) return true;
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return true;
    if (form.requestType === "organizer-account" && !form.club.trim()) return true;
    if (!form.confirm || form.website.trim()) return true;
    return false;
  }, [form]);

  const updateField = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setForm((current) => ({ ...current, [name]: value }));
    },
    []
  );

  const message = useMemo(
    () =>
      [
        "Come Together account and data deletion request",
        `Request type: ${form.requestType === "organizer-account" ? "Organizer account and associated data" : "Guest account and associated data"}`,
        `Requester name: ${form.name}`,
        `Account email: ${form.email}`,
        form.club ? `Club name: ${form.club}` : null,
        form.event ? `Event name or approximate date: ${form.event}` : null,
        form.details ? `Additional details:\n${form.details}` : null,
        "",
        "The requester confirms that they own this account and understands that identity verification may be required.",
      ]
        .filter(Boolean)
        .join("\n"),
    [form]
  );

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Come Together account and data deletion request");
    return `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(message)}`;
  }, [message]);

  const onSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (disabled) return;

      setSubmitting(true);
      setResult(null);

      if (form.website.trim()) {
        setSubmitting(false);
        setResult({ ok: true, msg: "Your request has been received." });
        return;
      }

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            company: form.club,
            projectType: "Come Together deletion",
            timeline:
              form.requestType === "organizer-account"
                ? "Organizer account and associated data"
                : "Guest account and associated data",
            message,
            website: form.website,
            source: "come-together-account-deletion",
          }),
        });

        if (!response.ok) throw new Error("Request delivery failed");

        setResult({
          ok: true,
          msg: "Your deletion request was sent. Check your email for any verification follow-up.",
        });
        setForm({
          requestType: "organizer-account",
          name: "",
          email: "",
          club: "",
          event: "",
          details: "",
          confirm: false,
          website: "",
        });
      } catch {
        window.location.href = mailtoHref;
        setResult({
          ok: true,
          msg: "Opening your email app so you can send the request directly.",
        });
      } finally {
        setSubmitting(false);
      }
    },
    [disabled, form, mailtoHref, message]
  );

  const inputClass =
    "mt-1 w-full rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-white " +
    "placeholder-white/55 outline-none transition-colors focus:border-white/60";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={updateField}
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
      />

      <fieldset>
        <legend className="text-sm font-medium text-white">Which account should be deleted?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="flex cursor-pointer gap-3 rounded-xl border border-white/15 bg-white/5 p-4">
            <input
              type="radio"
              name="requestType"
              value="organizer-account"
              checked={form.requestType === "organizer-account"}
              onChange={() => setForm((current) => ({ ...current, requestType: "organizer-account" }))}
              className="mt-1 accent-emerald-400"
            />
            <span>
              <span className="block font-medium text-white">Organizer account</span>
              <span className="mt-1 block text-sm text-[var(--muted)]">
                Delete the account and associated clubs, events, bookings, and attendance data.
              </span>
            </span>
          </label>

          <label className="flex cursor-pointer gap-3 rounded-xl border border-white/15 bg-white/5 p-4">
            <input
              type="radio"
              name="requestType"
              value="guest-account"
              checked={form.requestType === "guest-account"}
              onChange={() => setForm((current) => ({ ...current, requestType: "guest-account" }))}
              className="mt-1 accent-emerald-400"
            />
            <span>
              <span className="block font-medium text-white">Guest account</span>
              <span className="mt-1 block text-sm text-[var(--muted)]">
                Delete the account and remove or anonymize linked booking and attendance records.
              </span>
            </span>
          </label>
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-[var(--muted)]">Your name *</label>
          <input id="name" name="name" value={form.name} onChange={updateField} required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-[var(--muted)]">Come Together account email *</label>
          <input id="email" name="email" type="email" value={form.email} onChange={updateField} required autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="club" className="text-sm text-[var(--muted)]">
            Club name {form.requestType === "organizer-account" ? "*" : "(optional)"}
          </label>
          <input id="club" name="club" value={form.club} onChange={updateField} required={form.requestType === "organizer-account"} className={inputClass} />
        </div>
        <div>
          <label htmlFor="event" className="text-sm text-[var(--muted)]">Event name or approximate date</label>
          <input id="event" name="event" value={form.event} onChange={updateField} placeholder="Helpful for locating booking data" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="details" className="text-sm text-[var(--muted)]">Additional details</label>
        <textarea id="details" name="details" value={form.details} onChange={updateField} rows={4} placeholder="Anything that will help us locate the correct account" className={inputClass} />
      </div>

      <label className="flex gap-3 rounded-xl border border-white/15 bg-black/10 p-4">
        <input
          type="checkbox"
          checked={form.confirm}
          onChange={(event) => setForm((current) => ({ ...current, confirm: event.target.checked }))}
          className="mt-1 accent-emerald-400"
        />
        <span className="text-sm leading-6 text-[var(--muted)]">
          I confirm that I own this account and understand that Fullstack Dev KZ may
          contact me to verify the request before deletion. *
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={submitting || disabled}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? <LoaderCircle className="animate-spin" size={16} aria-hidden /> : <Trash2 size={16} aria-hidden />}
          {submitting ? "Sending request..." : "Request deletion"}
        </button>
        <a href={mailtoHref} className="inline-flex items-center gap-2 text-sm underline">
          <Mail size={16} aria-hidden />
          Send by email instead
        </a>
      </div>

      {result ? (
        <p role="status" className="rounded-xl border border-emerald-300/30 bg-emerald-300/10 p-4 text-sm text-emerald-100">
          {result.msg}
        </p>
      ) : null}

      <p className="text-xs leading-5 text-[var(--muted)]">
        See the <Link href="/work/come-together/privacy" className="underline">Come Together Privacy Policy</Link>{" "}
        for retention, verification, and service-provider information.
      </p>
    </form>
  );
}
