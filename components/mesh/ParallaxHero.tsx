"use client";
import { useEffect, useRef } from 'react';
import MeshBackground from '@/components/mesh/MeshBackground';

export default function ParallaxHero({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      el.style.setProperty('--parallaxX', String(dx * 6));
      el.style.setProperty('--parallaxY', String(dy * 6));
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl border glass p-8 md:p-12">
      <div className="absolute inset-0" style={{ transform: 'translate3d(var(--parallaxX,0px), var(--parallaxY,0px), 0)' }}>
        <MeshBackground />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
