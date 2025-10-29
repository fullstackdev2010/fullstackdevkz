export const metadata = { title: "About – Fullstack Dev KZ" };

const values: [string, string][] = [
  ["Outcome‑driven", "We define success in measurable user and business results."],
  ["Ship safely", "Small PRs, feature flags, release channels, and robust telemetry."],
  ["Own the craft", "Great DX, clean architecture, maintainable code and docs."],
];

const highlights: [string, string][] = [
  ["30+", "Apps shipped"],
  ["2–4w", "Avg MVP sprint"],
  ["99.9%", "Crash‑free sessions"],
];

export default function Page() {
  return (
    <main>
      {/* Full-bleed header */}
      <section className="w-full px-6 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">About</h1>
        <p className="mt-3 max-w-3xl text-slate-300/90">
          We’re a small senior team that partners closely with product leaders to design, build, and ship mobile experiences.
        </p>
      </section>

      {/* Values grid (glow cards) */}
      <section className="w-full px-0 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map(([t, d], idx) => (
            <div key={t} className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="pointer-events-none absolute -inset-12 -z-10 opacity-30 blur-3xl transition group-hover:opacity-60">
                <div className={`h-full w-full ${idx % 2 ? "bg-gradient-to-r from-cyan-500/40 to-violet-500/40" : "bg-gradient-to-r from-violet-500/40 to-cyan-500/40"}`} />
              </div>
              <div className="text-white text-lg font-medium">{t}</div>
              <p className="mt-2 text-slate-300/90 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights strip */}
      <section className="w-full px-0 sm:px-6 py-12">
        <div className="grid grid-cols-3 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
          {highlights.map(([n, l]) => (
            <div key={l}>
              <div className="text-3xl font-semibold text-white">{n}</div>
              <div className="mt-1 text-slate-300/80">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach (timeline-ish) */}
      <section className="w-full px-0 sm:px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-white text-xl font-medium">Our approach</h2>
          <ol className="mt-4 grid gap-6 md:grid-cols-3">
            <li className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
              <div className="text-slate-400 text-sm">01</div>
              <div className="text-white mt-1">Scope & UX</div>
              <p className="text-slate-300/90 text-sm mt-1">Define outcomes, map flows, and align on a small, valuable slice.</p>
            </li>
            <li className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
              <div className="text-slate-400 text-sm">02</div>
              <div className="text-white mt-1">MVP Sprint</div>
              <p className="text-slate-300/90 text-sm mt-1">Ship a working build quickly with quality gates and observability.</p>
            </li>
            <li className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
              <div className="text-slate-400 text-sm">03</div>
              <div className="text-white mt-1">Scale & QA</div>
              <p className="text-slate-300/90 text-sm mt-1">Harden, automate tests, and smooth releases for steady velocity.</p>
            </li>
          </ol>
          <p className="text-slate-300/90 text-sm mt-6">
            We’ve delivered for fintech, health, marketplaces, and B2B — happy to connect you with references.
          </p>
        </div>
      </section>
    </main>
  );
}
