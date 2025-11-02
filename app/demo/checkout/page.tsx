import MeshBackground from '@/components/mesh/MeshBackground';
import ParallaxHero from '@/components/mesh/ParallaxHero';
import CheckoutDemo from '@/components/checkout/CheckoutDemo';
import { GlassCard } from '@/components/ui/GlassCard';

export default function Page() {
  return (
    <div className="relative">
      <div className="absolute inset-0"><MeshBackground /></div>
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <ParallaxHero>
          <h1 className="text-4xl md:text-5xl font-semibold">Crypto Checkout — Walkthrough</h1>
          <p className="mt-3 max-w-prose text-[var(--muted)]">This demo spins up a mock payment intent (ETH or TRX) and auto-confirms after a few seconds. The production system would watch the blockchain and verify the intent on the backend.</p>
        </ParallaxHero>

        <div className="mt-10">
          <CheckoutDemo />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { h: 'Intent', b: 'Create a payment intent with chain + asset + expected amount + address + expiry.' },
            { h: 'Observe', b: 'Client polls or subscribes to status; server verifies tx against intent.' },
            { h: 'Receipt', b: 'On confirm, render human-readable receipt with explorer link and signature.' },
          ].map(x => (
            <GlassCard key={x.h}>
              <h3 className="text-lg font-medium">{x.h}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{x.b}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
