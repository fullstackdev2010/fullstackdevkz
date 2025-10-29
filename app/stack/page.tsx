import PageHeader from "@/components/sections/PageHeader";

const stack = [
  ["Mobile", "React Native / Expo, Swift, Kotlin"],
  ["Backend", "FastAPI, Node.js, Postgres, Redis"],
  ["Auth", "JWT, OAuth2, Passkeys, Biometrics"],
  ["Realtime", "Socket.IO, WebRTC, MQTT"],
  ["CI/CD", "GitHub Actions, EAS, Fastlane"],
  ["Observability", "Sentry, Logtail, Grafana"],
];

export default function Page(){
  return (
    <main className="bg-[#0B0F19]">
      <PageHeader title="Stack" subtitle="The technology we rely on every day." image="/brainwave/stack.svg"/>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map(([h,b]) => (
            <div key={h} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-white">{h}</div>
              <p className="mt-2 text-slate-300/90 text-sm">{b}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
