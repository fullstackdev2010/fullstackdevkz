// app/work/todo/privacy/page.tsx

import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy – Momentum TODO",
  description:
    "Privacy Policy for Momentum TODO productivity app. Data collection, storage, purchases, and security.",
  alternates: { canonical: "/work/todo/privacy" },
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
      <h2 className="text-2xl md:text-3xl font-semibold text-white">
        {title}
      </h2>
      <div className="mt-6 space-y-4 text-[var(--muted)]">
        {children}
      </div>
    </section>
  );
}

export default function Page() {
  const updated = "March 25, 2026";

  return (
    <div className="relative">

      <main className="mx-auto max-w-3xl px-6 py-16">

        <div className="rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm">

          <div className="px-6 py-8 md:px-10 md:py-12">

            <header>
              <h1 className="text-3xl md:text-4xl font-semibold text-white">
                Momentum TODO — Privacy Policy
              </h1>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Last updated: {updated}
              </p>
            </header>

            <div className="mt-10 space-y-12 text-base leading-relaxed text-[var(--muted)]">

              {/* 1 */}
              <Section id="info" title="Information We Collect">

                <p>
                  Momentum TODO does not require account registration and does not
                  collect personal information such as name, email address, or phone number.
                </p>

                <p>
                  The App stores the following data locally on your device:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Tasks you create</li>
                  <li>Routine settings</li>
                  <li>Theme preferences</li>
                  <li>App settings</li>
                  <li>Purchase status (Pro unlock)</li>
                </ul>

                <p>
                  This data is stored only on your device using local storage.
                </p>

              </Section>


              {/* 2 */}
              <Section id="purchases" title="Purchases">

                <p>
                  Momentum TODO offers optional in-app purchases to unlock Pro features.
                </p>

                <p>
                  Purchases are processed securely through Google Play Billing and RevenueCat.
                  The App does not store or receive your payment information.
                </p>

                <p>
                  Google Play and RevenueCat may collect purchase-related information
                  according to their own privacy policies:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      className="underline"
                    >
                      Google Play Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.revenuecat.com/privacy"
                      target="_blank"
                      className="underline"
                    >
                      RevenueCat Privacy Policy
                    </a>
                  </li>
                </ul>

              </Section>


              {/* 3 */}
              <Section id="storage" title="Data Storage">

                <p>
                  All task data and settings are stored locally on your device.
                  The developer does not have access to your personal data.
                </p>

                <p>
                  If you uninstall the App, locally stored data may be removed.
                </p>

              </Section>


              {/* 4 */}
              <Section id="internet" title="Internet Access">

                <p>
                  The App may access the internet only for:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Purchase validation</li>
                  <li>Restoring purchases</li>
                  <li>Loading store information</li>
                </ul>

                <p>
                  The App does not send task content or personal data to any server.
                </p>

              </Section>


              {/* 5 */}
              <Section id="children" title="Children’s Privacy">

                <p>
                  Momentum TODO does not knowingly collect personal information from children.
                </p>

              </Section>


              {/* 6 */}
              <Section id="security" title="Security">

                <p>
                  The App uses standard platform security features provided by Android and iOS.
                </p>

              </Section>


              {/* 7 */}
              <Section id="updates" title="Policy Updates">

                <p>
                  This Privacy Policy may be updated in future versions of the App.
                  Changes will be published on this page with an updated date.
                </p>

              </Section>

              {/* 8 */}
              <Section id="contact" title="Contact">
                <p>
                  For privacy questions or requests, contact the developer listed on the store page.
                </p>
              </Section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}