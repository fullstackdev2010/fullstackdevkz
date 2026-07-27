import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Download,
  ExternalLink,
  QrCode,
  Tablet,
  Trophy,
  Tv,
  Users,
} from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { GlassCard } from "@/components/ui/GlassCard";
import { QualityBadge } from "@/components/ui/QualityBadge";
import { PUBPLAY_PLAY_URL } from "@/lib/constants";

const title = "PubPlay: Pub Games Night System";
const description =
  "Run darts, pool, bingo, quizzes, and pub tournaments from an Android tablet while players join by QR code and follow live fixtures and leaderboards.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/pubplay" },
  keywords: [
    "pub games night system",
    "pub tournament software",
    "darts league app",
    "pool tournament app",
    "pub leaderboard display",
    "QR code games night",
    "Android tablet pub app",
  ],
  openGraph: {
    title,
    description,
    url: "/work/pubplay",
    type: "article",
    images: [
      {
        url: "/demos/preview/pubplay.jpg",
        width: 1920,
        height: 1080,
        alt: "PubPlay host dashboard running a pub games night on an Android tablet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/demos/preview/pubplay.jpg"],
  },
};

const systemParts = [
  {
    icon: Tablet,
    title: "Host tablet",
    text: "Staff create the event, confirm players, generate fixtures, enter official scores, and archive completed nights.",
  },
  {
    icon: QrCode,
    title: "Player web app",
    text: "Customers scan a QR code, enter a name or team, and join in their browser. No download or player account is required.",
  },
  {
    icon: Tv,
    title: "Live TV display",
    text: "The pub screen automatically shows the join code, upcoming fixtures, latest results, and current standings.",
  },
];

const pubBenefits = [
  {
    title: "Bring structure to busy nights",
    text: "Replace paper lists and improvised spreadsheets with one clear event flow that staff can follow.",
  },
  {
    title: "Make joining effortless",
    text: "A QR code gets customers into the event from their own phones without an installation queue.",
  },
  {
    title: "Build a reason to return",
    text: "Visible fixtures, winners, and archived results help turn a casual game into a repeat weekly event.",
  },
  {
    title: "Keep the room involved",
    text: "Live standings and the next fixture stay visible on the TV while the host keeps control on the tablet.",
  },
];

const tabletScreens = [
  {
    src: "/demos/pubplay/01.jpg",
    alt: "PubPlay owner sign-in and account creation screen",
    caption: "Secure venue owner access",
  },
  {
    src: "/demos/pubplay/02.jpg",
    alt: "PubPlay venue setup and games night dashboard",
    caption: "Venue setup and games-night control",
  },
  {
    src: "/demos/pubplay/03.jpg",
    alt: "PubPlay player QR code and join code",
    caption: "Instant QR and join-code registration",
  },
  {
    src: "/demos/pubplay/04.jpg",
    alt: "PubPlay subscription and TV display setup",
    caption: "Subscription and live TV setup",
  },
  {
    src: "/demos/pubplay/05.jpg",
    alt: "PubPlay players, fixtures, and score entry",
    caption: "Players, fixtures, and score entry",
  },
  {
    src: "/demos/pubplay/06.jpg",
    alt: "PubPlay live leaderboard and tablet theme options",
    caption: "Live standings and venue display",
  },
];

const playerScreens = [
  {
    src: "/demos/pubplay/07.png",
    alt: "PubPlay mobile web page for joining a darts night",
    caption: "Scan, enter a name, and join",
  },
  {
    src: "/demos/pubplay/08.png",
    alt: "PubPlay mobile web page confirming player check-in",
    caption: "Check-in, fixtures, and leaderboard",
  },
];

const eventFlow = [
  "Choose the game, format, and event name on the host tablet.",
  "Open registration and show the player QR code on the tablet or TV.",
  "Check player and team names, then generate round-robin or knockout fixtures.",
  "Enter each official result while phones and the TV update automatically.",
  "Finish the event, confirm the winner, and keep the results in the archive.",
];

const supportedGames = [
  "Darts",
  "Pool",
  "Quiz",
  "Bingo",
  "Dominoes",
  "Cribbage",
  "Skittles",
  "Shuffleboard",
  "Table football",
  "Custom games",
];

const faqs = [
  {
    question: "Do players need to install an app?",
    answer:
      "No. Players scan the event QR code and join from a mobile web page. No player account is required.",
  },
  {
    question: "Does the tablet need to be connected to the TV?",
    answer:
      "No HDMI connection is needed. The tablet and TV use their own internet connections and the TV opens a secure browser display.",
  },
  {
    question: "Which tournament formats are supported?",
    answer:
      "PubPlay supports individual round robin, team round robin, and knockout tournaments, including automatic handling of knockout byes.",
  },
  {
    question: "Can a pub correct a score?",
    answer:
      "Yes. The host can update a saved result while the event is still in progress. Finished and archived events are read-only.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: title,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android",
      description,
      url: "https://www.fullstackdev.kz/work/pubplay",
      downloadUrl: PUBPLAY_PLAY_URL,
      featureList: [
        "QR player registration",
        "Round-robin and knockout fixtures",
        "Live TV display",
        "Score entry and leaderboards",
        "Completed event archive",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

function SectionHeading({
  eyebrow,
  title: heading,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mb-6 max-w-3xl">
      <div className="text-sm font-medium text-[var(--accent)]">{eyebrow}</div>
      <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{heading}</h2>
      <p className="mt-3 text-[var(--muted)]">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              seed="pubplay-games-night-system"
              palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]}
              static
            />
          </div>

          <div className="relative z-10 grid min-w-0 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="flex items-start gap-4">
                <QualityBadge size="md" className="mt-1 hidden sm:block" />
                <div>
                  <div className="text-sm font-medium text-[var(--accent)]">
                    Android tablet + player web + TV
                  </div>
                  <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                    PubPlay: Pub Games Night System
                  </h1>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">
                Turn darts, pool, bingo, quizzes, and tournaments into organised
                weekly events. Staff run the night from one Android tablet while
                players join by QR code and follow the action live.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={PUBPLAY_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"
                >
                  <ExternalLink size={17} aria-hidden />
                  View on Google Play
                </a>
                <a
                  href="/downloads/pubplay-pub-owner-guide.rtf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium transition hover:bg-white/10"
                >
                  <Download size={17} aria-hidden />
                  Download pub owner guide
                </a>
                <Link
                  href="/partners/samuel-cascadia"
                  className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 text-sm font-medium transition hover:bg-white/10"
                >
                  UK campaign
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <GlassCard className="p-5">
                  <div className="text-sm text-[var(--muted)]">Player install</div>
                  <div className="mt-1 text-2xl font-semibold">None</div>
                  <div className="mt-1 text-xs text-[var(--muted)]">Join in browser</div>
                </GlassCard>
                <GlassCard className="p-5">
                  <div className="text-sm text-[var(--muted)]">Event formats</div>
                  <div className="mt-1 text-2xl font-semibold">3</div>
                  <div className="mt-1 text-xs text-[var(--muted)]">Solo, team, knockout</div>
                </GlassCard>
                <GlassCard className="p-5">
                  <div className="text-sm text-[var(--muted)]">Venue screens</div>
                  <div className="mt-1 text-2xl font-semibold">Live</div>
                  <div className="mt-1 text-xs text-[var(--muted)]">Tablet, phone, TV</div>
                </GlassCard>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-2xl">
              <Image
                src="/demos/pubplay/02.jpg"
                alt="PubPlay venue setup and live games-night dashboard on an Android tablet"
                width={1920}
                height={1080}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="One connected system"
            title="The host runs it. Players join it. The room follows it."
            text="PubPlay separates each job onto the screen where it works best, while keeping the event data in sync."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {systemParts.map(({ icon: Icon, title: itemTitle, text }) => (
              <GlassCard key={itemTitle} className="h-full">
                <Icon className="text-[var(--accent)]" size={28} aria-hidden />
                <h3 className="mt-4 text-xl font-semibold">{itemTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{text}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="For pub owners"
            title="More than scoring software"
            text="The practical value is a smoother night for staff and a more visible, repeatable event for customers."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {pubBenefits.map((benefit) => (
              <GlassCard key={benefit.title} className="h-full">
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{benefit.text}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Host tablet"
            title="Everything the games host needs in one landscape workspace"
            text="Set up the venue, open registration, create fixtures, record scores, show the live board, and preserve completed events."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {tabletScreens.map((screen) => (
              <figure key={screen.src}>
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/30 shadow-[var(--shadow-md)]">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={1920}
                    height={1080}
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-[var(--muted)]">
                  {screen.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Player experience"
              title="No app download between the player and the game"
              text="Customers scan the displayed QR code, check the event details, enter their name or team, and receive a clear confirmation."
            />
            <GlassCard>
              <Users className="text-[var(--accent)]" size={28} aria-hidden />
              <h3 className="mt-4 text-xl font-semibold">Fast enough for a pub queue</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                The same phone page later shows relevant fixtures, players, and
                live standings. The host remains responsible for official scores.
              </p>
            </GlassCard>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {playerScreens.map((screen) => (
              <figure key={screen.src} className="mx-auto w-full max-w-[330px]">
                <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-black/40 p-2 shadow-2xl">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={1080}
                    height={1920}
                    className="h-auto w-full rounded-[1.5rem]"
                  />
                </div>
                <figcaption className="mt-2 text-center text-sm text-[var(--muted)]">
                  {screen.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="A complete event loop"
            title="From opening registration to archived results"
            text="The workflow is designed so a member of staff can understand what happens next without managing separate tools."
          />
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <GlassCard>
              <ol className="space-y-5">
                {eventFlow.map((step, index) => (
                  <li key={step} className="grid grid-cols-[2.25rem_1fr] gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 font-semibold">
                      {index + 1}
                    </span>
                    <p className="pt-1.5 text-sm leading-6 text-[var(--muted)]">{step}</p>
                  </li>
                ))}
              </ol>
            </GlassCard>
            <GlassCard>
              <CalendarDays className="text-[var(--accent)]" size={28} aria-hidden />
              <h3 className="mt-4 text-xl font-semibold">Built for the weekly rhythm</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Finished nights become read-only records with the final leaderboard,
                every result, the winner, and a results QR code players can scan later.
              </p>
              <Trophy className="mt-6 text-[var(--accent)]" size={28} aria-hidden />
              <h3 className="mt-4 text-xl font-semibold">Visible progress</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                Live leaderboards give every match context and give regular players a
                reason to follow the event through to the end.
              </p>
            </GlassCard>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Flexible by design"
            title="Familiar pub games, without locking the venue into one format"
            text="Use a built-in game type or name a custom event, then choose the competition structure that suits the room."
          />
          <GlassCard>
            <div className="flex flex-wrap gap-2">
              {supportedGames.map((game) => (
                <span
                  key={game}
                  className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-1.5 text-sm"
                >
                  {game}
                </span>
              ))}
            </div>
          </GlassCard>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Pub owner guide"
            title="A practical reference for setup, every games night, and troubleshooting"
            text="The downloadable guide covers first-time setup, TV connection, player joining, fixtures, scoring, knockout rounds, archiving, subscriptions, and safe operation."
          />
          <GlassCard className="overflow-hidden">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-xl font-semibold">PubPlay Guide for Pub Owners and Staff</h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)]">
                  Keep a copy available to the owner and games host before the first
                  event. The file opens in Microsoft Word, WordPad, LibreOffice, and
                  other RTF-compatible editors.
                </p>
              </div>
              <a
                href="/downloads/pubplay-pub-owner-guide.rtf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"
              >
                <Download size={17} aria-hidden />
                Download guide
              </a>
            </div>
          </GlassCard>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Questions pub owners ask"
            title="The practical details"
            text="A few essentials to make the system easy to evaluate before the first event."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <GlassCard key={faq.question} className="h-full">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">Start one night</div>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Turn it into the event customers expect next week.
              </h2>
              <p className="mt-3 max-w-2xl text-[var(--muted)]">
                Install PubPlay on the host tablet, or speak with Samuel Cascadia
                about the UK pub campaign and first-night rollout.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={PUBPLAY_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"
              >
                <ExternalLink size={17} aria-hidden />
                Google Play
              </a>
              <Link
                href="/partners/samuel-cascadia"
                className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 text-sm font-medium transition hover:bg-white/10"
              >
                UK campaign
              </Link>
            </div>
          </div>
        </section>

        <nav aria-label="Product navigation" className="mt-16 border-t border-white/10 pt-8">
          <Link
            href="/work"
            className="inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
          >
            Back to Work
          </Link>
        </nav>
      </div>
    </main>
  );
}
