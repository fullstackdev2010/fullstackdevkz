export const metadata = { title: "Releases – Fullstack Dev KZ" };

type Release = [date: string, title: string, desc: string];

const releases: Release[] = [
  ["2025-10-01", "v2.3 — Payments", "TRX/TRC20 support, EVM testnets, receipt PDF export."],
  ["2025-08-14", "v2.2 — Security", "Passkeys, biometric unlock, encrypted key backups."],
  ["2025-06-28", "Expo SDK 53 Migration", "Safe area + tab bar fixes; step‑by‑step migration."],
  ["2025-06-15", "Frontend Auth Guards", "Session persistence, protected routes, auto‑redirects."],
  ["2025-06-04", "Trade App Integration", "Expo Router app + FastAPI backend linked."],
  ["2025-05-06", "E2EE Chat Milestone", "End‑to‑end encryption; session transition."],
  ["2025-04-21", "Crypto Checkout Modal", "ETH/ERC20 & TRX/TRC20, QR, explorer checks, receipts."],
  ["2025-04-20", "Poetry PDF & Shop", "Minimalist PDFs, TOC, shop integration."],
  ["2025-04-16", "Scan Logger Core", "Multi‑scanner UI, daily logs, tray/ESC behaviors."],
  ["2025-04-14", "Site & Catalog Buildout", "30 track pages, header polish, mobile menu."],
];

export default function Page() {
  return (
    <main>
      {/* Full-bleed header */}
      <section className="w-full px-6 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Releases</h1>
        <p className="mt-3 max-w-3xl text-slate-300/90">
          Highlights from shipped work and libraries. Newest first.
        </p>
      </section>

      {/* Full-width timeline */}
      <section className="w-full px-0 sm:px-6 pb-24">
        <div className="relative">
          {/* horizontal line */}
          <div className="absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-cyan-500/30 via-white/10 to-violet-500/30" />
          <ol className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 pt-16">
            {releases.map(([date, title, desc], idx) => (
              <li key={title} className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                {/* gradient glow */}
                <div className="pointer-events-none absolute -inset-12 -z-10 opacity-30 blur-3xl">
                  <div className={`h-full w-full ${idx % 2 ? "bg-gradient-to-r from-cyan-500/40 to-violet-500/40" : "bg-gradient-to-r from-violet-500/40 to-cyan-500/40"}`} />
                </div>
                {/* node */}
                <div className="absolute -top-8 left-6 h-4 w-4 rounded-full bg-cyan-400 ring-4 ring-[var(--bg)]" />
                <div className="text-sm text-violet-300">{date}</div>
                <div className="mt-1 text-white font-medium">{title}</div>
                <p className="mt-1 text-slate-300/90 text-sm">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
