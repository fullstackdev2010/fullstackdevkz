import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Trash2 } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy - TradesMate Android App",
  description: "Privacy Policy for the TradesMate Android business management app and connected service.",
  alternates: { canonical: "/work/tradesmate/privacy" },
};

const EMAIL = "info@fullstackdev.kz";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-28"><h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2><div className="mt-5 space-y-4 text-[var(--muted)]">{children}</div></section>;
}

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <article className="rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm">
        <div className="px-6 py-8 md:px-10 md:py-12">
          <header>
            <p className="text-sm font-medium text-[var(--accent)]">TradesMate Android app and connected business service</p>
            <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">TradesMate Privacy Policy</h1>
            <p className="mt-2 text-sm text-[var(--muted)]">Last updated: August 30, 2026</p>
            <p className="mt-6 leading-relaxed text-[var(--muted)]">This policy explains how FullStack Dev KZ handles information when a business owner or team member uses TradesMate to manage customers, jobs, documents, payments, expenses, and related business activity.</p>
          </header>

          <nav aria-label="Privacy policy contents" className="mt-8 rounded-xl border border-white/10 bg-black/15 p-5"><h2 className="font-semibold text-white">Contents</h2><div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">{[["collection","Information collected"],["use","How information is used"],["sharing","Service providers"],["retention","Retention and deletion"],["security","Security"],["contact","Contact"]].map(([href,label]) => <a key={href} href={`#${href}`} className="underline">{label}</a>)}</div></nav>

          <div className="mt-12 space-y-12 text-base leading-relaxed">
            <Section id="controller" title="Developer and Privacy Contact"><p>TradesMate is operated by FullStack Dev KZ, Almaty, Kazakhstan. Privacy questions may be sent to <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p></Section>

            <Section id="collection" title="Information We Collect">
              <h3 className="text-lg font-semibold text-white">Account and business information</h3>
              <ul className="list-disc space-y-2 pl-6"><li>Name, email address, account role, and business profile</li><li>Hashed password, authentication session, and account-status information</li><li>Team-member names, email addresses, roles, and job assignments added by authorised users</li></ul>
              <h3 className="pt-2 text-lg font-semibold text-white">Customer and job information</h3>
              <ul className="list-disc space-y-2 pl-6"><li>Customer names, phone numbers, email addresses, and addresses entered by the business</li><li>Job titles, addresses, schedules, status, assigned team member, reminder settings, notes, and before-or-after photos when uploaded</li></ul>
              <h3 className="pt-2 text-lg font-semibold text-white">Financial and document information</h3>
              <ul className="list-disc space-y-2 pl-6"><li>Quotes and invoices, line items, tax, totals, currency, notes, due dates, and document status</li><li>Payments, expenses, expense categories, and job associations</li><li>Calculated revenue, outstanding balance, overdue amount, expenses, and profit summaries</li></ul>
              <h3 className="pt-2 text-lg font-semibold text-white">Device, notification, and subscription information</h3>
              <ul className="list-disc space-y-2 pl-6"><li>Push notification token and notification permission status when reminders are enabled</li><li>App version, operating system, IP address, request time, and limited security or diagnostic logs</li><li>Subscription product, entitlement, purchase status, and pseudonymous app-user identifier</li></ul>
              <p>TradesMate does not require access to the device contact list. Customer contact information is entered by an authorised business user. Payment-card details are handled by Google Play and are not received by FullStack Dev KZ.</p>
            </Section>

            <Section id="use" title="How We Use Information"><ul className="list-disc space-y-2 pl-6"><li>Create, authenticate, and support TradesMate accounts</li><li>Store and synchronise business, customer, job, document, payment, expense, and team records</li><li>Calculate business dashboard and multi-currency financial summaries</li><li>Send job reminders and other operational notifications selected by the user</li><li>Manage subscription access and restore eligible purchases</li><li>Provide support, prevent abuse, secure the service, and diagnose failures</li></ul><p>TradesMate does not sell personal information and does not use customer, job, or financial records for third-party advertising.</p></Section>

            <Section id="responsibility" title="Business User Responsibilities"><p>Businesses using TradesMate determine which customer and team information they enter and are responsible for having a lawful reason to keep and use it. They should limit records to what is needed for the working relationship, protect account access, and respond appropriately to requests from their own customers or staff.</p></Section>

            <Section id="sharing" title="Service Providers and Data Sharing"><p>Information may be processed by providers needed to operate TradesMate:</p><ul className="list-disc space-y-3 pl-6"><li>Secure server and database infrastructure used to host the TradesMate API and business records</li><li>Expo and Firebase infrastructure for Android push notifications</li><li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Google Play</a> for app distribution, purchases, and platform services</li><li><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">RevenueCat</a> for subscription entitlement management</li><li><a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">Resend</a> when a user submits a support or deletion request through FullStack Dev KZ</li></ul><p>Providers may process data in countries other than the user&apos;s country. Information may also be disclosed when required by law, to protect users or the service, or during a business transfer subject to appropriate safeguards.</p></Section>

            <Section id="retention" title="Data Retention and Deletion"><p>Account and operational business records are retained while the account is active and as needed to provide document history, subscription access, support, security, accounting, and legal compliance.</p><p>After a verified deletion request, we delete or anonymise the account and associated business, customer, job, document, payment, expense, team, photo, and notification-token data from active systems, except where limited retention is required for legal obligations, fraud prevention, accounting, security, or dispute resolution.</p><p>We aim to complete verified requests within 30 days. Residual copies may remain in encrypted or access-controlled backups for up to 90 days before routine deletion.</p><Link href="/work/tradesmate/delete" className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"><Trash2 size={16} aria-hidden />Request account and data deletion</Link></Section>

            <Section id="choices" title="Your Choices and Rights"><p>Users may edit business records through the app, disable Android notifications in device settings, and cancel subscriptions through Google Play. Depending on applicable law, users may request access, correction, deletion, restriction, portability, or objection regarding their personal information. Identity verification may be required.</p></Section>
            <Section id="security" title="Security"><p>TradesMate uses HTTPS in transit, hashed passwords, protected credential storage on the device, role-aware access, and restricted service infrastructure. No online service can guarantee absolute security. Users should protect their credentials and lock devices that can access customer or financial records.</p></Section>
            <Section id="children" title="Children's Privacy"><p>TradesMate is a business tool and is not directed to children under 16.</p></Section>
            <Section id="changes" title="Changes to This Policy"><p>We may update this policy when TradesMate, its providers, or data practices change. The current version will remain available at this URL with a revised date.</p></Section>
            <Section id="contact" title="Contact"><p>Send privacy questions to <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>, or use the <Link href="/work/tradesmate/delete" className="underline">TradesMate deletion-request page</Link>.</p></Section>
          </div>

          <nav aria-label="TradesMate privacy navigation" className="mt-14 flex flex-wrap gap-3 border-t border-white/10 pt-8"><Link href="/work/tradesmate" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"><ArrowLeft size={16} aria-hidden />Back to TradesMate</Link><Link href="/work/tradesmate/delete" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"><Trash2 size={16} aria-hidden />Delete account and data</Link></nav>
        </div>
      </article>
    </main>
  );
}
