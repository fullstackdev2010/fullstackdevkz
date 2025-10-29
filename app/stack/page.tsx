export const metadata = { title: "Stack – Fullstack Dev KZ" };

type Item = { area: string; tools: string[] };

const stack: Item[] = [
  { area: "Mobile", tools: ["React Native / Expo", "Swift", "Kotlin"] },
  { area: "Backend", tools: ["FastAPI", "Node.js", "Postgres", "Redis"] },
  { area: "Auth & Security", tools: ["JWT", "OAuth2", "Passkeys", "Biometrics", "E2EE"] },
  { area: "Realtime", tools: ["Socket.IO", "WebRTC", "MQTT"] },
  { area: "CI/CD", tools: ["GitHub Actions", "EAS", "Fastlane"] },
  { area: "Observability", tools: ["Sentry", "Logtail", "Grafana"] },
];

const badges = [
  "React Native", "Expo", "FastAPI", "Node.js",
  "PostgreSQL", "Redis", "JWT", "Passkeys",
  "Socket.IO", "WebRTC", "EAS", "Fastlane", "Sentry"
];

export default function Page() {
  return (
    <main>
      {/* Full-bleed header */}
      <section className="w-full px-6 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Stack</h1>
        <p className="mt-3 max-w-3xl text-slate-300/90">
          Battle‑tested tools we build and ship with.
        </p>
      </section>

      {/* Full-width glow grid */}
      <section className="w-full px-0 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((s, idx) => (
            <div key={s.area} className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              {/* Brainwave glow */}
              <div className="pointer-events-none absolute -inset-12 -z-10 opacity-30 blur-3xl transition group-hover:opacity-60">
                <div className={`h-full w-full ${idx % 2 ? "bg-gradient-to-r from-cyan-500/40 to-violet-500/40" : "bg-gradient-to-r from-violet-500/40 to-cyan-500/40"}`} />
              </div>
              <div className="text-white text-lg font-medium">{s.area}</div>
              <ul className="mt-2 space-y-1 text-slate-300/90 text-sm">
                {s.tools.map(t => <li key={t}>• {t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Badge strip */}
      <section className="w-full px-0 sm:px-6 py-12">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="flex flex-wrap gap-2 p-4">
            {badges.map((b, i) => (
              <span key={b} className="rounded-2xl border border-white/10 bg-[#0B0F19]/50 px-3 py-1 text-sm text-white/90">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
