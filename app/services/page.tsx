import HeroServices from "@/components/sections/HeroServices";
import { Wrench, Smartphone, Server, Lock, Rocket, Boxes } from "lucide-react";

const services = [
  { icon: Smartphone, title: "Mobile Apps (RN/Expo)", desc: "iOS/Android apps with secure auth, realtime, and polished UX."},
  { icon: Server, title: "Backend APIs", desc: "FastAPI/Node, Postgres/Redis, JWT/OAuth, websockets, file/CDN."},
  { icon: Lock, title: "Security & E2EE", desc: "Passkeys, biometrics, RSA/ECDH, encrypted key backup, audits."},
  { icon: Rocket, title: "CI/CD & Releases", desc: "EAS, Fastlane, GitHub Actions, OTA release channels, telemetry."},
  { icon: Boxes, title: "SaaS & Multi‑Tenant", desc: "Productizing backends, per‑tenant config, billing hooks."},
  { icon: Wrench, title: "Desktop & Utilities", desc: "Windows barcode/QR tools, packaging, startup services."},
];

const modes = [
  ["MVP Sprint", "2–4 weeks to a functional app (TestFlight/Play internal test)."],
  ["Feature Team", "We embed and push hard on roadmap delivery with quality gates."],
  ["Stabilize/Rescue", "Crash‑rate cuts, performance work, release automation."],
];

export default function Page(){
  return (
    <main className="bg-[#0B0F19]">
      <HeroServices />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Icon className="h-6 w-6 text-cyan-300" />
              <div className="mt-3 text-white font-medium">{title}</div>
              <p className="mt-2 text-slate-300/90 text-sm">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {modes.map(([t,d]) => (
            <div key={t} className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
              <div className="text-white">{t}</div>
              <p className="mt-2 text-slate-300/90 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
