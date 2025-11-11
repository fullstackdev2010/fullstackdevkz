// app/work/page.tsx
import CaseCard from '@/components/work/CaseCard';
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";

const cases = [
  {
    href: '/work/uniscan',
    title: 'UNIScan — On-device OCR Scanner',
    summary: 'High-speed scanning with on-device OCR, native modules, and encrypted results.',
    tags: ['Expo', 'OCR', 'Encryption'],
    thumb: '/demos/uniscan/home.png',
  },
  {
    href: '/work/iskra',
    title: 'Iskra Trading — Mobile Catalog & Orders',
    summary: 'Expo app + FastAPI backend with offline cart and ERP bridges.',
    tags: ['Expo', 'FastAPI', 'ERP'],
    thumb: '/demos/iskra/home.png',
  },
  {
    href: '/work/secure-messaging',
    title: 'Secure Messaging — E2EE',
    summary: 'End‑to‑end encryption with passphrase restore and resilient UX.',
    tags: ['E2EE', 'RSA', 'Socket.io'],
    thumb: '/demos/secure-messaging/chat.png',
  },
];

export default function Page() {
  return (
    <div className="relative">
      {/* Section-scoped background so the global footer remains visible */}
      <section className="relative min-h-screen">
        {/* Mesh background confined to this section */}
        <MeshWithPhotoInsets
          className="pointer-events-none absolute inset-0 z-0"
          backgroundSrc="/brand/work.svg"
          viewBox="0 0 1600 900"  // must match your mesh.svg viewBox
          photos={[
            // { href: "/demos/uniscan/home.png", x: 280, y: 180, w: 320, h: 520, rx: 28, overlay: "soft", mixBlendMode: "overlay" },
          ]}
        />
        {/* Subtle gradient tint for readability; avoids a hard edge before the footer */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[var(--bg)]/20 via-transparent to-transparent" />

        {/* Content sits above mesh + tint */}
        <div className="relative z-20 mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-semibold">Work</h1>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Selected case studies across mobile and backend — all tinted with mesh palettes.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map(c => (
              <CaseCard key={c.href} {...c} />
            ))}
          </div>
        </div>
      </section>
       {/* --- visual separator between mesh section and footer --- */}
      <div
        aria-hidden
        className="h-14 -mt-14 bg-gradient-to-b from-transparent to-[color:var(--surface)]/70"
      />
      </div>
  );
}
