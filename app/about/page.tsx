// app/about/page.tsx new
import { GlassCard } from '@/components/ui/GlassCard';
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";

export default function Page() {
  return (
    <div className="relative">
      {/* Section-scoped background so the global footer remains visible */}
      <section className="relative min-h-screen -mb-16 pb-16 md:-mb-25 md:pb-20">
        {/* Mesh background confined to this section */}
        <MeshWithPhotoInsets
          className="pointer-events-none absolute inset-0 z-0"
          backgroundSrc="/brand/about.svg"
          viewBox="0 0 1600 900"   // must match your mesh.svg viewBox
          photos={[
            // { href: "/demos/uniscan/01.jpg", x: 220, y: 160, w: 260, h: 390, rx: 28, overlay: "soft", mixBlendMode: "overlay" },
          ]}
        />
        {/* Content container sits above mesh + tint */}
        <div className="relative z-20 mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-semibold">About</h1>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Reliable engineering, clear UX, performance and privacy by default. Built on Expo, Next.js, FastAPI,
            and a practical mesh aesthetic.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { h: 'Principles', b: ['Reliability over novelty', 'Clarity over clutter', 'Performance over bloat'] },
              { h: 'Process', b: ['Audit → Tokens', 'Prototype → Validate', 'Ship → Measure'] },
              { h: 'Stack', b: ['Expo/React Native', 'Next.js/Vercel', 'FastAPI/SQL', 'CI/CD/Monitoring'] },
            ].map((s) => (
              <GlassCard key={s.h}>
                <h3 className="text-lg font-medium">{s.h}</h3>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-[var(--muted)]">
                  {s.b.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
