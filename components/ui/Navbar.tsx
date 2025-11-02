"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const dir = useScrollDirection();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const links = [
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/stack', label: 'Stack' },
    { href: '/blog', label: 'Pow-Wow' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <header
      className={[
        'sticky top-0 z-50 transition-all duration-300 will-change-transform',
        dir === 'down' ? '-translate-y-full' : 'translate-y-0',
        solid ? 'backdrop-blur-md bg-[color:var(--surface)]/70 border-b border-white/10 shadow-[var(--shadow-sm)]' : 'bg-transparent',
      ].join(' ')}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold tracking-wide">Fullstack Dev KZ</Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={isActive(l.href) ? 'opacity-100 underline underline-offset-4' : 'hover:opacity-90'}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Button href="/contact" variant="glow" size="sm">Start a project</Button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(s => !s)}
          className="md:hidden rounded-lg border border-white/20 px-3 py-1.5"
        >
          ☰
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[color:var(--surface)]/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 py-4 space-y-2">
            {links.map(l => (
              <Link key={l.href} href={l.href} className={'block ' + (isActive(l.href) ? 'opacity-100 underline underline-offset-4' : 'opacity-90')}>
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/contact" variant="glow" size="md" className="w-full justify-center">Start a project</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
