import MeshBackground from '@/components/mesh/MeshBackground';
import { GlassCard } from '@/components/ui/GlassCard';
import DeviceCarousel from '@/components/work/DeviceCarousel';

export default function Page() {
  return (
    <div className="relative">
      <div className="absolute inset-0"><MeshBackground palette={['var(--brand-1)','var(--brand-2)','var(--brand-3)']} /></div>
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold">UNIScan — Deep Dive</h1>
        <p className="mt-3 max-w-prose text-[var(--muted)]">On-device OCR with a throttled frames pipeline, region-of-interest targeting, and encrypted results. This page details performance levers and UX tradeoffs.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { h: 'ROI & Zoom', b: 'Direct users to the text area; smaller ROI means fewer pixels to analyze.' },
            { h: 'Debounce', b: 'Short cooldown (60–120ms) stabilizes frames and avoids duplicate OCR work.' },
            { h: 'Ring buffer', b: 'Always process the most recent frame; drop old ones.' },
          ].map(x => (
            <GlassCard key={x.h}>
              <h3 className="text-lg font-medium">{x.h}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{x.b}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-10">
          <DeviceCarousel shots={[
            { src: '/demos/uniscan/home.png', platform: 'android', alt: 'Home' },
            { src: '/demos/uniscan/preview.png', platform: 'android', alt: 'Preview' },
            { src: '/demos/uniscan/result.png', platform: 'android', alt: 'Result' },
          ]} />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <GlassCard>
            <h3 className="text-lg font-medium">Perf targets</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
              <li>Median scan-to-result ≤ 350ms</li>
              <li>Battery-safe throttling on thermal load</li>
              <li>No plaintext OCR artifacts stored on disk</li>
            </ul>
          </GlassCard>
          <GlassCard>
            <h3 className="text-lg font-medium">Security</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
              <li>AES-GCM encrypt on device before sync</li>
              <li>Signed uploads; server verifies idempotently</li>
              <li>Audit log for each OCR payload</li>
            </ul>
          </GlassCard>
        </div>

        <div className="mt-12">
          <a href="/work" className="inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm">← Back to Work</a>
        </div>
      </section>
    </div>
  );
}
