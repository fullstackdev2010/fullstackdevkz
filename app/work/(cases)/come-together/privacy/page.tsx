import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Trash2 } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy - Come Together Android App",
  description:
    "Privacy Policy for the Come Together Android organizer companion and connected local clubs platform.",
  alternates: { canonical: "/work/come-together/privacy" },
};

const EMAIL = "info@fullstackdev.kz";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4 text-[var(--muted)]">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <article className="rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm">
        <div className="px-6 py-8 md:px-10 md:py-12">
          <header>
            <p className="text-sm font-medium text-[var(--accent)]">
              Come Together Android organizer companion
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
              Come Together Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-[var(--muted)]">Last updated: August 27, 2026</p>
            <p className="mt-6 leading-relaxed text-[var(--muted)]">
              This Privacy Policy explains how Fullstack Dev KZ handles information when
              people use the Come Together Android app and the connected Come Together
              local clubs service at HelloLocalClubs.com. The Android app is primarily an
              organizer companion for managing clubs, events, guests, and attendance.
            </p>
          </header>

          <nav aria-label="Privacy policy contents" className="mt-8 rounded-xl border border-white/10 bg-black/15 p-5">
            <h2 className="font-semibold text-white">Contents</h2>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {[
                ["collection", "Information collected"],
                ["use", "How information is used"],
                ["sharing", "Service providers"],
                ["retention", "Retention and deletion"],
                ["security", "Security"],
                ["contact", "Contact"],
              ].map(([href, label]) => (
                <a key={href} href={`#${href}`} className="underline">{label}</a>
              ))}
            </div>
          </nav>

          <div className="mt-12 space-y-12 text-base leading-relaxed">
            <Section id="controller" title="Developer and Privacy Contact">
              <p>
                Come Together is operated by Fullstack Dev KZ, Almaty, Kazakhstan.
                Privacy questions may be sent to{" "}
                <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
            </Section>

            <Section id="collection" title="Information We Collect">
              <h3 className="text-lg font-semibold text-white">Account and authentication data</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Name and email address</li>
                <li>Hashed password and authentication or session information</li>
                <li>Account creation, sign-in, role, and account-status information</li>
              </ul>

              <h3 className="pt-2 text-lg font-semibold text-white">Club and event data</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Club name, description, city, country, time zone, and currency</li>
                <li>Event title, description, venue, schedule, capacity, displayed price, and status</li>
                <li>Club and event images uploaded by organizers through the connected web service</li>
              </ul>

              <h3 className="pt-2 text-lg font-semibold text-white">Booking and attendance data</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Guest name and email address</li>
                <li>Booking, confirmation, waitlist, cancellation, and attendance status</li>
                <li>Event-level attendance and returning-guest information used for organizer insights</li>
              </ul>

              <h3 className="pt-2 text-lg font-semibold text-white">Device and notification data</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Expo push token and notification permission status when notifications are enabled</li>
                <li>Selected app language and device locale used to format the interface and dates</li>
                <li>App version, operating system, request time, IP address, and limited diagnostic or security logs</li>
              </ul>
              <p>
                Authentication credentials are stored on the device using protected app storage.
                Come Together does not collect precise location, contacts, photos, microphone data,
                advertising identifiers, or payment-card details through the Android companion.
              </p>
            </Section>

            <Section id="use" title="How We Use Information">
              <ul className="list-disc space-y-2 pl-6">
                <li>Create and authenticate organizer and guest accounts</li>
                <li>Publish club and event pages and show local schedules</li>
                <li>Manage bookings, capacity, waitlists, cancellations, and attendance</li>
                <li>Synchronize organizer data between the website and Android companion</li>
                <li>Send booking confirmations, reminders, event changes, and operational push notifications</li>
                <li>Calculate attendance and repeat-booking insights for organizers</li>
                <li>Provide support, prevent abuse, secure the service, and diagnose failures</li>
              </ul>
              <p>
                Come Together does not sell personal information and does not use account,
                booking, or attendance information for third-party advertising.
              </p>
            </Section>

            <Section id="sharing" title="Service Providers and Data Sharing">
              <p>Information may be processed by providers that help operate Come Together:</p>
              <ul className="list-disc space-y-3 pl-6">
                <li>Vercel for website hosting, server functions, and public image delivery</li>
                <li>Neon for managed PostgreSQL database hosting</li>
                <li>
                  <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">Resend</a>{" "}
                  for transactional email and website request delivery
                </li>
                <li>Expo and Firebase infrastructure for Android push notifications</li>
                <li>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Google Play</a>{" "}
                  for app distribution and platform services
                </li>
                <li>
                  <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">RevenueCat</a>{" "}
                  for entitlement management if paid mobile features are activated
                </li>
              </ul>
              <p>
                Providers may process data in countries other than the user&apos;s country.
                We may also disclose information when required by law, to protect users or
                the service, or during a business transfer subject to appropriate safeguards.
              </p>
            </Section>

            <Section id="retention" title="Data Retention and Deletion">
              <p>
                Account, club, event, booking, waitlist, attendance, and notification data
                are retained while the account or pilot is active and as needed to provide
                event history, support, security, and legal compliance.
              </p>
              <p>
                After a verified organizer-account deletion request, we delete the account
                and associated clubs, events, images, bookings, waitlists, attendance records,
                and registered push tokens from active systems, except where limited retention
                is legally or operationally required. A verified guest-account request deletes
                the account and removes or anonymizes associated booking and attendance records
                where appropriate.
              </p>
              <p>
                We aim to complete verified requests within 30 days. Residual copies may remain
                in encrypted or access-controlled backups for up to 90 days before routine
                deletion. Limited records may be retained longer for legal obligations, fraud
                prevention, security, accounting, or dispute resolution.
              </p>
              <Link href="/work/come-together/delete" className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15">
                <Trash2 size={16} aria-hidden />
                Request account and data deletion
              </Link>
            </Section>

            <Section id="choices" title="Your Choices and Rights">
              <p>
                Users may disable Android notifications in device settings and can change
                the app language in the companion. Depending on applicable law, users may
                request access, correction, deletion, restriction, or objection regarding
                their personal information. We may need to verify identity before acting.
              </p>
            </Section>

            <Section id="security" title="Security">
              <p>
                Come Together uses HTTPS in transit, hashed passwords, protected device
                credential storage, restricted service access, and managed infrastructure.
                No internet service can guarantee absolute security. Users should protect
                their passwords and lock devices that can access organizer data.
              </p>
            </Section>

            <Section id="children" title="Children's Privacy">
              <p>
                Come Together is not directed to children under 16. Organizers are responsible
                for obtaining any permissions required for activities involving minors and for
                collecting only information reasonably needed to run those activities.
              </p>
            </Section>

            <Section id="changes" title="Changes to This Policy">
              <p>
                We may update this policy when the app, connected service, or data practices
                change. The current version will remain available at this URL with a revised date.
              </p>
            </Section>

            <Section id="contact" title="Contact">
              <p>
                Send privacy questions to <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>,
                or use the <Link href="/work/come-together/delete" className="underline">Come Together deletion-request page</Link>.
              </p>
            </Section>
          </div>

          <nav aria-label="Come Together privacy navigation" className="mt-14 flex flex-wrap gap-3 border-t border-white/10 pt-8">
            <Link href="/work/come-together" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10">
              <ArrowLeft size={16} aria-hidden />
              Back to Come Together
            </Link>
            <Link href="/work/come-together/delete" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10">
              <Trash2 size={16} aria-hidden />
              Delete account and data
            </Link>
          </nav>
        </div>
      </article>
    </main>
  );
}
