"use client";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { getRoutePalette } from '@/lib/palette';

export function RoutePaletteProvider() {
  const pathname = usePathname();
  useEffect(() => {
    const pal = getRoutePalette(pathname ?? '/');
    const root = document.documentElement;
    root.style.setProperty('--brand-1', pal[0]);
    root.style.setProperty('--brand-2', pal[1]);
    root.style.setProperty('--brand-3', pal[2]);
    if (pal[3]) root.style.setProperty('--brand-4', pal[3] as string);
    if (pal[4]) root.style.setProperty('--brand-5', pal[4] as string);
  }, [pathname]);
  return null;
}
