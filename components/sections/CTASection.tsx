import GlassButton from "@/components/ui/GlassButton";
export default function CTASection(){
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-10 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Build your app with us</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300/90">Tell us about your product and we’ll propose a fast, realistic path to your first release.</p>
        <div className="mt-6 flex justify-center">
          <GlassButton href="mailto:hello@fullstackdevkz.com">Contact us</GlassButton>
        </div>
      </div>
    </section>
  );
}
