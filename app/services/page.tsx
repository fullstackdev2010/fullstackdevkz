import MeshBackground from '@/components/mesh/MeshBackground';
import { GlassCard } from '@/components/ui/GlassCard';

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
    <div className="relative">
      <div className="absolute inset-0"><MeshBackground /></div>
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold">Services</h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">Productized services with timelines, scope, and handover checklists. All include mesh styling and performance budgets.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <GlassCard key={t.name}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-medium">{t.name}</h3>
                <div className="text-sm text-[var(--muted)]">{t.timeline}</div>
              </div>
              <div className="mt-1 text-sm">{t.price}</div>
              <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-[var(--muted)]">
                {t.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
              <a href="/contact" className="mt-6 inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm">Start</a>
            </GlassCard>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <GlassCard>
            <h3 className="text-lg font-medium">How we work</h3>
            <ol className="mt-3 list-decimal pl-5 space-y-1 text-sm text-[var(--muted)]">
              <li>Discovery & scope</li>
              <li>Design tokens & mesh palette</li>
              <li>Build, demo, iterate</li>
              <li>Perf, a11y, deploy</li>
            </ol>
          </GlassCard>
          <GlassCard>
            <h3 className="text-lg font-medium">Guarantees</h3>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-[var(--muted)]">
              <li>Lighthouse 90+ mobile target (with constraints noted)</li>
              <li>Clean handoff + docs</li>
              <li>Reasonable support window</li>
            </ul>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
