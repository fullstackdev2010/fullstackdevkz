// app/services/page.tsx
import { GlassCard } from '@/components/ui/GlassCard';
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";

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
      {/* Section-scoped background so the global footer remains visible */}
      <section className="relative min-h-screen -mb-24">
        {/* Mesh background confined to this section */}
        <MeshWithPhotoInsets
          className="pointer-events-none absolute inset-0 z-0"
          backgroundSrc="/brand/services.svg"
          viewBox="0 0 1600 900"  // must match your mesh.svg viewBox
          photos={[
            // { href: "/demos/uniscan/01.jpg", x: 220, y: 160, w: 260, h: 390, rx: 28, overlay: "soft", mixBlendMode: "overlay" },
          ]}
        />
        {/* Content sits above mesh + tint */}
        <div className="relative z-20 mx-auto max-w-7xl px-6 py-16 pb-24">
          <h1 className="text-4xl md:text-5xl font-semibold">Services</h1>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Productized services with timelines, scope, and handover checklists. All include mesh styling and performance budgets.
          </p>
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
        </div>
      </section>
    </div>
  );
}
