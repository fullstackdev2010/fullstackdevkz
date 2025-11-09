// app/work/(cases)/iskra/privacy/page.tsx
import type { Metadata } from "next";

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
      <h2 className="text-2xl md:text-3xl font-semibold text-white">{title}</h2>
      <div className="mt-6 space-y-4 text-[var(--muted)]">{children}</div>
    </section>
  );
}

export default async function Page() {
  const updated = "November 6, 2025";

  return (
    // Page background remains your site default; we place a lighter "paper" on top
    <div className="relative">
      <main className="mx-auto max-w-3xl px-6 py-16">
        {/* Paper panel */}
        <div className="rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm">
          <div className="px-6 py-8 md:px-10 md:py-12">
            <header>
              <h1 className="text-3xl md:text-4xl font-semibold text-white">
                Privacy Policy — Iskra Trade
              </h1>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Last updated: {updated}.
              </p>
            </header>

            <div className="mt-10 space-y-12 text-base leading-relaxed text-[var(--muted)]">
              <Section id="what-we-collect" title="What we collect">
                <p>
                  We collect the minimum data necessary to run the app and process your orders.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account info you provide (email, username, optional phone).</li>
                  <li>
                    Order data you create in the app (items, quantities, price snapshots, totals, timestamps).
                  </li>
                  <li>
                    Technical data: basic device/network info necessary to run the app and secure your session
                    (e.g., IP address in server logs, error logs).
                  </li>
                  <li>
                    Authentication tokens: short-lived access token; hashed refresh tokens on the server.
                  </li>
                </ul>

                <h3 className="mt-8 text-lg font-semibold text-white">What we don’t collect</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No precise location, contacts, photos, microphone, camera, or SMS.</li>
                  <li>No sensitive personal data (health, financial account numbers, etc.).</li>
                  <li>No third-party advertising SDKs or cross-app tracking.</li>
                </ul>
              </Section>

              <Section id="how-we-use" title="How we use your data">
                <ul className="list-disc pl-6 space-y-2">
                  <li>To authenticate your account and keep you signed in.</li>
                  <li>
                    To show catalog data and process orders (including server-side price/total verification).
                  </li>
                  <li>To improve reliability and security (rate limiting, error logs).</li>
                  <li>
                    To support business operations (e.g., exporting orders to your accounting/BI systems).
                  </li>
                </ul>
              </Section>

              <Section id="storage-security" title="Storage &amp; security">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    On device: access/refresh state stored using SecureStore where available (fallback to
                    AsyncStorage if necessary). Biometric checks can gate access on supported devices.
                  </li>
                  <li>
                    On server: passwords are bcrypt-hashed; refresh tokens are stored as SHA-256 hashes;
                    database protected by standard server and network controls.
                  </li>
                  <li>
                    Retention: order records and user accounts are retained for business and legal purposes.
                    You may request deletion of your account where applicable.
                  </li>
                </ul>
              </Section>

              <Section id="data-sharing" title="Data sharing">
                <ul className="list-disc pl-6 space-y-2">
                  <li>We do not sell personal data.</li>
                  <li>
                    We may share data with service providers (e.g., hosting/database providers) strictly to
                    operate the service, under contractual safeguards.
                  </li>
                  <li>If required by law, we may disclose data to competent authorities.</li>
                </ul>
              </Section>

              <Section id="your-rights" title="Your choices &amp; rights">
                <ul className="list-disc pl-6 space-y-2">
                  <li>You can sign out, disable biometrics, or reset your PIN at any time.</li>
                  <li>
                    You may request access, correction, or deletion of your data where legally applicable by
                    contacting us (see Contact).
                  </li>
                  <li>
                    You can use the app without granting any optional permissions (none are required for core
                    features).
                  </li>
                </ul>
              </Section>

              <Section id="children" title="Children">
                <p>
                  The app is intended for business users and is not directed to children under 13 (or the
                  relevant age in your region).
                </p>
              </Section>

              <Section id="contact" title="Contact">
                <p>
                  For privacy questions or data requests, contact:
                  <span className="whitespace-pre"> </span>
                  <a className="underline" href="mailto:support@iskrasales.ru">support@iskrasales.ru</a>.
                </p>
              </Section>

              <Section id="updates" title="Policy updates">
                <p>
                  We may update this policy from time to time. Material changes will be posted in-app or on
                  our website with an updated “last updated” date.
                </p>
              </Section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
