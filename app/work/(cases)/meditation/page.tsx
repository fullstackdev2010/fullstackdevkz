import type { Metadata } from "next";
import Link from "next/link";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { GlassCard } from "@/components/ui/GlassCard";
import { QualityBadge } from "@/components/ui/QualityBadge";
import AppSeoLandingSections from "@/components/work/AppSeoLandingSections";
import { appSeoContent } from "@/lib/appSeoContent";
import { MEDITATION_PLAY_URL } from "@/lib/constants";

const title = "MeditationFlow: Calm Timer";
const description =
  "Quiet meditation timer with mindful practices, reminders, stats, and journal.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/meditation" },
  keywords: [
    "MeditationFlow",
    "meditation timer",
    "calm timer",
    "mindfulness app",
    "breathing practice",
    "Android meditation app",
  ],
  openGraph: {
    title,
    description,
    url: "/work/meditation",
    type: "article",
    images: [
      {
        url: "/demos/preview/meditation.png",
        width: 1024,
        height: 500,
        alt: "MeditationFlow Calm Timer preview artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/demos/preview/meditation.png"],
  },
};

const kpis = [
  { label: "Platform", value: "Android", note: "Expo native build" },
  { label: "Practice", value: "Mindful", note: "Timer, breath, journal" },
  { label: "Privacy", value: "Local", note: "No account required" },
];

const gallery = [
  { src: "/demos/meditation/02.jpg", alt: "MeditationFlow library screen with mindful practice cards" },
  { src: "/demos/meditation/03.jpg", alt: "MeditationFlow timer screen for a five minute grounding practice" },
  { src: "/demos/meditation/04.jpg", alt: "MeditationFlow settings screen with theme, reminders, language, and timer defaults" },
];

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <GlassCard className="h-full">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-3 text-[var(--muted)]">{children}</div>
    </GlassCard>
  );
}

export default function Page() {
  const seo = appSeoContent.meditation;

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
              palette={['#7AA2FF', '#8DF2D6', '#FFB3EC']}
              static
            />
          </div>

          <div className="relative z-10 grid min-w-0 items-start gap-10 md:grid-cols-2">
            <div>
              <div className="flex items-start gap-4">
                <QualityBadge size="md" className="mt-1 hidden sm:block" />
                <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">{title}</h1>
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
                  href={MEDITATION_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-medium transition hover:bg-white/25"
                >
                  📲 Download on Google Play
                </Link>
                <Link
                  href="/work/meditation/privacy"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/5"
                >
                  Privacy & Data Handling
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <DeviceFrame
                platform="android"
                src="/demos/meditation/01.jpg"
                alt="MeditationFlow Android app today screen"
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

        <section className="mt-14 grid gap-3 md:grid-cols-2">
          <InfoCard title="Overview">
            <p>
              MeditationFlow is a calm, minimal meditation app for people who
              want a quieter way to build a daily practice.
            </p>
            <p>
              It keeps the experience focused: sit down, choose a practice,
              breathe with a clean timer, finish a session, and notice what
              changed.
            </p>
          </InfoCard>

          <InfoCard title="Core Features">
            <ul className="list-disc space-y-2 pl-5">
              <li>Simple meditation timer for daily practice.</li>
              <li>Guided breathing patterns for focus, calm, sleep, and reflection.</li>
              <li>Gentle daily reminders without noise or pressure.</li>
              <li>Local session history, streaks, total minutes, and practice rhythm.</li>
              <li>Private reflection notes and deeper stats with Lifetime Pro.</li>
            </ul>
          </InfoCard>

          <InfoCard title="Product Approach">
            <p>
              MeditationFlow avoids endless content feeds and complicated
              systems. The app gives users a small, useful set of practices and
              a gentle path back to consistency.
            </p>
            <p>
              Free features cover the core practice loop, while Lifetime Pro
              unlocks advanced practices, reflection trends, a session journal,
              and deeper insights.
            </p>
          </InfoCard>

          <InfoCard title="Technical Notes">
            <ul className="list-disc space-y-2 pl-5">
              <li>Built with Expo, React Native, and TypeScript.</li>
              <li>Local-first storage for sessions, settings, reminders, and notes.</li>
              <li>Multilingual settings and theme customization.</li>
              <li>Optional notification reminders for daily practice.</li>
              <li>Google Play Billing and RevenueCat support for Lifetime Pro.</li>
            </ul>
          </InfoCard>
        </section>

        <AppSeoLandingSections {...seo} />

        <nav aria-label="Product navigation" className="mt-16 clear-both border-t border-white/10 pt-8">
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
