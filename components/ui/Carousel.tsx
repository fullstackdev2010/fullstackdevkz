"use client";
import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

type Item = { key?: string; node: React.ReactNode };

export default function Carousel({ items, auto=false, interval=4000, className }: { items: Item[]; auto?: boolean; interval?: number; className?: string; }) {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const go = useCallback((dir: 1|-1) => {
    setI(prev => (prev + dir + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!auto || items.length <= 1) return;
    const id = window.setInterval(() => go(1), interval);
    return () => window.clearInterval(id);
  }, [auto, interval, go, items.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [go]);

  return (
    <div ref={ref} className={clsx('relative overflow-hidden rounded-2xl border glass', className)}>
      <div className="relative h-full">
        {items.map((it, idx) => (
          <div key={it.key ?? idx} className={clsx('absolute inset-0 transition-opacity duration-300', idx === i ? 'opacity-100' : 'opacity-0 pointer-events-none')}>
            {it.node}
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-2">
          <button onClick={() => go(-1)} className="pointer-events-auto rounded-md border border-white/20 bg-black/30 px-2 py-1 text-sm">‹</button>
          <button onClick={() => go(1)} className="pointer-events-auto rounded-md border border-white/20 bg-black/30 px-2 py-1 text-sm">›</button>
        </div>
      )}
      {items.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, idx) => (
            <span key={idx} className={clsx('h-1.5 w-1.5 rounded-full', idx === i ? 'bg-white' : 'bg-white/40')} />
          ))}
        </div>
      )}
    </div>
  );
}
