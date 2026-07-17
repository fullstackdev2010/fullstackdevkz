import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { GlassCard } from "@/components/ui/GlassCard";
import { QualityBadge } from "@/components/ui/QualityBadge";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner campaigns and regional product promotion pages for Fullstack Dev KZ products and systems.",
  alternates: { canonical: "/partners" },
};

const partnerCampaigns = [
  {
    href: "/partners/samuel-cascadia",
    partner: "Samuel Cascadia",
    region: "United Kingdom",
    product: "Pub Games Night System",
    description:
      "A pub-owner campaign page for running darts, pool, bingo, and tournament nights with a tablet, QR joining, and live leaderboards.",
    image: "/partners/samuel-cascadia.svg",
  },
];

const partnerBenefits = [
  "Dedicated campaign pages",
  "Clear product positioning",
  "Referral-friendly contact links",
  "Room for regional promotion",
];

export default function Page() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12">
        <section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[720px]"
            backgroundSrc="/brand/main.webp"
            viewBox="0 0 1600 900"
            photos={[]}
          />
          <div className="absolute inset-0">
            <MeshBackground
              brightness={0.8}
              opacity={0.95}
              seed="partners-hub"
              palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]}
              static
            />
          </div>

          <div className="relative z-10 grid min-w-0 items-start gap-10 md:grid-cols-[1fr_0.85fr]">
            <div>
              <div className="flex items-start gap-4">
                <QualityBadge size="md" className="mt-1 hidden sm:block" />
                <div>
                  <div className="text-sm font-medium text-[var(--accent)]">
                    Partner campaigns
                  </div>
                  <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                    Products promoted with trusted regional partners.
                  </h1>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">
                This hub collects partner-led campaign pages for products and systems
                built by Fullstack Dev KZ. Each page is shaped for a specific market,
                audience, and offer.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#campaigns"
                  className="inline-flex rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"
                >
                  View partner pages
                </Link>
                <Link
                  href="/contact?topic=partner"
                  className="inline-flex rounded-xl border border-white/20 px-5 py-3 text-sm transition hover:bg-white/10"
                >
                  Discuss partnership
                </Link>
              </div>
            </div>

            <GlassCard>
              <div className="text-sm font-medium text-[var(--accent)]">Why a partner page?</div>
              <h2 className="mt-2 text-2xl font-semibold">Cleaner traffic, clearer pitch.</h2>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                A dedicated partner page keeps a promotion focused. It gives each
                partner a URL to share, lets the product speak to one audience, and
                keeps the main product pages clean for broader search traffic.
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                {partnerBenefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </section>

        <section id="campaigns" className="mt-14">
          <div className="mb-6">
            <div className="text-sm font-medium text-[var(--accent)]">Active campaign</div>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Partner pages</h2>
            <p className="mt-3 max-w-3xl text-[var(--muted)]">
              Current partner-led product pages. More campaigns can be added here as
              regional promoters, affiliates, or sales partners come online.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {partnerCampaigns.map((campaign) => (
              <Link
                key={campaign.href}
                href={campaign.href}
                className="group block rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <GlassCard className="h-full overflow-hidden p-0 transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <div className="grid h-full gap-0 sm:grid-cols-[180px_1fr]">
                    <div className="relative min-h-[220px] overflow-hidden bg-black/20">
                      <Image
                        src={campaign.image}
                        alt={`${campaign.partner} partner page artwork`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="text-sm font-medium text-[var(--accent)]">
                        {campaign.region}
                      </div>
                      <h3 className="mt-2 text-2xl font-semibold">{campaign.partner}</h3>
                      <div className="mt-1 text-sm font-medium">{campaign.product}</div>
                      <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                        {campaign.description}
                      </p>
                      <div className="mt-5 inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm transition group-hover:bg-white/10">
                        Open campaign page
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
