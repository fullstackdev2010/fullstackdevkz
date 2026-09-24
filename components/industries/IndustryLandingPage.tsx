import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { GlassCard } from "@/components/ui/GlassCard";
import type { IndustryPageData } from "@/lib/industryPages";
import { SITE_URL } from "@/lib/site";

export default function IndustryLandingPage({ industry }: { industry: IndustryPageData }) {
  const route = `/industries/${industry.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}${route}#webpage`,
        url: `${SITE_URL}${route}`,
        name: industry.title,
        description: industry.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${route}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/industries` },
          { "@type": "ListItem", position: 3, name: industry.navLabel, item: `${SITE_URL}${route}` },
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
            <li><Link href="/industries" className="hover:text-[var(--fg)]">Industries</Link></li>
            <li aria-hidden><ChevronRight size={14} /></li>
            <li aria-current="page" className="text-[var(--fg)]">{industry.navLabel}</li>
          </ol>
        </nav>

        <section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-10 md:p-12">
          <MeshWithPhotoInsets className="pointer-events-none absolute inset-0 z-0 h-full min-h-[760px]" backgroundSrc="/brand/services.webp" viewBox="0 0 1600 900" photos={[]} />
          <div className="absolute inset-0">
            <MeshBackground brightness={0.82} opacity={0.94} seed={`industry-${industry.slug}`} palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]} static />
          </div>
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">{industry.eyebrow}</div>
              <h1 className="mt-3 max-w-5xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">{industry.h1}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">{industry.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/contact?intent=${industry.contactIntent}`} className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25">
                  <MessageSquare size={17} aria-hidden />{industry.ctaLabel}
                </Link>
                <Link href={industry.product.href} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm transition hover:bg-white/10">
                  Explore {industry.product.name}<ArrowRight size={17} aria-hidden />
                </Link>
              </div>
            </div>
            <div className="border-l border-white/15 pl-0 lg:pl-7">
              <h2 className="text-lg font-semibold">Relevant when you are</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {industry.fit.map((item) => (
                  <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-[var(--accent)]" size={18} aria-hidden /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-16 space-y-16">
          {industry.sections.map((section, index) => (
            <section key={section.title} className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr]" aria-labelledby={`industry-section-${index}`}>
              <div>
                <div className="text-sm font-medium text-[var(--accent)]">{section.eyebrow}</div>
                <h2 id={`industry-section-${index}`} className="mt-2 text-2xl font-semibold md:text-3xl">{section.title}</h2>
              </div>
              <div>
                <div className="space-y-5 leading-7 text-[var(--muted)]">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                {section.bullets && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((item) => <li key={item} className="flex gap-3 border-t border-white/15 pt-3 text-sm leading-6 text-[var(--muted)]"><CheckCircle2 className="mt-0.5 shrink-0 text-[var(--accent)]" size={17} aria-hidden />{item}</li>)}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 border-y border-white/15 py-10" aria-labelledby="industry-workflow">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">Workflow opportunity</div>
              <h2 id="industry-workflow" className="mt-2 text-2xl font-semibold md:text-3xl">{industry.workflowTitle}</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">{industry.workflowIntro}</p>
            </div>
            <ol className="space-y-4">
              {industry.workflow.map((step, index) => (
                <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-white/15 pt-4 leading-7 text-[var(--muted)]">
                  <span className="font-semibold text-[var(--accent)]">0{index + 1}</span><span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="industry-architecture">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-[var(--accent)]">Platform shape</div>
            <h2 id="industry-architecture" className="mt-2 text-2xl font-semibold md:text-3xl">{industry.architectureTitle}</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">{industry.architectureIntro}</p>
          </div>
          <ol className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {industry.architecture.map((item, index) => (
              <li key={item} className="relative border-t border-white/20 pt-5">
                <div className="text-sm font-medium text-[var(--accent)]">0{index + 1}</div>
                <div className="mt-2 font-semibold">{item}</div>
                {index < industry.architecture.length - 1 && <ArrowRight className="absolute -right-2 top-7 hidden text-[var(--muted)] lg:block" size={16} aria-hidden />}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 rounded-3xl border glass p-6 sm:p-8 md:p-10" aria-labelledby="industry-product">
          <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">Real product evidence</div>
              <h2 id="industry-product" className="mt-2 text-2xl font-semibold md:text-3xl">{industry.product.name}</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">{industry.product.summary}</p>
              <Link href={industry.product.href} className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-white/10">Explore {industry.product.name}<ArrowRight size={16} aria-hidden /></Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {industry.product.screens.map((screen, index) => (
                <figure key={screen.src} className={`relative overflow-hidden rounded-lg border border-white/15 bg-black/20 ${screen.orientation === "portrait" ? "aspect-[9/16]" : "aspect-[16/10] sm:col-span-2"}`}>
                  <Image src={screen.src} alt={screen.alt} fill sizes={screen.orientation === "portrait" ? "(max-width: 640px) 100vw, 220px" : "(max-width: 640px) 100vw, 460px"} className="object-contain" priority={index === 0} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="industry-paths">
          <div className="max-w-3xl"><h2 id="industry-paths" className="text-2xl font-semibold md:text-3xl">Choose the path that matches the requirement</h2><p className="mt-3 leading-7 text-[var(--muted)]">The existing product and custom-development paths serve different needs. Neither should be hidden behind the other.</p></div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {industry.paths.map((path) => (
              <GlassCard key={path.title} className="h-full"><h3 className="text-xl font-semibold">{path.title}</h3><div className="mt-3 space-y-3 leading-7 text-[var(--muted)]">{path.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><Link href={path.href} className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:underline">{path.label}<ArrowRight size={15} aria-hidden /></Link></GlassCard>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-2" aria-labelledby="industry-connections">
          <div>
            <div className="text-sm font-medium text-[var(--accent)]">Define the product</div>
            <h2 id="industry-connections" className="mt-2 text-2xl font-semibold md:text-3xl">Related software decisions</h2>
            <div className="mt-6 space-y-4">
              {industry.solutions.map((item) => <Link key={item.href} href={item.href} className="group block border-b border-white/15 pb-4"><span className="flex items-center justify-between gap-4 font-semibold">{item.title}<ArrowRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden /></span><span className="mt-1 block text-sm leading-6 text-[var(--muted)]">{item.description}</span></Link>)}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-[var(--accent)]">Deliver the system</div>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Relevant development services</h2>
            <div className="mt-6 space-y-4">
              {industry.services.map((item) => <Link key={item.href} href={item.href} className="group block border-b border-white/15 pb-4"><span className="flex items-center justify-between gap-4 font-semibold">{item.title}<ArrowRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden /></span><span className="mt-1 block text-sm leading-6 text-[var(--muted)]">{item.description}</span></Link>)}
            </div>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="industry-faq">
          <h2 id="industry-faq" className="text-2xl font-semibold md:text-3xl">Questions about this software context</h2>
          <div className="mt-6 divide-y divide-white/15 border-y border-white/15">
            {industry.faqs.map((faq) => (
              <details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold marker:hidden">{faq.question}<ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden /></summary><p className="mt-3 max-w-4xl leading-7 text-[var(--muted)]">{faq.answer}</p></details>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div><div className="text-sm font-medium text-[var(--accent)]">Bring the workflow, not a feature wishlist</div><h2 className="mt-2 text-2xl font-semibold md:text-3xl">{industry.ctaTitle}</h2><p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">{industry.ctaText}</p></div>
            <Link href={`/contact?intent=${industry.contactIntent}`} className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"><MessageSquare size={17} aria-hidden />{industry.ctaLabel}</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
