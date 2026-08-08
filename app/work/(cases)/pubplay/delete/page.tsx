import type { Metadata } from "next";
import Link from "next/link";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { GlassCard } from "@/components/ui/GlassCard";
import DeleteRequestForm from "./DeleteRequestForm";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Delete PubPlay Account and Data",
  description:
    "Request deletion of a PubPlay Host venue-owner account and associated data, or request deletion of player participation data.",
  alternates: { canonical: "/work/pubplay/delete" },
};

export default function Page() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-12">
        <section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[900px]"
            backgroundSrc="/brand/main.webp"
            viewBox="0 0 1600 900"
            photos={[]}
          />
          <div className="absolute inset-0">
            <MeshBackground
              brightness={0.72}
              opacity={0.92}
              seed="pubplay-delete"
              palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]}
              static
            />
          </div>

          <div className="relative z-10">
            <header className="max-w-3xl">
              <p className="text-sm font-medium text-[var(--accent)]">
                PubPlay Host by Fullstack Dev KZ
              </p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl">
                Delete your PubPlay account and associated data
              </h1>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                Use this page even if PubPlay has been uninstalled. Submit the form
                below to request deletion of a venue-owner account and its associated
                data, or to request deletion of identifiable player participation data.
              </p>
            </header>

            <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.62fr]">
              <GlassCard>
                <DeleteRequestForm />
              </GlassCard>

              <aside className="space-y-5">
                <GlassCard>
                  <h2 className="text-xl font-semibold">What happens next</h2>
                  <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-[var(--muted)]">
                    <li>We receive the request at the PubPlay support email.</li>
                    <li>We may reply to verify account or event ownership.</li>
                    <li>Verified requests are normally completed within 30 days.</li>
                    <li>We confirm when deletion or anonymization is complete.</li>
                  </ol>
                </GlassCard>

                <GlassCard>
                  <h2 className="text-xl font-semibold">Data included</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    An owner-account request covers the account, venue, events,
                    player records, fixtures, scores, standings, and archives linked
                    to that account, subject to the limited retention described in
                    the privacy policy.
                  </p>
                </GlassCard>

                <GlassCard>
                  <h2 className="text-xl font-semibold">
                    Cancel subscriptions separately
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    Deleting the PubPlay account does not cancel a Google Play
                    subscription or create a refund.
                  </p>
                  <a
                    href="https://play.google.com/store/account/subscriptions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
                  >
                    Manage Google Play subscriptions
                    <ExternalLink size={16} aria-hidden />
                  </a>
                </GlassCard>
              </aside>
            </div>

            <nav
              aria-label="PubPlay deletion navigation"
              className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8"
            >
              <Link
                href="/work/pubplay/privacy"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
              >
                <ShieldCheck size={16} aria-hidden />
                Privacy Policy
              </Link>
              <Link
                href="/work/pubplay"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
              >
                <ArrowLeft size={16} aria-hidden />
                Back to PubPlay
              </Link>
            </nav>
          </div>
        </section>
      </div>
    </main>
  );
}
