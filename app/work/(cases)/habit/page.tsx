import type { Metadata } from "next";
import Link from "next/link";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { GlassCard } from "@/components/ui/GlassCard";
import { HABIT_PLAY_URL } from "@/lib/constants";

const title = "HabitFlow Daily Habit Tracker";
const description =
  "Build better routines with streaks, stats, heatmaps, and calm daily tracking.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/habit" },
  keywords: [
    "HabitFlow",
    "habit tracker",
    "daily habit tracker",
    "streak tracker",
    "routine tracker",
    "Android habit app",
  ],
  openGraph: {
    title,
    description,
    url: "/work/habit",
    type: "article",
    images: [
      {
        url: "/demos/preview/habit.png",
        width: 1080,
        height: 1920,
        alt: "HabitFlow Android app dashboard screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/demos/preview/habit.png"],
  },
};

const kpis = [
  { label: "Platform", value: "Android", note: "Expo native build" },
  { label: "Tracking", value: "Daily", note: "Habits, streaks, stats" },
  { label: "Focus", value: "Calm", note: "Compact routine flow" },
];

const gallery = [
  { src: "/demos/habit/02.jpg", alt: "HabitFlow habits screen with active daily habits and completion progress" },
  { src: "/demos/habit/03.jpg", alt: "HabitFlow statistics screen with calendar heatmap and streak data" },
  { src: "/demos/habit/04.jpg", alt: "HabitFlow analytics screen with habit insights and recommendations" },
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
  return (
    <main className="relative">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <section className="relative overflow-hidden rounded-3xl border glass p-8 md:p-12">
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

          <div className="relative z-10 grid min-w-0 items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="mt-3 text-4xl font-semibold md:text-5xl">{title}</h1>
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
                  href={HABIT_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-medium transition hover:bg-white/25"
                >
                 📲 Download on Google Play
                </Link>
                <Link
                  href="/work/habit/privacy"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/5"
                >
                  Privacy & Data Handling
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <DeviceFrame
                platform="android"
                src="/demos/habit/01.jpg"
                alt="HabitFlow Android app dashboard"
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
              HabitFlow is a simple, calm, and practical habit tracker for
              building better routines without clutter or pressure.
            </p>
            <p>
              It keeps the core habit loop close at hand: open the app, see
              what matters today, mark progress, review consistency, and keep
              moving.
            </p>
          </InfoCard>

          <InfoCard title="Core Features">
            <ul className="list-disc space-y-2 pl-5">
              <li>Create and manage daily habits.</li>
              <li>Track completion with a clean daily dashboard.</li>
              <li>Review streaks, progress statistics, and calendar heatmaps.</li>
              <li>Archive or delete habits when routines change.</li>
              <li>Use optional notifications, themes, and multiple languages.</li>
            </ul>
          </InfoCard>

          <InfoCard title="Product Approach">
            <p>
              HabitFlow is built for steady progress rather than perfection.
              The interface favors compact screens, clear progress feedback,
              and low-friction daily check-ins.
            </p>
            <p>
              Visual stats make patterns easier to notice, while flexible
              habit management keeps the app useful as goals change.
            </p>
          </InfoCard>

          <InfoCard title="Technical Notes">
            <ul className="list-disc space-y-2 pl-5">
              <li>Built with Expo, React Native, and TypeScript.</li>
              <li>Local-first storage for habits, settings, and progress data.</li>
              <li>i18next localization with Expo Localization support.</li>
              <li>Expo Notifications integration for optional daily reminders.</li>
              <li>RevenueCat integration available for premium analytics features.</li>
            </ul>
          </InfoCard>
        </section>

        <div className="mt-16">
          <Link
            href="/work"
            className="inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm"
          >
            ← Back to Work
          </Link>
        </div>
      </div>
    </main>
  );
}
