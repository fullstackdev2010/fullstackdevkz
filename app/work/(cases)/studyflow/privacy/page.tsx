import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy - StudyFlow Flashcards",
  description:
    "Privacy Policy for the StudyFlow Android flashcard app, covering local decks, review history, reminders, settings, and purchases.",
  alternates: { canonical: "/work/studyflow/privacy" },
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
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm">
        <div className="px-6 py-8 md:px-10 md:py-12">
          <header>
            <p className="text-sm text-[var(--muted)]">StudyFlow Android app</p>
            <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
              StudyFlow Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Last updated: August 8, 2026
            </p>
          </header>

          <div className="mt-10 space-y-12 text-base leading-relaxed text-[var(--muted)]">
            <Section id="overview" title="Overview">
              <p>
                StudyFlow is provided by Fullstack Dev KZ. The app does not require
                account registration and is designed to keep personal study content
                on the user's Android device.
              </p>
            </Section>

            <Section id="local-data" title="Information Stored on Your Device">
              <p>StudyFlow stores the following information locally:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Deck titles, descriptions, colors, and archive status.</li>
                <li>Flashcard questions, answers, optional hints, and deck membership.</li>
                <li>Review ratings, due dates, intervals, repetitions, lapses, and review history.</li>
                <li>Theme, language, reminder preferences, and other app settings.</li>
                <li>Locally cached purchase or reviewer-access status.</li>
              </ul>
              <p>
                The developer does not operate a backend that receives or reads your
                decks, card content, or review history.
              </p>
            </Section>

            <Section id="notifications" title="Study Reminders">
              <p>
                Lifetime Pro users may enable an optional daily reminder. StudyFlow
                requests Android notification permission only when needed and schedules
                the reminder on the device. Reminders can be changed or disabled in
                the app or Android settings.
              </p>
            </Section>

            <Section id="purchases" title="Purchases and Service Providers">
              <p>
                StudyFlow may offer a one-time Lifetime Pro purchase. Google Play
                processes payment, and RevenueCat may validate purchase and entitlement
                status. StudyFlow does not receive or store payment-card details.
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
                Internet access may be used to load product information, complete or
                restore a purchase, and validate Lifetime Pro access. Flashcard content
                is not sent to the developer for these operations.
              </p>
            </Section>

            <Section id="deletion" title="Data Deletion">
              <p>
                Use "Delete all flashcard data" in StudyFlow Settings to remove decks,
                cards, review history, reminders, preferences, and local reviewer access
                from the device. Uninstalling the app may also remove locally stored data.
              </p>
              <p>
                Purchase records associated with Google Play are controlled by Google
                and may remain available for purchase restoration and legal accounting.
              </p>
            </Section>

            <Section id="children" title="Children's Privacy">
              <p>
                StudyFlow does not knowingly collect personal information from children.
                The app does not require an account or ask users to submit personal study
                content to the developer.
              </p>
            </Section>

            <Section id="security" title="Security">
              <p>
                Keeping study content local reduces server-side exposure. Users remain
                responsible for securing their device, backups, and Google Play account.
              </p>
            </Section>

            <Section id="updates" title="Policy Updates">
              <p>
                This policy may be revised when StudyFlow features or service providers
                change. The current version will remain available at this URL with an
                updated date.
              </p>
            </Section>

            <Section id="contact" title="Contact">
              <p>
                Privacy questions can be sent to{" "}
                <a className="underline" href="mailto:info@fullstackdev.kz">
                  info@fullstackdev.kz
                </a>
                .
              </p>
              <p>Fullstack Dev KZ, Almaty, Kazakhstan.</p>
            </Section>

            <nav className="border-t border-white/10 pt-8" aria-label="StudyFlow privacy navigation">
              <Link className="underline" href="/work/studyflow">
                Back to StudyFlow
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
