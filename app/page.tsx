// app/page.tsx
import fs from "fs";
import path from "path";
import MeshBackground from "@/components/mesh/MeshBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import DeviceSlideshow from "@/components/ui/DeviceSlideshow";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import Link from "next/link";
import ClientActiveNav from "@/components/ClientActiveNav";

function getIskraImages(): string[] {
  const dir = path.join(process.cwd(), "public", "demos", "iskra");
  try {
    const files = fs.readdirSync(dir);
    const jpgs = files.filter((f) => /\.(jpe?g)$/i.test(f)).sort();
    return jpgs.map((f) => `/demos/uniscan/${f}`);
  } catch {
    return ["/demos/uniscan/01.jpg"];
  }
}

export default function Home() {
  const images = getIskraImages();

  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-18">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 border glass">
          {/* Mesh background confined to this section */}
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
            backgroundSrc="/brand/main.webp"
            viewBox="0 0 1600 900"  // must match your mesh.svg viewBox
            photos={[
              // { href: "/demos/uniscan/01.jpg", x: 220, y: 160, w: 260, h: 390, rx: 28, overlay: "soft", mixBlendMode: "overlay" },
            ]}
          />
          <div className="absolute inset-0">
            <MeshBackground 
             brightness={0.9} 
             opacity={0.95} 
             palette={['#7AA2FF', '#8DF2D6', '#FFB3EC']}/>
          </div>         
          <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Mobile craftsmanship with true coding precision.</h1>
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
                width={360}
                height={720}
                intervalMs={2000}
                scale={1}      // outer scale (bezel + content)
                innerScale={1} // NEW: inner image only (helps avoid clipping)
                images={images}
              />
            </div>
          </div>
        </div>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          
          <RevealOnScroll delay={0.1}>
            <Link
              href="/work/uniscan"
              aria-label="Open our work: Document scanning with OCR & encryption"
              className="block rounded-2xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <GlassCard>
                <h3 className="text-xl font-medium">Document scanning with OCR &amp; encryption</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  A privacy-first mobile scanner for Android and iOS (Expo + React Native) that captures documents, cleans them up, recognizes text fully offline, and lets you sign &amp; encrypt files before you share.
                </p>
              </GlassCard>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <Link
              href="/work/iskra"
              aria-label="Open our work: Mobile sales with a fast, clean backend"
              className="block rounded-2xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <GlassCard>
                <h3 className="text-xl font-medium">Mobile sales with a fast, clean backend</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  A modern mobile app for sales reps and buyers. Built with Expo (React Native) and a lightweight FastAPI backend, it brings your full product catalog to the phone.
                </p>
              </GlassCard>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <Link
              href="/work"
              aria-label="Open our work: In development"
              className="block rounded-2xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <GlassCard>
                <h3 className="text-xl font-medium">Being developed now</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  We have a few projects being developed now: Secure Messaging — E2EE with backend, Habit Tracker mobile-first and QR Code / Barcode Scanner.
                </p>
              </GlassCard>
            </Link>
          </RevealOnScroll>   
        </section>
      </div>
      {/* Applies underline to active links in header & footer after mount */}
      <ClientActiveNav />
    </main>
  );
}
