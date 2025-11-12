// components/mesh/MeshBackground.tsx
"use client";
import { useEffect, useMemo, useRef } from "react";
import clsx from "clsx";
import type React from "react";

/**
 * Gradient mesh with fixed colors (no RNG).
 * - Colors = palette[0], palette[1], palette[2] in order (stable across reloads)
 * - Motion is deterministic from `seed`; pass `static` to disable animation
 * - Backward-compatible props
 */
export default function MeshBackground({
  className,
  palette = ["var(--brand-1)", "var(--brand-2)", "var(--brand-3)"],
  motion = { base: 0.12, md: 0.2 },
  blur = { base: 28, md: 36 },
  seed = "fullstackdevkz",
  static: isStatic = true,
  /** Global brightness/contrast/saturation + opacity controls */
  brightness = 1,
  contrast = 1,
  saturate = 1,
  opacity = 1,
  blobOpacity = 0.70,
}: {
  className?: string;
  palette?: string[];
  density?: { base: number; md?: number };
  motion?: { base: number; md?: number };
  blur?: { base: number; md?: number };
  seed?: string | number;
  /** Disable animation while keeping the visual. */
  static?: boolean;
  /** Visual controls (all optional) */
  brightness?: number;
  contrast?: number;
  saturate?: number;
  opacity?: number;
  blobOpacity?: number;
}) {
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const r3 = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  // Deterministic amplitudes from seed (for motion only)
  const amplitudes = useMemo(() => {
    let h = 2166136261 >>> 0; // FNV-1a
    const s = String(seed);
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    const n1 = ((h ^ 0x9e3779b9) >>> 0) / 0xffffffff;
    const n2 = ((h ^ 0x85ebca6b) >>> 0) / 0xffffffff;
    const n3 = ((h ^ 0xc2b2ae35) >>> 0) / 0xffffffff;
    return [n1 * 40 + 10, n2 * 50 + 12, n3 * 60 + 14];
  }, [seed]);

  // Respect prefers-reduced-motion
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (isStatic || prefersReducedMotion) return;
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
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [motion.base, amplitudes, isStatic, prefersReducedMotion]);

 // Accept refs whose current can be null (useRef<HTMLDivElement>(null))
  const layer = (
    ref: React.RefObject<HTMLDivElement | null>,
    color: string,
    size = 520
  ) => (
    <div
      ref={ref}
      aria-hidden
      className="absolute rounded-full will-change-transform"
      style={{
        width: size,
        height: size,
        filter: `blur(${blur.base}px)`,
        opacity: blobOpacity,
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent 60%)`,
      }}
    />
  );

  return (
    <div
      className={clsx("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ filter: `brightness(${brightness}) contrast(${contrast}) saturate(${saturate})`, opacity }}
    >
      {/* ambient base glows */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 80% 90%, var(--accent-1), transparent)",
        }}
      />
      {/* upper-left hotspot */}
      <div
        className="absolute inset-0 mesh--cool"
        style={{
          background:
            "radial-gradient(260px 220px at 8% 8%, var(--mesh-hotspot-strong), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 mesh--cool"
        style={{
          background:
            "radial-gradient(680px 560px at 10% 10%, var(--mesh-hotspot), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 20% 10%, var(--accent-9), transparent), radial-gradient(1200px 800px at 80% 90%, var(--accent-1), transparent)",
        }}
      />

      {/* FIXED color order: palette[0], palette[1], palette[2] */}
      {layer(r1, palette[0] ?? "var(--brand-1)")}
      {layer(r2, palette[1] ?? "var(--brand-2)", 560)}
      {layer(r3, palette[2] ?? "var(--brand-3)", 600)}
    </div>
  );
}
