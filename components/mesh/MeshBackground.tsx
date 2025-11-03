"use client";
import { useEffect, useMemo, useRef } from "react";
import clsx from "clsx";

/**
 * GPU‑friendly mesh built from 3 gradient layers.
 * Motion is transform‑based (composited) and clamped for battery‑friendliness.
 */
export default function MeshBackground({
  className,
  palette = ["var(--brand-1)", "var(--brand-2)", "var(--brand-3)"],
  density = { base: 1.0, md: 1.2 },
  motion = { base: 0.12, md: 0.2 },
  blur = { base: 28, md: 36 },
  seed = "fullstackdevkz",
}: {
  className?: string;
  palette?: string[];
  density?: { base: number; md?: number };
  motion?: { base: number; md?: number };
  blur?: { base: number; md?: number };
  seed?: string;
}) {
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const r3 = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  const amplitudes = useMemo(() => {
    // deterministic amplitudes from seed
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    const rnd = (n: number) => ((Math.sin(h + n * 999) + 1) / 2);
    return [rnd(1) * 40 + 10, rnd(2) * 50 + 12, rnd(3) * 60 + 14];
  }, [seed]);

  useEffect(() => {
    const start = performance.now();
    const run = (t: number) => {
      const elapsed = t - start;
      const base = motion.base;
      const amp = [amplitudes[0] * base, amplitudes[1] * base * 0.9, amplitudes[2] * base * 0.8];
      const x1 = Math.sin(elapsed * 0.0005) * amp[0];
      const y1 = Math.cos(elapsed * 0.0004) * amp[0];
      const x2 = Math.sin(0.0004 * elapsed + 2) * amp[1];
      const y2 = Math.cos(0.0005 * elapsed + 1) * amp[1];
      const x3 = Math.sin(0.0003 * elapsed + 4) * amp[2];
      const y3 = Math.cos(0.0003 * elapsed + 3) * amp[2];
      if (r1.current) r1.current.style.transform = `translate3d(${x1}px, ${y1}px, 0)`;
      if (r2.current) r2.current.style.transform = `translate3d(${x2}px, ${y2}px, 0)`;
      if (r3.current) r3.current.style.transform = `translate3d(${x3}px, ${y3}px, 0)`;
      raf.current = requestAnimationFrame(run);
    };
    raf.current = requestAnimationFrame(run);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [motion.base, amplitudes]);

  const layer = (ref: any, color: string, size = 520) => (
    <div
      ref={ref}
      aria-hidden
      className="absolute rounded-full opacity-70 will-change-transform"
      style={{
        width: size,
        height: size,
        filter: `blur(${blur.base}px)`,
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent 60%)`,
      }}
    />
  );

  return (
    <div className={clsx("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(1200px 800px at 80% 90%, var(--accent-1), transparent)" }}
      />
      {/* bright hotspot in the upper-left corner (restored) */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(260px 220px at 8% 8%, var(--mesh-hotspot-strong), transparent 70%)" }}
      />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(680px 560px at 10% 10%, var(--mesh-hotspot), transparent 70%)" }}
      />
      <div className="absolute inset-0" style={{ background: "radial-gradient(1200px 800px at 20% 10%, var(--accent-9), transparent), radial-gradient(1200px 800px at 80% 90%, var(--accent-1), transparent)" }} />
      {layer(r1, palette[0])}
      {layer(r2, palette[1], 560)}
      {layer(r3, palette[2], 600)}
    </div>
  );
}
