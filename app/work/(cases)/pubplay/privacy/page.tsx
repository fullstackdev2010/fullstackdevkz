import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Trash2 } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy - PubPlay Host",
  description:
    "Privacy Policy for the PubPlay Host Android app, player join website, TV display, and games-night services.",
  alternates: { canonical: "/work/pubplay/privacy" },
};

const EMAIL = "info@fullstackdev.kz";

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
      <div className="mt-5 space-y-4 text-[var(--muted)]">{children}</div>
    </section>
  );
}

export default function Page() {
  const updated = "July 27, 2026";

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <article className="rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm">
        <div className="px-6 py-8 md:px-10 md:py-12">
          <header>
            <p className="text-sm font-medium text-[var(--accent)]">
              PubPlay Host Android app
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
              PubPlay Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Last updated: {updated}
            </p>
            <p className="mt-6 leading-relaxed text-[var(--muted)]">
              This Privacy Policy explains how Fullstack Dev KZ handles information
              when pubs use PubPlay Host, the PubPlay player join website, the live TV
              display, and related games-night services. PubPlay Host is also presented
              as PubPlay: Pub Games Night System.
            </p>
          </header>

          <nav
            aria-label="Privacy policy contents"
            className="mt-8 rounded-xl border border-white/10 bg-black/15 p-5"
          >
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
                <a key={href} href={`#${href}`} className="underline">
                  {label}
                </a>
              ))}
            </div>
          </nav>

          <div className="mt-12 space-y-12 text-base leading-relaxed">
            <Section id="controller" title="Developer and Privacy Contact">
              <p>
                PubPlay is operated by Fullstack Dev KZ, Almaty, Kazakhstan. For
                privacy questions, contact{" "}
                <a className="underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
                .
              </p>
            </Section>

            <Section id="collection" title="Information We Collect">
              <p>Depending on how you use PubPlay, we process the following information:</p>

              <h3 className="pt-2 text-lg font-semibold text-white">
                Owner account and authentication data
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Owner or account name and business email address</li>
                <li>Hashed password and authentication or session tokens</li>
                <li>Account creation, sign-in, and account-status information</li>
              </ul>

              <h3 className="pt-2 text-lg font-semibold text-white">Venue data</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Pub or venue name, postcode, and city</li>
                <li>Venue preferences, display theme, and referral or partner code</li>
                <li>Subscription status and app version information</li>
              </ul>

              <h3 className="pt-2 text-lg font-semibold text-white">
                Games-night data
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Event name, game type, tournament format, status, and timestamps</li>
                <li>Player names or nicknames and optional team names</li>
                <li>Fixtures, scores, standings, winners, and archived event results</li>
                <li>Join codes, display codes, and information needed to keep screens in sync</li>
              </ul>
              <p>
                Players do not create a PubPlay account. A player name or nickname and,
                for team events, a team name are used to participate in a specific
                games night. Players may use a nickname instead of a full legal name.
              </p>

              <h3 className="pt-2 text-lg font-semibold text-white">
                Purchase and subscription data
              </h3>
              <p>
                Google Play and RevenueCat may provide product identifiers,
                subscription status, purchase tokens, entitlement status, and related
                transaction information. PubPlay does not receive or store payment-card
                details.
              </p>

              <h3 className="pt-2 text-lg font-semibold text-white">
                Technical and support data
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  IP address, request time, device or app identifiers, app version,
                  operating system, and diagnostic or security logs
                </li>
                <li>
                  Information submitted through support, privacy, or deletion-request forms
                </li>
                <li>
                  Browser storage used to remember a player check-in on the same device
                </li>
              </ul>
            </Section>

            <Section id="use" title="How We Use Information">
              <ul className="list-disc space-y-2 pl-6">
                <li>Create and authenticate venue-owner accounts</li>
                <li>Set up venues and run live games nights</li>
                <li>Register players and generate fixtures, scores, and leaderboards</li>
                <li>Synchronize the host tablet, player pages, and TV display</li>
                <li>Maintain event archives and final results</li>
                <li>Validate subscriptions, restore purchases, and prevent fraud</li>
                <li>Provide support, process privacy requests, and secure the service</li>
                <li>Diagnose failures and improve reliability</li>
              </ul>
              <p>
                PubPlay does not sell personal information and does not use PubPlay
                data for third-party advertising.
              </p>
            </Section>

            <Section id="sharing" title="Service Providers and Data Sharing">
              <p>
                Information may be processed by service providers acting on our behalf
                where necessary to operate PubPlay:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Google Play
                  </a>{" "}
                  for app distribution, billing, purchase validation, and subscription management
                </li>
                <li>
                  <a
                    href="https://www.revenuecat.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    RevenueCat
                  </a>{" "}
                  for subscription and entitlement management
                </li>
                <li>
                  Hosting, database, networking, and security providers that run the
                  PubPlay backend and player-facing websites
                </li>
                <li>
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Resend
                  </a>{" "}
                  when a user submits a support or deletion request through this website
                </li>
              </ul>
              <p>
                We may disclose information if required by law, to protect users or
                the service, or as part of a business transfer subject to appropriate
                safeguards. Service providers may process data in countries other than
                the user&apos;s country.
              </p>
            </Section>

            <Section id="retention" title="Data Retention and Deletion">
              <p>
                Owner account, venue, active-event, player, fixture, score, and archive
                data are retained while the account is active so that PubPlay can
                provide the service and preserve event history.
              </p>
              <p>
                When a verified venue-owner deletion request is completed, we delete
                the PubPlay owner account and associated venue, event, player, fixture,
                score, and leaderboard data from active systems. Player-only deletion
                requests remove or anonymize the identified player participation data
                where it can be reliably located without compromising other users&apos;
                records.
              </p>
              <p>
                We aim to complete verified requests within 30 days. Residual copies
                may remain in encrypted or access-controlled backups for up to 90 days
                before routine deletion. We may retain limited records for longer when
                reasonably necessary for legal obligations, accounting, fraud
                prevention, dispute resolution, or security. Such retained data is
                restricted to those purposes.
              </p>
              <p>
                Deleting a PubPlay account does not automatically cancel a Google Play
                subscription. Subscriptions must be cancelled through Google Play.
              </p>
              <Link
                href="/work/pubplay/delete"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Trash2 size={16} aria-hidden />
                Request account and data deletion
              </Link>
            </Section>

            <Section id="security" title="Security">
              <p>
                PubPlay uses HTTPS in transit, authentication controls, hashed
                passwords, restricted administrative access, and service monitoring
                intended to protect personal information. No internet service can
                guarantee absolute security.
              </p>
              <p>
                Venue owners should use a unique password, keep the host tablet locked
                when unattended, and avoid displaying credentials or referral codes.
              </p>
            </Section>

            <Section id="choices" title="Your Choices and Rights">
              <p>
                Depending on applicable law, users may request access, correction, or
                deletion of personal information, or object to certain processing.
                We may need to verify the requester&apos;s identity and relationship to
                the relevant account or event before acting.
              </p>
              <p>
                Players can ask the venue host to correct a display name while an event
                is active, or submit a deletion request using the page linked above.
              </p>
            </Section>

            <Section id="children" title="Children's Privacy">
              <p>
                PubPlay is a venue-management service and is not directed to children.
                Venue owners are responsible for operating events in accordance with
                local age restrictions and using only the participant information
                reasonably needed to run an event.
              </p>
            </Section>

            <Section id="changes" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy when PubPlay or its data practices
                change. The current version will remain available at this URL with a
                revised last-updated date.
              </p>
            </Section>

            <Section id="contact" title="Contact">
              <p>
                Privacy questions and requests can be sent to{" "}
                <a className="underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
                , or submitted through the{" "}
                <Link href="/work/pubplay/delete" className="underline">
                  PubPlay deletion-request page
                </Link>
                .
              </p>
            </Section>
          </div>

          <nav
            aria-label="PubPlay privacy navigation"
            className="mt-14 flex flex-wrap gap-3 border-t border-white/10 pt-8"
          >
            <Link
              href="/work/pubplay"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
            >
              <ArrowLeft size={16} aria-hidden />
              Back to PubPlay
            </Link>
            <Link
              href="/work/pubplay/delete"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
            >
              <Trash2 size={16} aria-hidden />
              Delete account and data
            </Link>
          </nav>
        </div>
      </article>
    </main>
  );
}
