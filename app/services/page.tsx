// app/services/page.tsx
import { GlassCard } from '@/components/ui/GlassCard';
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import Link from "next/link";

const tiers = [
  {
    name: 'Starter',
    timeline: '2–4 weeks',
    price: 'from $4.9k',
    bullets: ['Landing + demo', 'Core flow prototype', 'Mesh hero + device frames'],
  },
  {
    name: 'Pro',
    timeline: '4–8 weeks',
    price: 'from $12k',
    bullets: ['End-to-end feature', 'API integration', 'Perf & a11y pass'],
  },
  {
    name: 'Enterprise',
    timeline: 'custom',
    price: 'TBD',
    bullets: ['Security & compliance', 'SLA/monitoring', 'Custom integrations'],
  },
];

export default function Page() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Rounded glass container with mesh (same layout as home/work) */}
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 border glass">
          {/* Mesh background confined to this section */}
            <MeshWithPhotoInsets
              className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
              backgroundSrc="/brand/services.webp"
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

          {/* Foreground content INSIDE glass */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-semibold">Services</h1>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">
              Productized services with timelines, scope, and handover checklists. All include styling and performance budgets.
            </p>

            {/* subtle divider */}
            <div className="mt-8 h-px w-full bg-white/10" />

            {/* tiers grid */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {tiers.map((t) => (
                <Link
                  key={t.name}
                  href="/contact"
                  aria-label={`Start ${t.name} service — go to Contact`}
                  className="group block focus:outline-none rounded-2xl"
                >
                  <GlassCard className="h-full transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl focus-within:ring-2 focus-within:ring-white/40">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xl font-medium">{t.name}</h3>
                      <div className="text-sm text-[var(--muted)]">{t.timeline}</div>
                    </div>
                    <div className="mt-1 text-sm">{t.price}</div>
                    <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-[var(--muted)]">
                      {t.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                    {/* CTA row (not a nested link) */}
                    <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition-colors group-hover:bg-white/10">
                      <span>Start</span>
                      <span aria-hidden>→</span>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
