"use client";
import { useEffect, useState } from 'react';

export function useScrollDirection(threshold = 6) {
  const [dir, setDir] = useState<'up'|'down'|'init'>('init');
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;
        if (Math.abs(delta) > threshold) {
          setDir(delta > 0 ? 'down' : 'up');
          lastY = y;
        }
        frame = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return dir;
}
