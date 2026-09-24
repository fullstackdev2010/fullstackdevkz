import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { GlassCard } from "@/components/ui/GlassCard";
import type { SolutionPageData } from "@/lib/solutionPages";
import { SITE_URL } from "@/lib/site";
import RelatedGuides from "@/components/blog/RelatedGuides";
import { solutionGuideLinks } from "@/lib/guideLinks";
import { solutionIndustryLinks } from "@/lib/industryPages";

export default function SolutionLandingPage({ solution }: { solution: SolutionPageData }) {
  const route = `/solutions/${solution.slug}`;
  const industries = solutionIndustryLinks[solution.slug] ?? [];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}${route}#webpage`,
        url: `${SITE_URL}${route}`,
        name: solution.title,
        description: solution.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${route}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
          { "@type": "ListItem", position: 3, name: solution.navLabel, item: `${SITE_URL}${route}` },
        ],
      },
    ],
  };

  return (
    <main className="relative isolate">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--muted)]">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[var(--fg)]">Home</Link></li>
            <li aria-hidden><ChevronRight size={14} /></li>
            <li><Link href="/solutions" className="hover:text-[var(--fg)]">Solutions</Link></li>
            <li aria-hidden><ChevronRight size={14} /></li>
            <li aria-current="page" className="text-[var(--fg)]">{solution.navLabel}</li>
          </ol>
        </nav>

        <section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-10 md:p-12">
          <MeshWithPhotoInsets className="pointer-events-none absolute inset-0 z-0 h-full min-h-[720px]" backgroundSrc="/brand/services.webp" viewBox="0 0 1600 900" photos={[]} />
          <div className="absolute inset-0">
            <MeshBackground brightness={0.82} opacity={0.94} seed={`solution-${solution.slug}`} palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]} static />
          </div>
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">{solution.eyebrow}</div>
              <h1 className="mt-3 max-w-5xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">{solution.h1}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">{solution.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/contact?intent=${solution.contactIntent}`} className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25">
                  <MessageSquare size={17} aria-hidden />{solution.ctaLabel}
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm transition hover:bg-white/10">
                  Explore development services<ArrowRight size={17} aria-hidden />
                </Link>
              </div>
            </div>
            <div className="border-l border-white/15 pl-0 lg:pl-7">
              <h2 className="text-lg font-semibold">Questions to answer first</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {solution.questions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--accent)]" size={18} aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="solution-framework">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-[var(--accent)]">Decision framework</div>
            <h2 id="solution-framework" className="mt-2 text-2xl font-semibold md:text-3xl">{solution.frameworkTitle}</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">{solution.frameworkIntro}</p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {solution.framework.map((item) => (
              <GlassCard key={item.title} className="h-full">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{item.body}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <div className="mt-16 space-y-14">
          {solution.sections.map((section, index) => (
            <section key={section.title} className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr]" aria-labelledby={`solution-detail-${index}`}>
              <div>
                <div className="text-sm font-medium text-[var(--accent)]">0{index + 1}</div>
                <h2 id={`solution-detail-${index}`} className="mt-2 text-2xl font-semibold md:text-3xl">{section.title}</h2>
              </div>
              <div>
                <div className="space-y-5 leading-7 text-[var(--muted)]">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 border-t border-white/15 pt-3 text-sm leading-6 text-[var(--muted)]">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--accent)]" size={17} aria-hidden />{item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 border-y border-white/15 py-9" aria-labelledby="solution-prepare">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">Before development</div>
              <h2 id="solution-prepare" className="mt-2 text-2xl font-semibold md:text-3xl">{solution.prepareTitle}</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">{solution.prepareIntro}</p>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {solution.prepare.map((item, index) => (
                <li key={item} className="grid grid-cols-[2rem_1fr] gap-3 border-t border-white/15 pt-3 text-sm leading-6 text-[var(--muted)]">
                  <span className="font-semibold text-[var(--accent)]">{index + 1}</span><span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="solution-work">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-[var(--accent)]">Real product evidence</div>
            <h2 id="solution-work" className="mt-2 text-2xl font-semibold md:text-3xl">Relevant software we&apos;ve built</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">These products demonstrate related workflows and architecture. Each link stays inside the Fullstack Dev KZ case-study path.</p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {solution.work.map((item) => (
              <Link key={item.href} href={item.href} className="group block rounded-2xl">
                <GlassCard className="h-full transition-transform duration-200 group-hover:-translate-y-1">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">View the product case study<ArrowRight size={15} aria-hidden /></span>
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.82fr]" aria-labelledby="solution-faq">
          <div>
            <h2 id="solution-faq" className="text-2xl font-semibold md:text-3xl">Questions buyers commonly ask</h2>
            <div className="mt-6 divide-y divide-white/15 border-y border-white/15">
              {solution.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 font-semibold marker:hidden">{faq.question}</summary>
                  <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Related development services</h2>
            <div className="mt-5 space-y-4">
              {solution.services.map((item) => (
                <Link key={item.href} href={item.href} className="group block border-b border-white/15 pb-4">
                  <span className="flex items-center justify-between gap-4 font-semibold">{item.title}<ArrowRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden /></span>
                  <span className="mt-1 block text-sm leading-6 text-[var(--muted)]">{item.description}</span>
                </Link>
              ))}
            </div>
            {solution.article && (
              <div className="mt-8 border-t border-white/15 pt-5">
                <div className="text-sm font-medium text-[var(--accent)]">Related product insight</div>
                <Link href={solution.article.href} className="group mt-2 block">
                  <span className="flex items-center justify-between gap-4 font-semibold">{solution.article.title}<ArrowRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden /></span>
                  <span className="mt-1 block text-sm leading-6 text-[var(--muted)]">{solution.article.description}</span>
                </Link>
              </div>
            )}
          </div>
        </section>

        {industries.length > 0 && (
          <section className="mt-14 border-y border-white/15 py-8" aria-labelledby="solution-industries">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div><div className="text-sm font-medium text-[var(--accent)]">Concrete workflow examples</div><h2 id="solution-industries" className="mt-2 text-2xl font-semibold md:text-3xl">See the decision in an industry context</h2></div>
              <div className="space-y-4">
                {industries.map((item) => <Link key={item.href} href={item.href} className="group block border-b border-white/15 pb-4"><span className="flex items-center justify-between gap-4 font-semibold">{item.title}<ArrowRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden /></span><span className="mt-1 block text-sm leading-6 text-[var(--muted)]">{item.description}</span></Link>)}
              </div>
            </div>
          </section>
        )}

        <RelatedGuides links={solutionGuideLinks[solution.slug] ?? []} />

        <section className="mt-14 rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">A practical next step</div>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{solution.ctaTitle}</h2>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">{solution.ctaText}</p>
            </div>
            <Link href={`/contact?intent=${solution.contactIntent}`} className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25">
              <MessageSquare size={17} aria-hidden />{solution.ctaLabel}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
