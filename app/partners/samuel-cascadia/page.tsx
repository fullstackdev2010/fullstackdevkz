import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { GlassCard } from "@/components/ui/GlassCard";
import { QualityBadge } from "@/components/ui/QualityBadge";

const title = "Pub Games Night System";
const description =
  "A digital games-night system for pubs: staff run darts, pool, bingo, and tournaments from a tablet while customers join by QR code.";

export const metadata: Metadata = {
  title: "Pub Games Night System Campaign | Samuel Cascadia",
  description,
  alternates: { canonical: "/partners/samuel-cascadia" },
  keywords: [
    "pub games night system",
    "darts league software",
    "pool tournament software",
    "pub quiz and games app",
    "pub leaderboard system",
    "QR code tournament join page",
  ],
  openGraph: {
    title: "Pub Games Night System",
    description,
    url: "/partners/samuel-cascadia",
    type: "website",
    images: [
      {
        url: "/partners/samuel-cascadia.svg",
        width: 900,
        height: 1100,
        alt: "Samuel Cascadia UK partner portrait placeholder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pub Games Night System",
    description,
    images: ["/partners/samuel-cascadia.svg"],
  },
};

const outcomes = [
  "More midweek footfall",
  "More repeat customers",
  "More organised games nights",
  "Less work for staff",
  "Better atmosphere",
  "Easy promotion of weekly events",
];

const campaignHighlights = [
  {
    title: "Run the night from one tablet",
    text: "Create events, add players, start fixtures, enter scores, and keep the room updated without paper lists or messy spreadsheets.",
  },
  {
    title: "Let customers join by QR code",
    text: "Players use their own phones to join a darts league, pool tournament, bingo night, or weekly competition. No app install required.",
  },
  {
    title: "Show live leaderboards",
    text: "Put fixtures, scores, next matches, and top players on the tablet or TV so the event feels organised and worth returning to.",
  },
];

const systemParts = [
  {
    title: "Pub Tablet App",
    text: "Staff or the games host can create a night, add players, start matches, enter scores, and show live leaderboards from an Android tablet behind the bar, by the dartboard, or on a TV.",
  },
  {
    title: "Player Join Page",
    text: "Customers scan a QR code, enter a name or team name, join the tournament, and see fixtures or results from their own phone. No customer app download is needed.",
  },
  {
    title: "Online Management System",
    text: "The pub owner can create weekly nights, view past results, manage leaderboards, set pub branding, create tournaments, and keep subscription details in one secure place.",
  },
];

const examples = [
  "Tonight's Darts League",
  "Next match: John vs Mike",
  "Current score: 2-1",
  "Top player: Sarah, 15 points",
];

const launchSteps = [
  "Choose one weekly event: darts, pool, table football, bingo, or a mixed games night.",
  "Set up the pub tablet and QR join page with the pub name and basic branding.",
  "Invite players to scan, join, and see fixtures without downloading anything.",
  "Run the first night live, enter scores, and show the leaderboard on tablet or TV.",
  "Repeat weekly and build a visible local league that customers can follow.",
];

const idealPubs = [
  "Pubs with darts, pool, table football, bingo, quizzes, or regular games nights.",
  "Venues trying to improve quiet midweek evenings with repeat community events.",
  "Pub teams that want a more professional-looking night without adding staff workload.",
  "Owners who want weekly promotion material built around fixtures, results, and leaderboards.",
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mb-6">
      <div className="text-sm font-medium text-[var(--accent)]">{eyebrow}</div>
      <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-[var(--muted)]">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12">
        <section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
            backgroundSrc="/brand/main.webp"
            viewBox="0 0 1600 900"
            photos={[]}
          />
          <div className="absolute inset-0">
            <MeshBackground
              brightness={0.8}
              opacity={0.95}
              seed="pub-games-night-samuel-cascadia"
              palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]}
              static
            />
          </div>

          <div className="relative z-10 grid min-w-0 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="flex items-start gap-4">
                <QualityBadge size="md" className="mt-1 hidden sm:block" />
                <div>
                  <div className="text-sm font-medium text-[var(--accent)]">
                    Samuel Cascadia UK campaign
                  </div>
                  <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                    Turn pub games into repeat weekly events.
                  </h1>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">
                We help pubs turn casual games into repeat weekly events. Staff run
                darts, pool, bingo, or tournament nights from a tablet, and customers
                join instantly by scanning a QR code.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact?partner=samuel-cascadia&product=pub-games-night-system"
                  className="inline-flex rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"
                >
                  Book a campaign demo
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex rounded-xl border border-white/20 px-5 py-3 text-sm transition hover:bg-white/10"
                >
                  See how it works
                </a>
                <a
                  href="#launch-plan"
                  className="inline-flex rounded-xl border border-white/20 px-5 py-3 text-sm transition hover:bg-white/10"
                >
                  First night plan
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <GlassCard>
                  <div className="text-sm text-[var(--muted)]">Customer app</div>
                  <div className="mt-1 text-2xl font-semibold">None</div>
                  <div className="mt-1 text-xs text-[var(--muted)]">QR join page</div>
                </GlassCard>
                <GlassCard>
                  <div className="text-sm text-[var(--muted)]">Pub setup</div>
                  <div className="mt-1 text-2xl font-semibold">Tablet</div>
                  <div className="mt-1 text-xs text-[var(--muted)]">Bar, board, or TV</div>
                </GlassCard>
                <GlassCard>
                  <div className="text-sm text-[var(--muted)]">Best use</div>
                  <div className="mt-1 text-2xl font-semibold">Weekly</div>
                  <div className="mt-1 text-xs text-[var(--muted)]">Repeat events</div>
                </GlassCard>
              </div>
            </div>

            <GlassCard className="overflow-hidden p-4">
              <div className="grid gap-4 sm:grid-cols-[180px_1fr] lg:grid-cols-1">
                <div className="relative aspect-[9/11] overflow-hidden rounded-2xl border border-white/15 bg-black/20">
                  <Image
                    src="/partners/samuel-cascadia.svg"
                    alt="Samuel Cascadia UK partner portrait placeholder"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-2">
                  <div className="text-sm font-medium text-[var(--accent)]">Partner introduction</div>
                  <h2 className="mt-2 text-2xl font-semibold">Recommended by Samuel Cascadia</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    Samuel is the UK promotion partner for this pub-focused product page.
                    This page is designed for pub owners who want a practical way to
                    make games nights easier to host and easier to promote.
                  </p>
                  <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
                    Samuel Cascadia may receive a commission from qualifying sales.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Campaign offer"
            title="A landing page for pubs that want more than a one-off games night"
            text="This page is written for pub owners and managers. The pitch is simple: make games easier to run, easier to join, easier to show on screen, and easier to repeat next week."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {campaignHighlights.map((item) => (
              <GlassCard key={item.title} className="h-full">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mt-14">
          <SectionHeading
            eyebrow="Simple pub workflow"
            title="Three connected parts, one live games night"
            text="The system keeps the tablet, customer phones, and TV display in sync, so scores, fixtures, and leaderboards feel live without adding work for the pub team."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {systemParts.map((part) => (
              <GlassCard key={part.title} className="h-full">
                <h3 className="text-xl font-semibold">{part.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{part.text}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="launch-plan" className="mt-14 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <div className="text-sm font-medium text-[var(--accent)]">First night rollout</div>
            <h2 className="mt-2 text-2xl font-semibold">Start with one game, then make it weekly.</h2>
            <p className="mt-4 text-[var(--muted)]">
              A pub does not need a complicated launch. The best first step is one
              organised evening with a clear QR join flow and a leaderboard people can see.
            </p>
          </GlassCard>
          <GlassCard>
            <ol className="list-decimal space-y-3 pl-5 text-sm leading-6 text-[var(--muted)]">
              {launchSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </GlassCard>
        </section>

        <section className="mt-14 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard>
            <div className="text-sm font-medium text-[var(--accent)]">Live board example</div>
            <h2 className="mt-2 text-2xl font-semibold">Make the night feel organised</h2>
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-5">
              <ul className="space-y-3 text-lg font-semibold">
                {examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="text-sm font-medium text-[var(--accent)]">Pitch for pub owners</div>
            <h2 className="mt-2 text-2xl font-semibold">Not technology for its own sake</h2>
            <p className="mt-4 text-[var(--muted)]">
              The value is a better pub night: easier hosting, more energy in the
              room, and a reason for customers to come back next week.
            </p>
            <p className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-lg font-semibold">
              This is a digital games-night system for pubs. Staff run darts, pool,
              bingo, or tournaments from a tablet. Customers join by QR code, so
              they do not need to download anything.
            </p>
          </GlassCard>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Why it helps"
            title="Designed around repeat weekly events"
            text="The strongest pitch is not that the pub gets software. The pub gets a more reliable reason for people to gather, play, stay longer, and return."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome) => (
              <GlassCard key={outcome} className="p-5 md:p-6">
                <div className="text-lg font-semibold">{outcome}</div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Best-fit venues"
            title="Who this campaign is for"
            text="Samuel can use this page with pubs where games already exist, but the weekly structure needs to become more visible, professional, and repeatable."
          />
          <div className="grid gap-3 md:grid-cols-2">
            {idealPubs.map((item) => (
              <GlassCard key={item} className="p-5 md:p-6">
                <p className="text-sm leading-6 text-[var(--muted)]">{item}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">For UK pubs</div>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Ready to test the first pub games night?
              </h2>
              <p className="mt-3 max-w-2xl text-[var(--muted)]">
                Start with one night, one tablet, and one QR code. Samuel can introduce
                the campaign, and Fullstack Dev KZ can shape the technical rollout.
              </p>
            </div>
            <Link
              href="/contact?partner=samuel-cascadia&product=pub-games-night-system"
              className="inline-flex rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"
            >
              Book a campaign demo
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
