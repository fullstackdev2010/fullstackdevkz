// app/page.tsx
import fs from "fs";
import path from "path";
import MeshBackground from "@/components/mesh/MeshBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import DeviceSlideshow from "@/components/ui/DeviceSlideshow";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

function getIskraImages(): string[] {
  const dir = path.join(process.cwd(), "public", "demos", "iskra");
  try {
    const files = fs.readdirSync(dir);
    const jpgs = files.filter((f) => /\.(jpe?g)$/i.test(f)).sort();
    return jpgs.map((f) => `/demos/iskra/${f}`);
  } catch {
    return ["/demos/iskra/01.jpg"];
  }
}

export default function Home() {
  const images = getIskraImages();

  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-18">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 border glass">
          <div className="absolute inset-0">
            <MeshBackground />
          </div>
          <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Mobile craftsmanship with true precision.</h1>
              <p className="mt-5 max-w-prose text-lg text-[var(--muted)]">
                Expo + FastAPI + Next.js — robust trading apps, secure messaging, crypto checkout, and elegant meshes that feel alive.
              </p>
              <div className="mt-8 flex gap-4">
                <a className="glow-outline inline-flex items-center rounded-xl bg-white/10 px-5 py-3 text-sm" href="/work">See our builds</a>
                <a className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 text-sm" href="/contact">Start a project</a>
              </div>
            </div>
            <div className="flex justify-center">
              <DeviceSlideshow
                platform="android"
                width={340}
                height={700}
                intervalMs={3000}
                scale={0.95}      // outer scale (bezel + content)
                innerScale={0.95} // NEW: inner image only (helps avoid clipping)
                images={images}
              />
            </div>
          </div>
        </div>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {["Trading Catalog", "Secure Messaging", "Crypto Checkout"].map((title, i) => (
            <RevealOnScroll key={title} delay={i * 0.06}>
              <GlassCard>
                <h3 className="text-xl font-medium">{title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">A focused card describing what we build with a mesh accent and measurable outcomes.</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </section>
      </div>
    </main>
  );
}
