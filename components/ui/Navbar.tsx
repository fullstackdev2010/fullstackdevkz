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
  const [workOpen, setWorkOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setWorkOpen(false); }, [pathname]);

  const links = [
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/stack', label: 'Stack' },
    { href: '/blog', label: 'Privacy' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  // const workLinks = [
  //   { href: '/work/ubiscan', label: 'UNIScan — Case Study' },
  //   { href: '/work/ubiscan-deep-dive', label: 'UNIScan — Deep Dive' },
  //   { href: '/work/iskra', label: 'Iskra Trading' },
  //   { href: '/work/secure-messaging', label: 'Secure Messaging (E2EE)' },
  // ];

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
        <ul className="hidden md:flex items-center gap-5 text-sm relative">
          <li
            className="relative"
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <Link href="/work" className={isActive('/work') ? 'opacity-100 underline underline-offset-4' : 'hover:opacity-90'}>
              Work
            </Link>
            {/* {workOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-white/15 bg-[color:var(--surface)]/90 backdrop-blur-md p-2 shadow-[var(--shadow-lg)]">
                {workLinks.map(w => (
                  <Link key={w.href} href={w.href} className="block rounded-md px-3 py-2 text-sm hover:bg-white/5">
                    {w.label}
                  </Link>
                ))}
              </div>
            )} */}
          </li>

          {links.filter(x => x.href !== '/work').map(l => (
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
            <details>
              <summary className="cursor-pointer py-1">Work</summary>
              <div className="mt-2 pl-3 space-y-1">
                {workLinks.map(w => (
                  <Link key={w.href} href={w.href} className="block opacity-90">{w.label}</Link>
                ))}
              </div>
            </details>
            {links.filter(x => x.href !== '/work').map(l => (
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
