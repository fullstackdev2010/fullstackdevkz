import { Mail, Phone, Clock, MapPin } from "lucide-react";

export const metadata = { title: "Contact – Fullstack Dev KZ" };

export default function Page() {
  return (
    <main>
      {/* Full-bleed header */}
      <section className="w-full px-6 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Contact</h1>
        <p className="mt-3 max-w-3xl text-slate-300/90">
          Tell us about your product and timing — we’ll reply within 24 hours.
        </p>
      </section>

      {/* Edge-to-edge grid: form + contact info */}
      <section className="w-full px-0 sm:px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Form */}
          <form className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm text-slate-300">Name</label>
                <input className="rounded-xl bg-slate-900/60 p-3 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" className="rounded-xl bg-slate-900/60 p-3 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400" placeholder="you@company.com" />
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm text-slate-300">Company (optional)</label>
                <input className="rounded-xl bg-slate-900/60 p-3 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400" placeholder="Your company" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-slate-300">Timeline</label>
                <select className="rounded-xl bg-slate-900/60 p-3 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400">
                  <option>ASAP (0–1 month)</option>
                  <option>Soon (1–2 months)</option>
                  <option>Later (2–4 months)</option>
                  <option>Exploring</option>
                </select>
              </div>
            </div>
            <div className="mt-4 grid gap-2">
              <label className="text-sm text-slate-300">Project</label>
              <textarea rows={6} className="rounded-xl bg-slate-900/60 p-3 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400" placeholder="Goals, scope, platforms, budget range" />
            </div>
            <button className="mt-5 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-white hover:bg-white/20 transition">
              Send
            </button>
            <p className="mt-2 text-xs text-slate-400">
              Prefer email? <a className="underline" href="mailto:hello@fullstackdevkz.com">hello@fullstackdevkz.com</a>
            </p>
          </form>

          {/* Contact info & availability */}
          <div className="space-y-4">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="pointer-events-none absolute -inset-12 -z-10 opacity-30 blur-3xl">
                <div className="h-full w-full bg-gradient-to-r from-cyan-500/40 to-violet-500/40" />
              </div>
              <div className="flex items-center gap-3 text-white">
                <Mail className="h-5 w-5 text-cyan-300" />
                <a href="mailto:hello@fullstackdevkz.com" className="hover:underline">hello@fullstackdevkz.com</a>
              </div>
              <div className="mt-3 flex items-center gap-3 text-white/90">
                <Phone className="h-5 w-5 text-cyan-300" />
                <span>+1 (555) 123‑4567</span>
              </div>
              <div className="mt-3 flex items-center gap-3 text-white/90">
                <Clock className="h-5 w-5 text-cyan-300" />
                <span>Mon–Fri, 9:00–18:00 (America/Chicago)</span>
              </div>
              <div className="mt-3 flex items-start gap-3 text-white/90">
                <MapPin className="h-5 w-5 text-cyan-300 mt-1" />
                <span>Remote • United States</span>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-6">
              <div className="text-white font-medium">Want a quick estimate?</div>
              <p className="text-sm text-slate-300/90 mt-1">Share scope + timeline. We’ll propose an MVP plan and budget.</p>
              <a href="mailto:hello@fullstackdevkz.com" className="mt-3 inline-block rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">Email us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
