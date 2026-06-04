import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy - ExpenseFlow",
  description:
    "Privacy Policy for the ExpenseFlow Android app. Learn how expense data, settings, purchases, and device storage are handled.",
  alternates: { canonical: "/work/expense/privacy" },
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
      <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      <div className="mt-6 space-y-4 text-[var(--muted)]">{children}</div>
    </section>
  );
}

export default function Page() {
  const updated = "June 4, 2026";

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm">
        <div className="px-6 py-8 md:px-10 md:py-12">
          <header>
            <h1 className="text-3xl font-semibold text-white md:text-4xl">
              ExpenseFlow Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Last updated: {updated}
            </p>
          </header>

          <div className="mt-10 space-y-12 text-base leading-relaxed text-[var(--muted)]">
            <Section id="info" title="Information We Collect">
              <p>
                Expense does not require account registration and does not collect
                personal information such as your name, email address, or phone number.
              </p>
              <p>The app stores the following data locally on your device:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Expense titles, amounts, dates, and categories you create</li>
                <li>Theme, language, and app settings</li>
                <li>Purchase status if premium features are enabled</li>
              </ul>
            </Section>

            <Section id="storage" title="Data Storage">
              <p>
                Expense data is stored locally on your device. The developer does
                not operate a backend for reading your expense entries and does not
                have access to your personal spending history.
              </p>
              <p>If you uninstall the app, locally stored data may be removed.</p>
            </Section>

            <Section id="purchases" title="Purchases">
              <p>
                ExpenseFlow may offer optional in-app purchases. Purchases are processed
                through Google Play Billing and RevenueCat. The app does not store
                or receive your payment card information.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.revenuecat.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    RevenueCat Privacy Policy
                  </a>
                </li>
              </ul>
            </Section>

            <Section id="internet" title="Internet Access">
              <p>
                The app may access the internet for purchase validation, restoring
                purchases, and loading store information.
              </p>
              <p>ExpenseFlow does not send your expense entries to the developer.</p>
            </Section>

            <Section id="children" title="Children's Privacy">
              <p>
                ExpenseFlow does not knowingly collect personal information from children.
              </p>
            </Section>

            <Section id="updates" title="Policy Updates">
              <p>
                This Privacy Policy may be updated in future versions of the app.
                Changes will be published on this page with an updated date.
              </p>
            </Section>

            <Section id="contact" title="Contact">
              <p>
                For privacy questions or requests, contact the developer listed on
                the store page.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
