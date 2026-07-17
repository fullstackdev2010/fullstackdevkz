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
import { ISKRAUG_PLAY_URL } from "@/lib/constants";

const title = "Iskra Trade - Mobile Catalog & Orders";
const description = "Iskra Trade mobile sales app with a fast catalog, clean ordering flow, and lightweight backend.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/iskra" },
  keywords: [
    "mobile catalog app",
    "sales ordering app",
    "field sales Android app",
    "B2B order app",
    "product catalog mobile app",
  ],
  openGraph: {
    title,
    description,
    url: "/work/iskra",
    type: "article",
    images: [
      {
        url: "/demos/preview/iskra.jpg",
        width: 945,
        height: 2048,
        alt: "Iskra Trade Android mobile catalog app screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/demos/preview/iskra.jpg"],
  },
};

const kpis = [
  { label: "Platform", value: "Android", note: "Expo native build" },
  { label: "Backend", value: "FastAPI", note: "Catalog and orders" },
  { label: "Workflow", value: "B2B", note: "Sales teams and dealers" },
];

const gallery = [
  { src: "/demos/iskra/02.jpg", alt: "Iskra Trade home screen" },
  { src: "/demos/iskra/03.jpg", alt: "Iskra Trade product catalog" },
  { src: "/demos/iskra/07.jpg", alt: "Iskra Trade product detail screen" },
];

const videos = [
  {
    label: "Official walkthrough",
    title: "Iskra Trade in action",
    description: "A direct walkthrough of the mobile catalog, cart, and order workflow for sales teams.",
    youtubeId: "",
  },
  {
    label: "Playful explainer",
    title: "The alien explains Iskra Trade",
    description: "A lighter explanation of how mobile ordering helps field teams move faster.",
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
  const seo = appSeoContent.iskra;

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
                  href={ISKRAUG_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-medium transition hover:bg-white/25"
                >
                  📲 Download on Google Play
                </Link>
                <Link
                  href="/work/iskra/privacy"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/5"
                >
                  Privacy & Data Handling
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <DeviceFrame
                platform="android"
                src="/demos/iskra/01.jpg"
                alt="Iskra Trade Android app catalog dashboard"
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
              Iskra Trade is a mobile catalog and ordering app for field sales teams,
              dealers, and partners who need fast lookup and repeat ordering on Android.
            </p>
            <p>
              Users can sign in, browse a structured product catalog, search items,
              add quantities to a cart, place orders, and review order history.
            </p>
          </InfoCard>

          <InfoCard title="Core Features">
            <ul className="list-disc space-y-2 pl-5">
              <li>Structured catalog browsing for product categories and details.</li>
              <li>Fast search across articles, descriptions, and catalog data.</li>
              <li>Cart flow with quantity rules, stock-aware limits, and clear totals.</li>
              <li>Order history with server-side totals and per-line snapshots.</li>
              <li>PIN and biometric-friendly mobile sessions for repeated field use.</li>
            </ul>
          </InfoCard>

          <InfoCard title="Product Approach">
            <p>
              The app keeps a dense business workflow usable on a phone: browse,
              search, confirm quantities, and submit orders without slow desktop
              forms or fragile manual messaging.
            </p>
            <p>
              The backend recomputes authoritative totals and stores order snapshots,
              which helps keep mobile convenience aligned with operational accuracy.
            </p>
          </InfoCard>

          <InfoCard title="Technical Notes">
            <ul className="list-disc space-y-2 pl-5">
              <li>Built with Expo, React Native, TypeScript, and Expo Router.</li>
              <li>FastAPI backend for authentication, catalog data, and orders.</li>
              <li>JWT refresh flow with hashed refresh tokens in storage.</li>
              <li>SQLAlchemy models for users, catalog items, orders, and order lines.</li>
              <li>Operational scripts for catalog loading and order exports.</li>
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
