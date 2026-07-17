import type { Metadata } from "next";
import Link from "next/link";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { GlassCard } from "@/components/ui/GlassCard";
import { QualityBadge } from "@/components/ui/QualityBadge";
import AppSeoLandingSections from "@/components/work/AppSeoLandingSections";
import ProductVideos from "@/components/work/ProductVideos";
import { appSeoContent } from "@/lib/appSeoContent";
import { TODO_PLAY_URL } from "@/lib/constants";

const title = "Momentum TODO Focus, Routines & Streaks";
const description =
  "Momentum TODO productivity app with routines, streaks, offline storage, and multilingual UI.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/todo" },
  keywords: [
    "Momentum TODO",
    "todo app Android",
    "routine planner",
    "task app with streaks",
    "offline todo app",
  ],
  openGraph: {
    title,
    description,
    url: "/work/todo",
    type: "article",
    images: [
      {
        url: "/demos/preview/todo.png",
        width: 945,
        height: 2048,
        alt: "Momentum TODO Android productivity app screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/demos/preview/todo.png"],
  },
};

const kpis = [
  { label: "Platform", value: "Android", note: "Expo native build" },
  { label: "Storage", value: "Local", note: "Offline-first tasks" },
  { label: "Flow", value: "Routines", note: "Streaks and focus" },
];

const gallery = [
  { src: "/demos/todo/02.jpg", alt: "Momentum TODO home dashboard" },
  { src: "/demos/todo/03.jpg", alt: "Momentum TODO task preview" },
  { src: "/demos/todo/04.jpg", alt: "Momentum TODO routine result screen" },
];

const videos = [
  {
    label: "Official walkthrough",
    title: "Momentum TODO in action",
    description: "A simple walkthrough of tasks, routines, streaks, offline storage, and daily planning.",
    youtubeId: "MD_XGNEk2dE",
  },
  {
    label: "Playful explainer",
    title: "The alien explains Momentum TODO",
    description: "A lighter explainer that makes the routine and streak idea easier to remember.",
    youtubeId: "",
  },
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
  const seo = appSeoContent.todo;

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
                  href={TODO_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-medium transition hover:bg-white/25"
                >
                  Download on Google Play
                </Link>
                <Link
                  href="/work/todo/privacy"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/5"
                >
                  Privacy & Data Handling
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <DeviceFrame
                platform="android"
                src="/demos/todo/01.jpg"
                alt="Momentum TODO Android app dashboard"
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
              Momentum TODO is a minimal productivity app for tasks, routines,
              streaks, and simple statistics without accounts, cloud sync, or clutter.
            </p>
            <p>
              It is built for users who want the next action to stay visible and
              repeated routines to become easy to review.
            </p>
          </InfoCard>

          <InfoCard title="Core Features">
            <ul className="list-disc space-y-2 pl-5">
              <li>Create tasks and recurring routines for daily planning.</li>
              <li>Track streaks and simple progress statistics.</li>
              <li>Use the app offline with local device storage.</li>
              <li>Customize themes and work across multiple languages.</li>
              <li>Keep productivity focused without a heavy project-management system.</li>
            </ul>
          </InfoCard>

          <InfoCard title="Product Approach">
            <p>
              The app favors small, repeatable actions over complex task systems.
              It keeps the UI compact, readable, and quick on everyday Android devices.
            </p>
            <p>
              Routines and streaks give users visible momentum while offline storage
              keeps the app private and fast.
            </p>
          </InfoCard>

          <InfoCard title="Technical Notes">
            <ul className="list-disc space-y-2 pl-5">
              <li>Built with Expo, React Native, TypeScript, and Expo Router.</li>
              <li>Zustand state management with AsyncStorage persistence.</li>
              <li>i18next localization with multilingual and RTL-friendly UI support.</li>
              <li>Custom theming system for a consistent mobile interface.</li>
              <li>RevenueCat integration available for premium app features.</li>
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
