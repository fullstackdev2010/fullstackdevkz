// app/about/page.tsx
import { GlassCard } from '@/components/ui/GlassCard';
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";

export default function Page() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Rounded glass container with mesh (same layout as home/work/services/stack) */}
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 border glass">
          {/* Mesh background confined to this section */}
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
            backgroundSrc="/brand/work.webp"
            viewBox="0 0 1600 900"
            photos={[]}
          />
          <div className="absolute inset-0">
            <MeshBackground
              brightness={0.8}
              opacity={0.95}
              palette={['#7AA2FF', '#8DF2D6', '#FFB3EC']}
            />
          </div>

          {/* Foreground content INSIDE glass */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-semibold">About</h1>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">
              Reliable engineering, clear UX, performance and privacy by default. Built on Expo, Next.js, FastAPI,
              and a practical mesh aesthetic.
            </p>

            {/* divider */}
            <div className="mt-8 h-px w-full bg-white/10" />

            <div className="mt-8 grid gap-6 md:grid-cols-3">
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
        </div>
      </div>
    </main>
  );
}
