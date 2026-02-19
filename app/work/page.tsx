// app/work/page.tsx
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import CaseCard from "@/components/work/CaseCard";
import { UNISCAN_PLAY_URL } from "@/lib/constants";


const cases = [
  {
    href: '/work/uniscan',
    title: 'Docs Scan OCR Encrypt & Share — On-device OCR Scanner',
    summary: 'High-speed scanning with on-device OCR, native modules, and encrypted results.',
    tags: ['Expo', 'OCR', 'Encryption'],
    thumb: '/demos/preview/uniscan.jpg',
    externalHref: UNISCAN_PLAY_URL,
    externalLabel: 'Google Play',
  },
  {
    href: '/work/iskra',
    title: 'Iskra Trading — Mobile Catalog & Orders',
    summary: 'Expo app + FastAPI backend with offline cart and ERP bridges.',
    tags: ['Expo', 'FastAPI', 'SQLite/Postgres'],
    thumb: '/demos/preview/iskra.jpg',
  },
  {
    href: '/work',
    title: 'SecureMO — E2EE Messenger - soon to come',
    summary: 'Next.js + Socket.io chat with client-side RSA and encrypted backups.',
    tags: ['Next.js', 'Socket.io', 'RSA'],
    thumb: '/demos/preview/e2ee.jpg',
  },
];

export const metadata = {
   title: "Work",
   description:
     "Selected projects and case studies from Fullstack Dev KZ showcasing modern fullstack engineering and product design.",
 };

export default function Work() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-18">
        {/* Rounded glass container with mesh (same layout as home) */}
        <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 md:p-16 border glass">
          {/* Mesh background confined to this section */}
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
            backgroundSrc="/brand/work.webp"
            viewBox="0 0 1600 900"
            photos={[]}
          />
          <div className="absolute inset-0">
            <MeshBackground
              brightness={0.7}
              opacity={0.95}
              palette={['#7AA2FF', '#8DF2D6', '#FFB3EC']}
            />
          </div>
          {/* Foreground content + cards INSIDE the glass container */}
          <div className="relative z-10 min-w-0">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Selected work & case studies
            </h1>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">
              Mobile apps, secure backends, and delightful UI systems — all crafted with coding precision.
            </p>

            {/* <div className="mt-6">
              <a
                href={UNISCAN_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/15 border border-white/30 px-5 py-2.5 text-sm font-medium hover:bg-white/25 transition"
              >
                📲 Download UniScan on Google Play
              </a>
            </div> */}

            {/* optional divider for structure (matches home’s feel) */}
            <div className="mt-8 h-px w-full bg-white/10" />

            <section className="mt-8 md:mt-10">
              <h2 className="sr-only">Case studies</h2>
              <div className="grid min-w-0 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cases.map((c) => (
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
