import MeshBackground from '@/components/mesh/MeshBackground';
import { GlassCard } from '@/components/ui/GlassCard';

const projects = [
  { title: 'Iskra Trading App', summary: 'Expo + FastAPI trading suite with offline cart, secure auth, and ERP bridges.', palette: ['var(--brand-1)','var(--brand-2)','var(--brand-3)'] },
  { title: 'Secure Messaging', summary: 'E2EE chat with passphrase-based private key restore and Socket.io transport.', palette: ['#7AA2FF','#FFB3EC','#8DF2D6'] },
  { title: 'Crypto Checkout', summary: 'ETH/TRX payments with QR, testnets, auto-confirmation, receipts.', palette: ['#8DF2D6','#FFD07A','#7AA2FF'] },
];

export default function Page() {
  return (
    <div className="relative">
      <div className="absolute inset-0"><MeshBackground /></div>
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold">Work</h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">Selected projects tinted with their own mesh palettes. Each entry: challenge → approach → metrics.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <GlassCard key={p.title}>
              <div className="h-24 w-full rounded-xl mb-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(600px 400px at 20% 20%, ${p.palette[0]}, transparent), radial-gradient(600px 400px at 80% 50%, ${p.palette[1]}, transparent), radial-gradient(600px 400px at 50% 80%, ${p.palette[2]}, transparent)` }} />
              </div>
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{p.summary}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
