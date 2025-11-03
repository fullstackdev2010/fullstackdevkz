import CaseCard from '@/components/work/CaseCard';

const cases = [
  {
    href: '/work/ubiscan',
    title: 'UNIScan — On-device OCR Scanner',
    summary: 'High-speed scanning with on-device OCR, native modules, and encrypted results.',
    tags: ['Expo', 'OCR', 'Encryption'],
    thumb: '/demos/uniscan/home.png',
  },
  {
    href: '/work/iskra',
    title: 'Iskra Trading — Mobile Catalog & Orders',
    summary: 'Expo app + FastAPI backend with offline cart and ERP bridges.',
    tags: ['Expo', 'FastAPI', 'ERP'],
    thumb: '/demos/iskra/home.png',
  },
  {
    href: '/work/secure-messaging',
    title: 'Secure Messaging — E2EE',
    summary: 'End‑to‑end encryption with passphrase restore and resilient UX.',
    tags: ['E2EE', 'RSA', 'Socket.io'],
    thumb: '/demos/secure-messaging/chat.png',
  },
];

export default function Page() {
  return (
    <div className="relative">
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold">Work</h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">Selected case studies across mobile, backend, and crypto flows — all tinted with mesh palettes.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map(c => (
            <CaseCard key={c.href} {...c} />
          ))}
        </div>
      </section>
    </div>
  );
}
