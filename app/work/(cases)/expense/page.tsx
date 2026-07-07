import type { Metadata } from "next";
import Link from "next/link";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { GlassCard } from "@/components/ui/GlassCard";
import AppSeoLandingSections from "@/components/work/AppSeoLandingSections";
import { appSeoContent } from "@/lib/appSeoContent";
import { EXPENSE_PLAY_URL } from "@/lib/constants";

const title = "ExpenseFlow Smart Tracker";
const description =
  "ExpenseFlow is a budget tracker for logging expenses, reviewing monthly spending, category stats, and simple spending insights.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/expense" },
  keywords: [
    "ExpenseFlow",
    "expense tracker",
    "budget tracker",
    "daily spending tracker",
    "Android expense app",
    "offline expense tracker",
  ],
  openGraph: {
    title,
    description,
    url: "/work/expense",
    type: "article",
    images: [
      {
        url: "/demos/preview/expense.png",
        width: 945,
        height: 2048,
        alt: "ExpenseFlow Android app dashboard screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/demos/preview/expense.png"],
  },
};

const kpis = [
  { label: "Platform", value: "Android", note: "Expo native build" },
  { label: "Storage", value: "Local first", note: "Fast personal tracking" },
  { label: "Insights", value: "Monthly", note: "Categories, stats, trends" },
];

const gallery = [
  { src: "/demos/expense/02.jpg", alt: "ExpenseFlow app settings with theme and language choices" },
  { src: "/demos/expense/03.jpg", alt: "ExpenseFlow app monthly category statistics" },
  { src: "/demos/expense/04.jpg", alt: "ExpenseFlow app expenses list with filters" },
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
  const seo = appSeoContent.expense;

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
              <h1 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">{title}</h1>
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
                  href={EXPENSE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-medium transition hover:bg-white/25"
                >
                  📲 Download on Google Play
                </Link>
                <Link
                  href="/work/expense/privacy"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/5"
                >
                  Privacy & Data Handling
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <DeviceFrame
                platform="android"
                src="/demos/expense/01.jpg"
                alt="ExpenseFlow Android app dashboard"
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
              ExpenseFlow is a focused personal finance app for people who want quick
              daily expense logging without spreadsheet overhead or account setup.
            </p>
            <p>
              The app highlights this month spending, today spending, projected
              month-end spend, top category, and a searchable expense list.
            </p>
          </InfoCard>

          <InfoCard title="Core Features">
            <ul className="list-disc space-y-2 pl-5">
              <li>Fast expense entry with amount, category, title, and date.</li>
              <li>Monthly filters and sorting by newest, highest, or lowest spend.</li>
              <li>Category breakdowns for food, transport, shopping, bills, health, and more.</li>
              <li>Theme and language settings for a more personal interface.</li>
            </ul>
          </InfoCard>

          <InfoCard title="Product Approach">
            <p>
              The interface keeps the most important numbers visible first, then
              moves into categories, individual transactions, and insights.
            </p>
            <p>
              The dark emerald visual system is designed for repeated daily use:
              high contrast, clear actions, and dense but readable mobile cards.
            </p>
          </InfoCard>

          <InfoCard title="Technical Notes">
            <ul className="list-disc space-y-2 pl-5">
              <li>Built with Expo, React Native, and TypeScript.</li>
              <li>Shared mobile core for theming, layout, persistence, and i18n.</li>
              <li>RevenueCat integration available for premium features.</li>
              <li>Release configuration includes Android optimization and resource shrinking.</li>
            </ul>
          </InfoCard>
        </section>

        <AppSeoLandingSections {...seo} />

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
