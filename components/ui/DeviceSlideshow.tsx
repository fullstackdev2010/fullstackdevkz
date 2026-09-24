"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DeviceFrame from "@/components/ui/DeviceFrame";

type DeviceSlide = {
  src: string;
  alt: string;
  label: string;
  contentScale?: number;
};

type DeviceSlideshowProps = {
  platform?: "android";
  width?: number;
  height?: number;
  intervalMs?: number;
  images?: string[];
  slides?: DeviceSlide[];
  scale?: number;
  innerScale?: number;
  priority?: boolean;
  perspective?: boolean;
  productName?: string;
};

const DEFAULT_SLIDES: DeviceSlide[] = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"].map(
  (name, index) => ({
    src: `/demos/uniscan/${name}`,
    alt: `Application screen ${index + 1}`,
    label: `Screen ${index + 1}`,
  }),
);

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

export default function DeviceSlideshow({
  platform = "android",
  width = 320,
  height = 640,
  intervalMs = 5000,
  images,
  slides,
  scale = 0.95,
  innerScale = 0.96,
  priority = false,
  perspective = false,
  productName = "Product",
}: DeviceSlideshowProps) {
  const items = useMemo<DeviceSlide[]>(() => {
    if (slides?.length) return slides;
    if (images?.length) {
      return images.map((src, index) => ({
        src,
        alt: `Application screen ${index + 1}`,
        label: `Screen ${index + 1}`,
      }));
    }
    return DEFAULT_SLIDES;
  }, [images, slides]);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const active = items[index] ?? items[0];

  const select = useCallback(
    (next: number) => setIndex((next + items.length) % items.length),
    [items.length],
  );

  useEffect(() => {
    if (items.length < 2 || paused || reducedMotion) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % items.length),
      Math.max(4000, intervalMs),
    );
    return () => window.clearInterval(timer);
  }, [intervalMs, items.length, paused, reducedMotion]);

  useEffect(() => {
    const next = items[(index + 1) % items.length];
    if (!next || next.src === active.src) return;
    const image = new window.Image();
    image.src = next.src;
  }, [active.src, index, items]);

  const visualScale = Math.max(0.76, Math.min(1, scale));

  return (
    <div
      className="mx-auto w-full max-w-[390px]"
      aria-roledescription="carousel"
      aria-label={`${productName} screens in a 3D phone`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className={perspective ? "phone-showcase-perspective" : undefined}>
        <div
          className={perspective ? "phone-showcase-device" : "origin-center"}
          style={{ transform: perspective ? undefined : `scale(${visualScale})` }}
        >
          <div className="phone-showcase-glow" aria-hidden />
          <DeviceFrame
            key={active.src}
            platform={platform}
            src={active.src}
            alt={active.alt}
            width={width}
            height={height}
            contentScale={active.contentScale ?? innerScale}
            priority={priority && index === 0}
            className="phone-showcase-frame max-w-full"
          />
        </div>
      </div>

      {items.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label={`Show previous ${productName} screen`}
            onClick={() => select(index - 1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <ChevronLeft size={18} aria-hidden />
          </button>
          <div className="flex items-center gap-2" aria-label={`${active.label}, slide ${index + 1} of ${items.length}`}>
            {items.map((item, itemIndex) => (
              <button
                type="button"
                key={item.src}
                aria-label={`Show ${item.label}`}
                aria-current={itemIndex === index ? "true" : undefined}
                onClick={() => select(itemIndex)}
                className={`h-2.5 w-2.5 rounded-full border border-white/30 transition ${itemIndex === index ? "bg-white" : "bg-white/15 hover:bg-white/40"}`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label={`Show next ${productName} screen`}
            onClick={() => select(index + 1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <ChevronRight size={18} aria-hidden />
          </button>
        </div>
      )}
      <p className="mt-2 text-center text-xs text-[var(--muted)]" aria-live="polite">
        {active.label}
      </p>
    </div>
  );
}
