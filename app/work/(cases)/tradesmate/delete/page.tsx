import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { GlassCard } from "@/components/ui/GlassCard";
import DeleteRequestForm from "./DeleteRequestForm";

export const metadata: Metadata = {
  title: "Delete TradesMate Account and Data",
  description: "Request deletion of a TradesMate business account and its associated customer, job, document, payment, expense, and team data.",
  alternates: { canonical: "/work/tradesmate/delete" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <main className="relative isolate"><div className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-12"><section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-8 md:p-10">
      <MeshWithPhotoInsets className="pointer-events-none absolute inset-0 z-0 h-full min-h-[900px]" backgroundSrc="/brand/main.webp" viewBox="0 0 1600 900" photos={[]} />
      <div className="absolute inset-0"><MeshBackground brightness={0.72} opacity={0.92} seed="tradesmate-delete" palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]} static /></div>
      <div className="relative z-10"><header className="max-w-3xl"><p className="text-sm font-medium text-[var(--accent)]">TradesMate by FullStack Dev KZ</p><h1 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl">Delete your TradesMate account and associated data</h1><p className="mt-4 leading-7 text-[var(--muted)]">Use this page even if TradesMate has been uninstalled. Submit the form to request deletion of the business account and the operational records associated with it.</p></header>
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.62fr]"><GlassCard><DeleteRequestForm /></GlassCard><aside className="space-y-5"><GlassCard><h2 className="text-xl font-semibold">What happens next</h2><ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-[var(--muted)]"><li>We receive your request through the FullStack Dev KZ contact service.</li><li>We may reply to verify ownership of the account.</li><li>Verified requests are normally completed within 30 days.</li><li>We confirm when deletion or anonymisation is complete.</li></ol></GlassCard><GlassCard><h2 className="text-xl font-semibold">Data included</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">The request covers the account, business profile, customers, jobs, team records, quotes, invoices, payments, expenses, uploaded job photos, and push tokens, subject to the limited retention described in the privacy policy.</p></GlassCard><GlassCard><h2 className="text-xl font-semibold">Cancel subscriptions separately</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">Deleting a TradesMate account does not cancel a Google Play subscription or create a refund.</p><a href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10">Manage Google Play subscriptions<ExternalLink size={16} aria-hidden /></a></GlassCard></aside></div>
        <nav aria-label="TradesMate deletion navigation" className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8"><Link href="/work/tradesmate" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"><ArrowLeft size={16} aria-hidden />Back to TradesMate</Link><Link href="/work/tradesmate/privacy" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"><ShieldCheck size={16} aria-hidden />Privacy Policy</Link></nav>
      </div>
    </section></div></main>
  );
}
