// app/privacy/page.tsx
import type { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy – Iskra Trade",
  description:
    "Privacy policies for Iskra Trade. Data collection, processing, storage, security, and user rights.",
  alternates: { canonical: "/privacy" },
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      <div className="mt-6 space-y-4 text-[var(--muted)]">{children}</div>
    </section>
  );
}

export default async function Page() {
  // Content adapted from the provided privacy files (lightly formatted for the web).
  const updated = "November 6, 2025";

  return (
    <div className="relative">
      <section className="relative mx-auto max-w-5xl px-6 py-16">
        {/* ISKRA POLICY */}
        <div className="mt-14 space-y-8">
          <Section id="iskra" title="Iskra Trade — Privacy Policy">
            <p className="mt-3 text-[var(--muted)] max-w-prose">
              Last updated: {updated}.
            </p>
            <p>
              <strong>What we collect</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>Account info you provide (email, username, optional phone).</li>
              <li>
                Order data you create in the app (items, quantities, price
                snapshots, totals, timestamps).
              </li>
              <li>
                Technical data: basic device/network info necessary to run the
                app and secure your session (e.g., IP address in server logs,
                error logs).
              </li>
              <li>
                Authentication tokens: short-lived access token; hashed refresh
                tokens on the server.
              </li>
            </ul>

            <p>
              <strong>What we don’t collect</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>No precise location, contacts, photos, microphone, camera, or SMS.</li>
              <li>No sensitive personal data (health, financial account numbers, etc.).</li>
              <li>No third-party advertising SDKs or cross-app tracking.</li>
            </ul>

            <p>
              <strong>How we use your data</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>To authenticate your account and keep you signed in.</li>
              <li>
                To show catalog data and process orders (including server-side
                price/total verification).
              </li>
              <li>To improve reliability and security (rate limiting, error logs).</li>
              <li>
                To support business operations (e.g., exporting orders to your
                accounting/BI systems).
              </li>
            </ul>

            <p>
              <strong>Storage &amp; security</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>
                On device: access/refresh state stored using SecureStore where
                available (fallback to AsyncStorage if necessary). Biometric
                checks can gate access on supported devices.
              </li>
              <li>
                On server: passwords are bcrypt-hashed; refresh tokens are stored
                as SHA-256 hashes; database protected by standard server and
                network controls.
              </li>
              <li>
                Retention: order records and user accounts are retained for
                business and legal purposes. You may request deletion of your
                account where applicable.
              </li>
            </ul>

            <p>
              <strong>Data sharing</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>We do not sell personal data.</li>
              <li>
                We may share data with service providers (e.g., hosting/database
                providers) strictly to operate the service, under contractual
                safeguards.
              </li>
              <li>
                If required by law, we may disclose data to competent authorities.
              </li>
            </ul>

            <p>
              <strong>Your choices &amp; rights</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>You can sign out, disable biometrics, or reset your PIN at any time.</li>
              <li>
                You may request access, correction, or deletion of your data where
                legally applicable by contacting us (see Contact).
              </li>
              <li>
                You can use the app without granting any optional permissions
                (none are required for core features).
              </li>
            </ul>

            <p>
              <strong>Children</strong>
              <br />
              The app is intended for business users and is not directed to
              children under 13 (or the relevant age in your region).
            </p>

            <p>
              <strong>Contact</strong>
              <br />
              For privacy questions or data requests, contact:
              <span className="whitespace-pre"> </span>
              <a className="underline" href="mailto:support@iskrasales.ru">
                support@iskrasales.ru
              </a>
              .
            </p>

            <p>
              <strong>Policy updates</strong>
              <br />
              We may update this policy from time to time. Material changes will
              be posted in-app or on our website with an updated “last updated”
              date.
            </p>
          </Section>
        </div>
      </section>
    </div>
  );
}
