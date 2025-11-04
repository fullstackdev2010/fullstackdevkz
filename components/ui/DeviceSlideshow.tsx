"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import DeviceFrame from "@/components/ui/DeviceFrame";

type DeviceSlideshowProps = {
  platform?: "android" | "ios";
  width?: number;
  height?: number;
  intervalMs?: number;
  images?: string[]; // when provided, we trust the list and do NOT probe
  scale?: number;     // outer visual scale (bezel + content)
  innerScale?: number; // NEW: inner image-only scale to avoid clipping
};

const DEFAULT_CANDIDATES = [
  "home.jpg",
  "catalog.jpg",
  "product.jpg",
  "cart.jpg",
  "order.jpg",
  "checkout.jpg",
  "messaging.jpg",
  // numeric fallbacks 1..12
  ...Array.from({ length: 12 }, (_, i) => `${i + 1}.jpg`),
];

function preload(src: string): Promise<string | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export default function DeviceSlideshow({
  platform = "android",
  width = 360,
  height = 720,
  intervalMs = 3000,
  images,
  scale = 0.92,
  innerScale = 0.9,
}: DeviceSlideshowProps) {
  const base = "/demos/iskra/";
  const candidates = useMemo(() => {
    if (images && images.length) {
      return images.map((n) => (n.startsWith("/") ? n : base + n));
    }
    const list = DEFAULT_CANDIDATES.map((n) => base + n);
    return Array.from(new Set(list)); // de-dup preserve order
  }, [images]);

  const [slides, setSlides] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    let mounted = true;
    if (images && images.length) {
      setSlides(candidates);
      return () => { mounted = false; };
    }
    Promise.all(candidates.map(preload)).then((loaded) => {
      if (!mounted) return;
      const ok = loaded.filter((s): s is string => !!s);
      setSlides(ok.length ? ok : [base + "home.jpg"]);
    });
    return () => { mounted = false; };
  }, [candidates, images]);

  useEffect(() => {
    if (!slides.length) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, Math.max(1200, intervalMs));
    return () => { if (timerRef.current) window.clearInterval(timerRef.current); };
  }, [slides, intervalMs]);

  const src = slides[idx] ?? (base + "home.jpg");

  // Outer scale (bezel + content)
  const s = Math.max(0.75, Math.min(1.0, scale));

  return (
    <div
      className="origin-center"
      style={{ transform: `scale(${s})`, transformOrigin: "center center" }}
    >
      <DeviceFrame
        platform={platform}
        src={src}
        width={width}
        height={height}
        contentScale={innerScale} // key: scale the inner picture only
      />
    </div>
  );
}
