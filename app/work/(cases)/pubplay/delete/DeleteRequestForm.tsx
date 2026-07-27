"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";

type RequestType = "owner-account" | "player-data";

type FormState = {
  requestType: RequestType;
  name: string;
  email: string;
  venue: string;
  event: string;
  playerName: string;
  details: string;
  confirm: boolean;
  website: string;
};

const EMAIL = "info@fullstackdev.kz";

export default function DeleteRequestForm() {
  const [form, setForm] = useState<FormState>({
    requestType: "owner-account",
    name: "",
    email: "",
    venue: "",
    event: "",
    playerName: "",
    details: "",
    confirm: false,
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; msg: string }>(null);

  const disabled = useMemo(() => {
    if (!form.name.trim()) return true;
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return true;
    if (!form.venue.trim()) return true;
    if (form.requestType === "player-data" && !form.playerName.trim()) return true;
    if (!form.confirm) return true;
    if (form.website.trim()) return true;
    return false;
  }, [form]);

  const updateField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((current) => ({ ...current, [name]: value }));
    },
    []
  );

  const message = useMemo(
    () =>
      [
        "PubPlay deletion request",
        `Request type: ${
          form.requestType === "owner-account"
            ? "Venue owner account and associated data"
            : "Player participation data"
        }`,
        `Requester name: ${form.name}`,
        `Account/contact email: ${form.email}`,
        `Venue name: ${form.venue}`,
        form.event ? `Event name or approximate date: ${form.event}` : null,
        form.playerName ? `Player name or nickname: ${form.playerName}` : null,
        "",
        form.details ? `Additional details:\n${form.details}` : null,
        "",
        "The requester confirms that they are authorized to make this request and understands that identity verification may be required.",
      ]
        .filter(Boolean)
        .join("\n"),
    [form]
  );

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("PubPlay account and data deletion request");
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
            company: form.venue,
            projectType: "PubPlay deletion",
            timeline:
              form.requestType === "owner-account"
                ? "Owner account and associated data"
                : "Player participation data",
            message,
            website: form.website,
            source: "pubplay-account-deletion",
          }),
        });

        if (!response.ok) throw new Error("Request delivery failed");

        setResult({
          ok: true,
          msg: "Your deletion request was sent. Check your email for any verification follow-up.",
        });
        setForm({
          requestType: "owner-account",
          name: "",
          email: "",
          venue: "",
          event: "",
          playerName: "",
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
        <legend className="text-sm font-medium text-white">What should be deleted?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="flex cursor-pointer gap-3 rounded-xl border border-white/15 bg-white/5 p-4">
            <input
              type="radio"
              name="requestType"
              value="owner-account"
              checked={form.requestType === "owner-account"}
              onChange={() =>
                setForm((current) => ({ ...current, requestType: "owner-account" }))
              }
              className="mt-1 accent-emerald-400"
            />
            <span>
              <span className="block font-medium text-white">Owner account</span>
              <span className="mt-1 block text-sm text-[var(--muted)]">
                Delete the account, venue, events, players, fixtures, scores, and archives.
              </span>
            </span>
          </label>

          <label className="flex cursor-pointer gap-3 rounded-xl border border-white/15 bg-white/5 p-4">
            <input
              type="radio"
              name="requestType"
              value="player-data"
              checked={form.requestType === "player-data"}
              onChange={() =>
                setForm((current) => ({ ...current, requestType: "player-data" }))
              }
              className="mt-1 accent-emerald-400"
            />
            <span>
              <span className="block font-medium text-white">Player data</span>
              <span className="mt-1 block text-sm text-[var(--muted)]">
                Delete or anonymize a player name and associated participation records.
              </span>
            </span>
          </label>
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-[var(--muted)]">
            Your name *
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={updateField}
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-[var(--muted)]">
            PubPlay account or contact email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="venue" className="text-sm text-[var(--muted)]">
            Pub or venue name *
          </label>
          <input
            id="venue"
            name="venue"
            value={form.venue}
            onChange={updateField}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="event" className="text-sm text-[var(--muted)]">
            Event name or approximate date
          </label>
          <input
            id="event"
            name="event"
            value={form.event}
            onChange={updateField}
            placeholder="Helpful for locating player data"
            className={inputClass}
          />
        </div>
      </div>

      {form.requestType === "player-data" && (
        <div>
          <label htmlFor="playerName" className="text-sm text-[var(--muted)]">
            Player name or nickname used in the event *
          </label>
          <input
            id="playerName"
            name="playerName"
            value={form.playerName}
            onChange={updateField}
            required
            className={inputClass}
          />
        </div>
      )}

      <div>
        <label htmlFor="details" className="text-sm text-[var(--muted)]">
          Additional details
        </label>
        <textarea
          id="details"
          name="details"
          value={form.details}
          onChange={updateField}
          rows={4}
          placeholder="Anything that will help us locate the correct account or event"
          className={inputClass}
        />
      </div>

      <label className="flex gap-3 rounded-xl border border-white/15 bg-black/10 p-4">
        <input
          type="checkbox"
          checked={form.confirm}
          onChange={(event) =>
            setForm((current) => ({ ...current, confirm: event.target.checked }))
          }
          className="mt-1 accent-emerald-400"
        />
        <span className="text-sm leading-6 text-[var(--muted)]">
          I confirm that I own this account or am authorized to request deletion
          of the identified data. I understand that Fullstack Dev KZ may contact me
          to verify the request. *
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={submitting || disabled}
          className="inline-flex min-h-11 items-center rounded-xl border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? "Sending request..." : "Request deletion"}
        </button>
        <a href={mailtoHref} className="text-sm underline">
          Send by email instead
        </a>
      </div>

      {result && (
        <p
          role="status"
          className={`rounded-xl border p-4 text-sm ${
            result.ok
              ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-100"
              : "border-red-300/30 bg-red-300/10 text-red-100"
          }`}
        >
          {result.msg}
        </p>
      )}

      <p className="text-xs leading-5 text-[var(--muted)]">
        See the{" "}
        <Link href="/work/pubplay/privacy" className="underline">
          PubPlay Privacy Policy
        </Link>{" "}
        for retention, verification, and service-provider information.
      </p>
    </form>
  );
}
