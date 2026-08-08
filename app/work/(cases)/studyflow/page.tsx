import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { GlassCard } from "@/components/ui/GlassCard";
import { QualityBadge } from "@/components/ui/QualityBadge";
import AppSeoLandingSections from "@/components/work/AppSeoLandingSections";
import ProductVideos from "@/components/work/ProductVideos";
import { appSeoContent } from "@/lib/appSeoContent";
import { FLASHCARDS_PLAY_URL } from "@/lib/constants";

const title = "StudyFlow Flashcards";
const description =
  "Study smarter with focused decks, spaced repetition, recall stats, and calm daily review.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/studyflow" },
  keywords: [
    "StudyFlow",
    "flashcard app",
    "spaced repetition",
    "offline flashcards",
    "study reminder",
    "Android study app",
  ],
  openGraph: {
    title,
    description,
    url: "/work/studyflow",
    type: "article",
    images: [
      {
        url: "/demos/preview/studyflow.png",
        width: 1024,
        height: 500,
        alt: "StudyFlow flashcard learning app overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/demos/preview/studyflow.png"],
  },
};

const kpis = [
  { label: "Platform", value: "Android", note: "Expo native build" },
  { label: "Method", value: "Spaced", note: "Review what is due" },
  { label: "Privacy", value: "Local", note: "No account required" },
];

const gallery = [
  {
    src: "/demos/studyflow/02.jpg",
    alt: "StudyFlow deck manager with cards and study controls",
  },
  {
    src: "/demos/studyflow/03.jpg",
    alt: "StudyFlow review screen with Again, Hard, Good, and Easy recall ratings",
  },
  {
    src: "/demos/studyflow/04.jpg",
    alt: "StudyFlow statistics with due cards, recall rate, and review rhythm",
  },
];

const videos = [
  {
    label: "Official walkthrough",
    title: "StudyFlow in action",
    description:
      "A focused walkthrough of decks, spaced review, recall ratings, statistics, and study reminders.",
    youtubeId: "",
  },
  {
    label: "Playful explainer",
    title: "The alien explains StudyFlow",
    description:
      "A lighter explanation of why short, well-timed flashcard reviews help knowledge stay available.",
    youtubeId: "",
  },
];

function InfoCard({
  title: cardTitle,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <GlassCard className="h-full">
      <h2 className="text-2xl font-semibold">{cardTitle}</h2>
      <div className="mt-4 space-y-3 text-[var(--muted)]">{children}</div>
    </GlassCard>
  );
}

export default function Page() {
  const seo = appSeoContent.study;

  return (
    <main className="relative">
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
              seed={title}
              palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]}
              static
            />
          </div>

          <div className="relative z-10 grid min-w-0 items-start gap-10 md:grid-cols-2">
            <div>
              <div className="flex items-start gap-4">
                <QualityBadge size="md" className="mt-1 hidden sm:block" />
                <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
                  {title}
                </h1>
              </div>
              <p className="mt-4 max-w-prose text-[var(--muted)]">{description}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {kpis.map((kpi) => (
                  <GlassCard key={kpi.label}>
                    <div className="text-sm text-[var(--muted)]">{kpi.label}</div>
                    <div className="mt-1 text-2xl font-semibold">{kpi.value}</div>
                    <div className="mt-1 text-xs text-[var(--muted)]">{kpi.note}</div>
                  </GlassCard>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={FLASHCARDS_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-medium transition hover:bg-white/25"
                >
                  <ExternalLink size={17} aria-hidden />
                  Download on Google Play
                </Link>
                <Link
                  href="/work/studyflow/privacy"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/5"
                >
                  <ShieldCheck size={16} aria-hidden />
                  Privacy &amp; Data Handling
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <DeviceFrame
                platform="android"
                src="/demos/studyflow/01.jpg"
                alt="StudyFlow Android app dashboard showing due cards and focus decks"
                width={320}
                height={640}
                contentScale={0.95}
              />
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <GlassCard key={item.src} className="flex items-center justify-center p-4">
              <DeviceFrame
                platform="android"
                src={item.src}
                alt={item.alt}
                width={320}
                height={640}
                contentScale={0.95}
              />
            </GlassCard>
          ))}
        </section>

        <ProductVideos videos={videos} />

        <section className="mt-14 grid gap-3 md:grid-cols-2">
          <InfoCard title="Overview">
            <p>
              StudyFlow is a focused flashcard app for building knowledge through
              short, repeatable review sessions instead of long cramming sessions.
            </p>
            <p>
              The dashboard keeps due cards, total cards, mastered cards, and the
              next useful study action visible at a glance.
            </p>
          </InfoCard>

          <InfoCard title="Core Features">
            <ul className="list-disc space-y-2 pl-5">
              <li>Create, edit, archive, restore, and delete focused decks.</li>
              <li>Add flashcards with front, back, and optional hints.</li>
              <li>Review with Again, Hard, Good, and Easy recall ratings.</li>
              <li>Track due cards, mastered cards, recall rate, and review rhythm.</li>
              <li>Use practice mode without changing the learning schedule.</li>
            </ul>
          </InfoCard>

          <InfoCard title="Study Approach">
            <p>
              Each answer changes when a card becomes due again. Difficult cards
              return sooner, while remembered cards gradually move into longer
              intervals.
            </p>
            <p>
              Lifetime Pro adds unlimited decks and cards, advanced difficulty
              insights, and optional daily study reminders with one purchase.
            </p>
          </InfoCard>

          <InfoCard title="Technical Notes">
            <ul className="list-disc space-y-2 pl-5">
              <li>Built with Expo, React Native, and TypeScript.</li>
              <li>Local-first persistence for decks, cards, settings, and review history.</li>
              <li>Ten interface languages and five visual themes.</li>
              <li>Optional on-device notifications for daily study reminders.</li>
              <li>Google Play Billing and RevenueCat support for Lifetime Pro.</li>
            </ul>
          </InfoCard>
        </section>

        <AppSeoLandingSections {...seo} />

        <nav
          aria-label="Product navigation"
          className="mt-16 clear-both border-t border-white/10 pt-8"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
          >
            <ArrowLeft size={16} aria-hidden />
            Back to Work
          </Link>
        </nav>
      </div>
    </main>
  );
}
