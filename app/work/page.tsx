// app/work/page.tsx
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import CaseCard from "@/components/work/CaseCard";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { buildPageMetadata } from "@/lib/site";
import {
  EXPENSE_PLAY_URL,
  FLASHCARDS_PLAY_URL,
  HABIT_PLAY_URL,
  ISKRAUG_PLAY_URL,
  MEDITATION_PLAY_URL,
  PUBPLAY_SITE_URL,
  TRADESMATE_SITE_URL,
  TODO_PLAY_URL,
  UNISCAN_PLAY_URL,
} from "@/lib/constants";

const cases = [
  {
    href: "/work/tradesmate",
    title: "TradesMate: Jobs, Quotes & Invoices",
    summary:
      "Run jobs, customers, quotes, invoices, payments, expenses, and business performance from one Android app.",
    tags: ["Android", "FastAPI", "Trade Business", "SaaS"],
    thumb: "/demos/preview/tradesmate.png",
    externalHref: TRADESMATE_SITE_URL,
    externalLabel: "Product website",
  },
  {
    href: "/work/come-together",
    title: "Come Together: Local Clubs Platform",
    summary:
      "Publish local events, manage guests and waitlists, and turn first-time visitors into returning club members.",
    tags: ["Next.js", "Android", "FastAPI", "Local Events"],
    thumb: "/demos/preview/come-together.png",
    externalHref: "https://hellolocalclubs.com",
    externalLabel: "Live platform",
  },
  {
    href: "/work/studyflow",
    title: "StudyFlow Flashcards",
    summary:
      "Build focused decks, review due cards with spaced repetition, and understand recall over time.",
    tags: ["Expo", "Flashcards", "Local-first", "Lifetime Pro"],
    thumb: "/demos/preview/studyflow.png",
    externalHref: FLASHCARDS_PLAY_URL,
    externalLabel: "Google Play",
  },
  {
    href: "/work/pubplay",
    title: "PubPlay: Pub Games Night System",
    summary:
      "Run pub tournaments from an Android tablet while players join by QR and follow live fixtures and leaderboards.",
    tags: ["Android", "QR Join", "Live Events", "FastAPI"],
    thumb: "/demos/preview/pubplay.jpg",
    externalHref: PUBPLAY_SITE_URL,
    externalLabel: "Product website",
  },
  {
    href: "/work/uniscan",
    title: "Docs Scan OCR Encrypt & Share On-device OCR Scanner",
    summary:
      "High-speed scanning with on-device OCR, native modules, and encrypted results.",
    tags: ["Expo", "OCR", "Encryption", "In-App Purchases"],
    thumb: "/demos/preview/uniscan.jpg",
    externalHref: UNISCAN_PLAY_URL,
    externalLabel: "Google Play",
  },
  {
    href: "/work/todo",
    title: "Momentum TODO Focus & Routine",
    summary:
      "Build momentum. Tasks, routines, streaks, and streak tracking with offline storage.",
    tags: ["Expo", "Localization", "AsyncStorage", "In-App Purchases"],
    thumb: "/demos/preview/todo.png",
    externalHref: TODO_PLAY_URL,
    externalLabel: "Google Play",
  },
  {
    href: "/work/expense",
    title: "ExpenseFlow Smart Tracker",
    summary:
      "A budget tracker for logging spending, reviewing categories, and spotting monthly trends.",
    tags: ["Expo", "Finance", "Local-first", "In-App Purchases"],
    thumb: "/demos/preview/expense.png",
    externalHref: EXPENSE_PLAY_URL,
    externalLabel: "Google Play",
  },
  {
    href: "/work/habit",
    title: "HabitFlow Daily Habit Tracker",
    summary:
      "Build better routines with streaks, stats, heatmaps, and calm daily tracking.",
    tags: ["Expo", "Habits", "Local-first", "In-App Purchases"],
    thumb: "/demos/preview/habit.png",
    externalHref: HABIT_PLAY_URL,
    externalLabel: "Google Play",
  },
  {
    href: "/work/meditation",
    title: "MeditationFlow: Calm Timer",
    summary:
      "Quiet meditation timer with mindful practices, reminders, stats, and journal.",
    tags: ["Expo", "Meditation", "Local-first", "In-App Purchases"],
    thumb: "/demos/preview/meditation.png",
    externalHref: MEDITATION_PLAY_URL,
    externalLabel: "Google Play",
  },
  {
    href: "/work/iskra",
    title: "Iskra Trading Mobile Catalog & Orders",
    summary:
      "Expo app + FastAPI backend with offline cart and ERP bridges.",
    tags: ["Expo", "FastAPI", "SQLite/Postgres"],
    thumb: "/demos/preview/iskra.jpg",
    externalHref: ISKRAUG_PLAY_URL,
    externalLabel: "Google Play",
  },
];

const platformCases = cases.slice(0, 3);
const applicationCases = cases.slice(3);

export const metadata = buildPageMetadata({
  title: "Mobile, Web & SaaS Projects",
  description:
    "Explore production mobile apps, SaaS platforms, web systems, and business software built and shipped by Fullstack Dev KZ.",
  path: "/work",
});

export default function Work() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-18">
        {/* Rounded glass container with mesh */}
        <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 md:p-16 border glass">

          {/* Mesh background */}
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
            backgroundSrc="/brand/work.webp"
            viewBox="0 0 1600 900"
            photos={[]}
          />

          <div className="absolute inset-0">
            <MeshBackground
              brightness={0.8}
              opacity={0.95}
              palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 min-w-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Products, platforms &amp; shipped applications
            </h1>

            <p className="mt-4 max-w-3xl text-[var(--muted)]">
              Production software built across Android, web, SaaS, and backend APIs.
              These products show how Fullstack Dev KZ handles complete workflows,
              connected systems, release delivery, and practical interface design.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
              >
                Explore development services
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-4 py-2 text-sm transition hover:bg-white/25"
              >
                <MessageSquare size={16} aria-hidden />
                Discuss a similar project
              </Link>
            </div>

            <div className="mt-8 h-px w-full bg-white/10" />

            <section className="mt-8 md:mt-10">
              <div className="max-w-3xl">
                <div className="text-sm font-medium text-[var(--accent)]">Connected systems</div>
                <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Products &amp; platforms</h2>
                <p className="mt-3 text-[var(--muted)]">
                  Commercial software with mobile, web, backend, and operational parts
                  designed to work together as one product.
                </p>
              </div>

              <div className="mt-6 grid min-w-0 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {platformCases.map((c) => (
                  <CaseCard key={c.href} {...c} />
                ))}
              </div>
            </section>

            <section className="mt-14">
              <div className="max-w-3xl">
                <div className="text-sm font-medium text-[var(--accent)]">Google Play releases</div>
                <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Shipped Android applications</h2>
                <p className="mt-3 text-[var(--muted)]">
                  Focused applications spanning study, document scanning, productivity,
                  finance, habits, meditation, and mobile sales workflows.
                </p>
              </div>
              <div className="mt-6 grid min-w-0 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {applicationCases.map((c) => (
                  <CaseCard key={c.href} {...c} />
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
