import MeshBackground from '@/components/mesh/MeshBackground';
import { GlassCard } from '@/components/ui/GlassCard';
import { DeviceFrame } from '@/components/ui/DeviceFrame';

export type KPI = { label: string; value: string; note?: string };

export function KPIStrip({ kpis }: { kpis: KPI[] }) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-3">
      {kpis.map((k) => (
        <GlassCard key={k.label}>
          <div className="text-sm text-[var(--muted)]">{k.label}</div>
          <div className="mt-1 text-2xl font-semibold">{k.value}</div>
          {k.note && <div className="text-xs mt-1 text-[var(--muted)]">{k.note}</div>}
        </GlassCard>
      ))}
    </div>
  );
}

export function DeviceGallery({ items }: { items: { src: string; alt?: string; platform?: 'ios'|'android' }[] }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <GlassCard key={i} className="p-4 flex items-center justify-center">
          <DeviceFrame platform={it.platform ?? 'android'} src={it.src} alt={it.alt ?? 'App screen'} width={320} height={640} />
        </GlassCard>
      ))}
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {children}
      </div>
    </section>
  );
}

export default function CaseStudyTemplate({
  title,
  tagline,
  palette = ['var(--brand-1)', 'var(--brand-2)', 'var(--brand-3)'],
  heroImage = '/demos/ubiscan/home.png',
  kpis = [],
  gallery = [],
  challenge,
  approach,
  result,
}: {
  title: string;
  tagline: string;
  palette?: string[];
  heroImage?: string;
  kpis?: KPI[];
  gallery?: { src: string; alt?: string; platform?: 'ios'|'android' }[];
  challenge: React.ReactNode;
  approach: React.ReactNode;
  result: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0"><MeshBackground palette={palette} /></div>
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl border glass p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
              <p className="mt-3 text-[var(--muted)] max-w-prose">{tagline}</p>
              {kpis.length > 0 && <KPIStrip kpis={kpis} />}
            </div>
            <div className="flex justify-center">
              <DeviceFrame platform="android" src={heroImage} width={360} height={720} />
            </div>
          </div>
        </div>

        {gallery.length > 0 && <DeviceGallery items={gallery} />}

        <Section title="Challenge">
          <GlassCard><p className="text-[var(--muted)]">{challenge}</p></GlassCard>
          <GlassCard><p className="text-[var(--muted)]">KPIs clarified with stakeholders; constraints: on-device OCR, intermittent connectivity, battery usage & privacy.</p></GlassCard>
        </Section>

        <Section title="Approach">
          <GlassCard><div className="text-sm leading-relaxed text-[var(--muted)]">{approach}</div></GlassCard>
          <GlassCard><ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
            <li>Expo Router + native modules (camera, OCR) bridged via modular hook</li>
            <li>Optimized frames pipeline; debounce + region-of-interest to reduce CPU</li>
            <li>On-device encryption (AES) for results; secure transfer to backend</li>
            <li>Offline queue with retry + idempotent backend endpoints</li>
          </ul></GlassCard>
        </Section>

        <Section title="Result">
          <GlassCard><div className="text-sm text-[var(--muted)]">{result}</div></GlassCard>
          <GlassCard><ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
            <li>Crash-free sessions 99.4% in production</li>
            <li>Median scan-to-result latency &lt; 350ms on mid-range Android</li>
            <li>Battery-friendly: motion & OCR throttled under load</li>
          </ul></GlassCard>
        </Section>

        <div className="mt-16">
          <a href="/work" className="inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm">← Back to Work</a>
        </div>
      </div>
    </div>
  );
}
