"use client";
import { useEffect, useRef } from "react";

const logos = ["ACME", "NOVA", "POLAR", "ALPHA", "ATLAS", "ZEUS"];

export default function LogosMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let x = 0;
    const tick = () => {
      x -= 0.5;
      el.style.transform = `translateX(${x}px)`;
      if (Math.abs(x) > el.scrollWidth / 2) x = 0;
      requestAnimationFrame(tick);
    };
    tick();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="flex gap-10 whitespace-nowrap p-4 will-change-transform" ref={ref}>
          {[...logos, ...logos, ...logos].map((l, i) => (
            <div key={i} className="px-4 text-sm tracking-widest text-slate-200/70">{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
