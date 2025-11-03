import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[color:var(--surface)]/40">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-10 grid gap-6 md:grid-cols-3 text-sm text-[var(--muted)]">
        <div>
          <div className="font-medium text-[var(--fg)]">Fullstack Dev KZ</div>
          <p className="mt-2">Mobile craftsmanship with true precision. Expo • FastAPI • Next.js.</p>
        </div>
        <div>
          <div className="font-medium text-[var(--fg)]">Navigation</div>
          <ul className="mt-2 space-y-1">
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/stack">Stack</Link></li>
            <li><Link href="/blog">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-[var(--fg)]">Get in touch</div>
          <ul className="mt-2 space-y-1">
            <li><Link href="/contact">Contact form</Link></li>
            <li><a href="mailto:fsdkzdep2010@gmail.com">fsdkzdep2010@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} Fullstack Dev KZ. All rights reserved.
      </div>
    </footer>
  );
}
