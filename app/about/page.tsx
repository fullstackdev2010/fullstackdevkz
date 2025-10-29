import PageHeader from "@/components/sections/PageHeader";

const values = [
  ["Outcome‑driven", "We define success in measurable user and business results."],
  ["Ship safely", "Feature flags, PR discipline, release channels, robust telemetry."],
  ["Own the craft", "Great DX, clean architecture, maintainable code and docs."],
];

export default function Page(){
  return (
    <main className="bg-[#0B0F19]">
      <PageHeader title="About" subtitle="Small, senior, and hands‑on. We partner to ship." image="/brainwave/about.svg"/>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {values.map(([t, d]) => (
            <div key={t} className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
              <div className="text-white">{t}</div>
              <p className="mt-2 text-slate-300/90 text-sm">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="text-white font-medium">We’ve worked across fintech, health, marketplaces, and B2B.</div>
          <p className="mt-2 text-slate-300/90 text-sm">Ask for references — we’re happy to connect you directly.</p>
        </div>
      </section>
    </main>
  );
}
