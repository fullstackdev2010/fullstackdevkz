import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative z-30 mt-24 border-t border-white/10 bg-[color:var(--surface)]/60 supports-[backdrop-filter]:backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-10 grid gap-6 md:grid-cols-3 text-sm text-[var(--muted)]">
        <div>
          <div className="font-medium text-[var(--fg)]">Fullstack Dev KZ</div>
          <ul className="mt-2 space-y-1">
            <li>Mobile craftsmanship with true precision.</li>
            <li>Expo • FastAPI • Next.js.</li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-[var(--fg)]">Navigation</div>
          <ul className="mt-2 space-y-1">
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/stack">Stack</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-[var(--fg)]">Get in touch</div>
          <ul className="mt-2 space-y-1">
            <li><Link href="/contact">Contact form</Link></li>
            <li><a href="mailto:fsdkzdep2010@gmail.com">fsdkzdep2010@gmail.com</a></li>
          </ul>
          {/* Socials */}
          <div className="mt-4 flex items-center gap-2">
            {/* X / Twitter */}
            <a
              href="https://twitter.com/fullstackdevkz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on X (Twitter)"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M13.545 10.94 20.36 3h-1.61l-5.93 6.86L7.85 3H2l6.17 8.99L2 21h1.61l6.21-7.19L16.15 21H22l-6.27-9.06ZM10.64 12.9l-.72-.99-5.74-7.93h2.47l4.64 6.41.72.99 6.14 8.48h-2.47l-4.74-6.96Z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/fullstackdevkz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.17c-3.2.69-3.87-1.37-3.87-1.37-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.22 1.8 1.22 1.04 1.79 2.72 1.27 3.39.97.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.18 0 0 .98-.31 3.21 1.19a11.1 11.1 0 0 1 5.84 0c2.23-1.5 3.2-1.19 3.2-1.19.63 1.66.24 2.88.12 3.18.75.81 1.19 1.85 1.19 3.1 0 4.43-2.68 5.41-5.24 5.7.42.37.8 1.1.8 2.23v3.31c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/fullstackdevkz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v1.98h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.64 4.75 6.07V23h-4v-5.73c0-1.36-.02-3.11-1.9-3.11-1.9 0-2.19 1.48-2.19 3.01V23h-4V8.5z"/>
              </svg>
            </a>
            {/* Telegram */}
            <a
              href="https://t.me/fullstackdevkz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on Telegram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M9.76 15.08 9.6 19a1 1 0 0 0 1.64.77l2.22-1.82 3.7 2.72c.67.5 1.63.13 1.8-.68l3-14a1 1 0 0 0-1.38-1.15L2.34 9.26c-.94.37-.9 1.72.07 2l5.3 1.56 10.63-6.56-8.58 8.82Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} Fullstack Dev KZ. All rights reserved.
      </div>
    </footer>
  );
}