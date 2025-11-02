"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useScrollDirection } from '@/hooks/useScrollDirection';

export function Navbar() {
  const dir = useScrollDirection();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'sticky top-0 z-40 transition-all duration-300 will-change-transform',
        dir === 'down' ? '-translate-y-full' : 'translate-y-0',
        solid ? 'backdrop-blur-md bg-[color:var(--surface)]/70 border-b border-white/10 shadow-[var(--shadow-sm)]' : 'bg-transparent',
      ].join(' ')}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold tracking-wide">Fullstack Dev KZ</Link>
        <ul className="flex items-center gap-5 text-sm">
          <li><Link href="/work" className="hover:opacity-90">Work</Link></li>
          <li><Link href="/services" className="hover:opacity-90">Services</Link></li>
          <li><Link href="/stack" className="hover:opacity-90">Stack</Link></li>
          <li><Link href="/blog" className="hover:opacity-90">Pow-Wow</Link></li>
          <li><Link href="/about" className="hover:opacity-90">About</Link></li>
          <li><Link href="/contact" className="hover:opacity-90">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
