import PageHeader from "@/components/sections/PageHeader";

export default function Page(){
  return (
    <main className="bg-[#0B0F19]">
      <PageHeader title="Contact" subtitle="Share your goals and timeline. We'll reply within 24 hours." image="/brainwave/contact.svg"/>
      <section className="mx-auto max-w-3xl px-6 py-16">
        <form className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-2">
            <label className="text-sm text-slate-300">Name</label>
            <input className="rounded-xl bg-slate-900/60 p-3 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400" placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-300">Email</label>
            <input type="email" className="rounded-xl bg-slate-900/60 p-3 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400" placeholder="you@company.com" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-300">Project</label>
            <textarea rows={5} className="rounded-xl bg-slate-900/60 p-3 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400" placeholder="Goals, timeline, budget range" />
          </div>
          <button className="mt-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-white hover:bg-white/20 transition">Send</button>
          <p className="text-xs text-slate-400">Or email <a className="underline" href="mailto:hello@fullstackdevkz.com">hello@fullstackdevkz.com</a></p>
        </form>
      </section>
    </main>
  );
}
