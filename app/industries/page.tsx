import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, MessageSquare } from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { GlassCard } from "@/components/ui/GlassCard";
import { buildPageMetadata, SITE_URL } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Custom Software for Real Business Workflows",
  description: "Explore software development experience backed by real products for trades and service businesses, pubs and entertainment venues, and clubs and member organizations.",
  path: "/industries",
});

const industries = [
  {
    href: "/industries/trades-service-businesses",
    title: "Trades & Service Businesses",
    evidence: "TradesMate",
    description: "Connect customers, jobs, schedules, quotes, invoices, costs, payments, and mobile work around one operational record.",
    image: "/demos/preview/tradesmate.png",
    alt: "TradesMate business software for trades and service workflows",
  },
  {
    href: "/industries/pubs-entertainment-venues",
    title: "Pubs & Entertainment Venues",
    evidence: "PubPlay",
    description: "Coordinate venue staff, QR player access, fixtures, scoring, live leaderboards, TV displays, and recurring event archives.",
    image: "/demos/preview/pubplay.jpg",
    alt: "PubPlay multi-screen games-night system for pubs",
  },
  {
    href: "/industries/clubs-member-organizations",
    title: "Clubs & Member Organizations",
    evidence: "Come Together",
    description: "Join public discovery and booking with capacity, waitlists, organizer tools, attendance, notifications, and a mobile companion.",
    image: "/demos/preview/come-together.png",
    alt: "Come Together platform for clubs, events, bookings, and organizers",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/industries#webpage`,
      url: `${SITE_URL}/industries`,
      name: "Custom Software for Real Business Workflows",
      description: "Software development experience for operational workflows supported by real Fullstack Dev KZ products.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/industries#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/industries` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <main className="relative isolate">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--muted)]">
          <ol className="flex items-center gap-2"><li><Link href="/" className="hover:text-[var(--fg)]">Home</Link></li><li aria-hidden><ChevronRight size={14} /></li><li aria-current="page" className="text-[var(--fg)]">Industries</li></ol>
        </nav>

        <section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-10 md:p-12">
          <MeshWithPhotoInsets className="pointer-events-none absolute inset-0 z-0 h-full min-h-[620px]" backgroundSrc="/brand/services.webp" viewBox="0 0 1600 900" photos={[]} />
          <div className="absolute inset-0"><MeshBackground brightness={0.82} opacity={0.94} seed="industries-hub" palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]} static /></div>
          <div className="relative z-10 max-w-4xl">
            <div className="text-sm font-medium text-[var(--accent)]">Evidence-backed industry experience</div>
            <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">Software for Businesses, Venues &amp; Member Organizations</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">Fullstack Dev KZ builds around real operational workflows rather than generic industry templates. These three areas are supported by working products that connect mobile, web, backend, administration, documents, bookings, events, and live interfaces in different ways.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"><MessageSquare size={17} aria-hidden />Discuss an operational workflow</Link><Link href="/work" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm transition hover:bg-white/10">View all product evidence<ArrowRight size={17} aria-hidden /></Link></div>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="supported-industries">
          <div className="max-w-3xl"><div className="text-sm font-medium text-[var(--accent)]">Three supported contexts</div><h2 id="supported-industries" className="mt-2 text-2xl font-semibold md:text-3xl">Start with the work people need to complete</h2><p className="mt-3 leading-7 text-[var(--muted)]">Each page explains operational problems, appropriate product surfaces, shared-platform responsibilities, and the real software that supports the experience.</p></div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link key={industry.href} href={industry.href} className="group block rounded-2xl">
                <GlassCard className="h-full overflow-hidden p-0 transition-transform duration-200 group-hover:-translate-y-1">
                  <div className="relative aspect-[16/9] border-b border-white/10 bg-black/20"><Image src={industry.image} alt={industry.alt} fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover" /></div>
                  <div className="p-6"><div className="text-sm font-medium text-[var(--accent)]">Evidence: {industry.evidence}</div><h2 className="mt-2 text-xl font-semibold">{industry.title}</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{industry.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">Explore the industry workflow<ArrowRight size={15} aria-hidden /></span></div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 border-y border-white/15 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div><div className="text-sm font-medium text-[var(--accent)]">01</div><h2 className="mt-2 text-xl font-semibold">Industry context</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">Understand the people, records, environments, and handoffs that shape the workflow.</p></div>
            <div><div className="text-sm font-medium text-[var(--accent)]">02</div><h2 className="mt-2 text-xl font-semibold">Real product evidence</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">Inspect software that already demonstrates related mobile, web, and backend responsibilities.</p></div>
            <div><div className="text-sm font-medium text-[var(--accent)]">03</div><h2 className="mt-2 text-xl font-semibold">Appropriate delivery path</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">Move to the relevant product, buyer decision guide, development service, or project discussion.</p></div>
          </div>
        </section>
      </div>
    </main>
  );
}
