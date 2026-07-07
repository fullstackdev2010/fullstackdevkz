import type { Metadata } from "next";
import Link from "next/link";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { GlassCard } from "@/components/ui/GlassCard";
import { QualityBadge } from "@/components/ui/QualityBadge";
import AppSeoLandingSections from "@/components/work/AppSeoLandingSections";
import { appSeoContent } from "@/lib/appSeoContent";
import { UNISCAN_PLAY_URL } from "@/lib/constants";

const title = "Docs Scan OCR Encrypt & Share";
const description =
  "Privacy-first Android document scanning with on-device OCR, encrypted exports, and local vault workflows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/uniscan" },
  keywords: [
    "offline OCR scanner",
    "private document scanner",
    "encrypted scanner app",
    "secure PDF scanner",
    "Android OCR app",
  ],
  openGraph: {
    title,
    description,
    url: "/work/uniscan",
    type: "article",
    images: [
      {
        url: "/demos/preview/uniscan.jpg",
        width: 945,
        height: 2048,
        alt: "Docs Scan OCR Android document scanner screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/demos/preview/uniscan.jpg"],
  },
};

const kpis = [
  { label: "Platform", value: "Android", note: "Expo native build" },
  { label: "OCR", value: "On-device", note: "ML Kit and Tesseract" },
  { label: "Privacy", value: "Encrypted", note: "Vault and exports" },
];

const gallery = [
  { src: "/demos/uniscan/02.jpg", alt: "Docs Scan OCR home screen" },
  { src: "/demos/uniscan/03.jpg", alt: "Docs Scan OCR document preview" },
  { src: "/demos/uniscan/04.jpg", alt: "Docs Scan OCR recognition result" },
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
  const seo = appSeoContent.uniscan;

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
                  href={UNISCAN_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-medium transition hover:bg-white/25"
                >
                  Download on Google Play
                </Link>
                <Link
                  href="/work/uniscan/privacy"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/5"
                >
                  Privacy & Data Handling
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <DeviceFrame
                platform="android"
                src="/demos/uniscan/01.jpg"
                alt="Docs Scan OCR Android scanner screen"
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
              Docs Scan OCR Encrypt & Share is a privacy-first Android scanner
              for capturing documents, recognizing text offline, and protecting
              files before they leave the device.
            </p>
            <p>
              The app supports scan and import flows, document cleanup, local OCR,
              encrypted sharing, and private vault-style storage.
            </p>
          </InfoCard>

          <InfoCard title="Core Features">
            <ul className="list-disc space-y-2 pl-5">
              <li>Scan or import images and PDFs, then enhance and recognize text.</li>
              <li>Run OCR locally with ML Kit and Tesseract language packs.</li>
              <li>Export text, PDF, DOCX, images, or encrypted files.</li>
              <li>Receive documents privately through Android share intents.</li>
              <li>Use vault storage, auto-lock, and temporary-file cleanup.</li>
            </ul>
          </InfoCard>

          <InfoCard title="Product Approach">
            <p>
              Many scanner apps depend on cloud OCR. This app is designed for
              sensitive documents and low-connectivity workflows where recognition
              and file handling need to stay on the device.
            </p>
            <p>
              The flow combines practical scanning speed with defensive handling of
              clear files, encrypted exports, and screenshot prevention on sensitive
              screens.
            </p>
          </InfoCard>

          <InfoCard title="Technical Notes">
            <ul className="list-disc space-y-2 pl-5">
              <li>Built with Expo, React Native, TypeScript, and Expo Router.</li>
              <li>ML Kit text recognition with bundled unbundled model packs.</li>
              <li>Tesseract Android native module for additional OCR scripts.</li>
              <li>AES-256-GCM vault encryption via react-native-quick-crypto.</li>
              <li>SecureStore, biometric unlock, screen-capture controls, and file wipers.</li>
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
