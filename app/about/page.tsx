// app/about/page.tsx
import { GlassCard } from '@/components/ui/GlassCard';
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "About Our Software Engineering Approach",
  description:
    "Learn how Fullstack Dev KZ plans, builds, and ships reliable mobile apps, web applications, backend APIs, and business software.",
  path: "/about",
});

export default function Page() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Rounded glass container with mesh (same layout as home/work/services/stack) */}
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 border glass">
          {/* Mesh background confined to this section */}
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
            backgroundSrc="/brand/about.webp"
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
            <h1 className="text-4xl md:text-5xl font-semibold">Engineering software that is ready to be used</h1>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">
              Fullstack Dev KZ is a software development company focused on clear
              product decisions, reliable engineering, practical UX, performance,
              and privacy. The portfolio includes shipped Android apps, web platforms,
              FastAPI backends, and connected business systems.
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
                  <h2 className="text-lg font-medium">{s.h}</h2>
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-[var(--muted)]">
                    {s.b.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </GlassCard>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/work" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10">
                View shipped software <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-4 py-2 text-sm transition hover:bg-white/25">
                Discuss a project <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
