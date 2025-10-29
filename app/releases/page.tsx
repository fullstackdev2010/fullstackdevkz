import PageHeader from "@/components/sections/PageHeader";

const releases = [
  ["2025-07-23", "Auth Refactor", "Login flow modularization; biometric/PIN encapsulated."],
  ["2025-07-22", "PIN Keypad & UI", "Round keypad redesign aligned with sign‑in screen."],
  ["2025-06-28", "Expo SDK 53 Migration", "Safe area + tab bar fixes; step‑by‑step migration plan."],
  ["2025-06-15", "Frontend Auth Guards", "Session persistence via React Context; protected routes."],
  ["2025-06-04", "Trade App Integration", "Complete Expo Router app + FastAPI backend linked."],
  ["2025-05-06", "E2EE Chat Milestone", "Working end‑to‑end encryption; session transition."],
  ["2025-04-21", "Crypto Checkout Modal", "ETH/ERC20 & TRX/TRC20, QR, explorer checks, receipts."],
  ["2025-04-20", "Poetry PDF & Shop", "Minimalist PDFs, table of contents, shop integration."],
  ["2025-04-16", "Scan Logger Core", "Multi‑scanner UI, daily logs, tray/ESC behaviors."],
  ["2025-04-14", "Site & Catalog Buildout", "30 track pages, header polish, mobile menu."]
];

export default function Page(){
  return (
    <main className="bg-[#0B0F19]">
      <PageHeader title="Releases" subtitle="Product and project milestones we've shipped." image="/brainwave/releases.svg"/>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <ol className="relative before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-white/10">
          {releases.map(([date, title, desc]) => (
            <li key={title} className="ml-6 py-6 relative">
              <div className="absolute -left-1.5 mt-6 h-3 w-3 rounded-full bg-cyan-400" />
              <div className="text-sm text-slate-400">{date}</div>
              <div className="text-white font-medium">{title}</div>
              <p className="text-slate-300/90 text-sm">{desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
