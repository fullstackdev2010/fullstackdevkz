import { GlassCard } from '@/components/ui/GlassCard';

export default function Page() {
  return (
    <div className="relative">
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold">About</h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">Reliable engineering, clear UX, performance and privacy by default. Built on Expo, Next.js, FastAPI, and a practical mesh aesthetic.</p>

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
      </section>
    </div>
  );
}
