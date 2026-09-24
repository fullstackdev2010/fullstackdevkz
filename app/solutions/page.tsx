import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  ChevronRight,
  CircleDollarSign,
  DatabaseZap,
  FileSpreadsheet,
  RefreshCw,
  Rocket,
  Smartphone,
} from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { GlassCard } from "@/components/ui/GlassCard";
import { buildPageMetadata, SITE_URL } from "@/lib/site";
import { solutionPages } from "@/lib/solutionPages";

export const metadata = buildPageMetadata({
  title: "Software Solutions for Real Business Problems",
  description: "Explore practical decision guides for business apps, spreadsheet replacement, mobile companions, MVPs, software modernization, backend integration, and project cost.",
  path: "/solutions",
});

const icons = {
  "build-an-app-for-my-business": Blocks,
  "replace-spreadsheets-with-custom-software": FileSpreadsheet,
  "mobile-app-for-existing-web-platform": Smartphone,
  "build-an-mvp": Rocket,
  "modernize-existing-software": RefreshCw,
  "connect-mobile-app-to-existing-backend": DatabaseZap,
  "custom-software-cost": CircleDollarSign,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/solutions#webpage`,
      url: `${SITE_URL}/solutions`,
      name: "Software Solutions for Real Business Problems",
      description: "Decision resources for businesses planning custom mobile, web, SaaS, backend, MVP, and modernization projects.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/solutions#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
      ],
    },
  ],
};

export default function SolutionsPage() {
  return (
    <main className="relative isolate">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--muted)]">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[var(--fg)]">Home</Link></li>
            <li aria-hidden><ChevronRight size={14} /></li>
            <li aria-current="page" className="text-[var(--fg)]">Solutions</li>
          </ol>
        </nav>

        <section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-10 md:p-12">
          <MeshWithPhotoInsets className="pointer-events-none absolute inset-0 z-0 h-full min-h-[680px]" backgroundSrc="/brand/services.webp" viewBox="0 0 1600 900" photos={[]} />
          <div className="absolute inset-0"><MeshBackground brightness={0.82} opacity={0.94} seed="solutions-hub" palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]} static /></div>
          <div className="relative z-10 max-w-4xl">
            <div className="text-sm font-medium text-[var(--accent)]">Start with the business problem</div>
            <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">Software solutions for real business problems</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              You may know that a workflow needs improving before you know whether the right answer is a mobile app, web application, SaaS platform, custom business system, backend extension, MVP, or modernization project. These decision resources help you choose a sensible direction before development begins.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25">Discuss the business problem<ArrowRight size={17} aria-hidden /></Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm transition hover:bg-white/10">Browse development services<ArrowRight size={17} aria-hidden /></Link>
            </div>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="choose-situation">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-[var(--accent)]">Choose your situation</div>
            <h2 id="choose-situation" className="mt-2 text-2xl font-semibold md:text-3xl">Decision guidance before a service brief</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">Each path explains alternatives, technical implications, scope drivers, relevant real products, and what to prepare for a useful project conversation.</p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {solutionPages.map((solution) => {
              const Icon = icons[solution.slug as keyof typeof icons];
              return (
                <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="group block rounded-2xl">
                  <GlassCard className="h-full transition-transform duration-200 group-hover:-translate-y-1">
                    <Icon size={25} className="text-[var(--accent)]" aria-hidden />
                    <h3 className="mt-4 text-xl font-semibold">{solution.navLabel}</h3>
                    <p className="mt-3 leading-7 text-[var(--muted)]">{solution.hubDescription}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">Explore this decision<ArrowRight size={15} aria-hidden /></span>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-16 grid gap-8 border-y border-white/15 py-9 lg:grid-cols-3" aria-labelledby="how-paths-connect">
          <div>
            <div className="text-sm font-medium text-[var(--accent)]">1 · Solution</div>
            <h2 id="how-paths-connect" className="mt-2 text-xl font-semibold">Decide what approach fits</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Understand the workflow, alternatives, architecture questions, and scope drivers behind the business problem.</p>
          </div>
          <div>
            <div className="text-sm font-medium text-[var(--accent)]">2 · Evidence</div>
            <h2 className="mt-2 text-xl font-semibold">Inspect related real software</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">See how comparable workflow, mobile, web, backend, and multi-interface decisions appear in shipped products.</p>
          </div>
          <div>
            <div className="text-sm font-medium text-[var(--accent)]">3 · Service</div>
            <h2 className="mt-2 text-xl font-semibold">Choose the delivery capability</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Move into the appropriate mobile, web, SaaS, backend, MVP, or business-software service with better context.</p>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">Not sure which path fits?</div>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Describe the users, workflow, and result you need</h2>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">You do not need to choose the technical category alone. We can determine whether the problem calls for a focused app, connected platform, backend work, integration, modernization, or a simpler change.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25">Discuss your project<ArrowRight size={17} aria-hidden /></Link>
          </div>
        </section>
      </div>
    </main>
  );
}
