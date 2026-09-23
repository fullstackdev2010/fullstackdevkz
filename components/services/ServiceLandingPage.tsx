import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import type { ServicePageData } from "@/lib/servicePages";
import { SITE_URL } from "@/lib/site";

export default function ServiceLandingPage({ service }: { service: ServicePageData }) {
  const route = `/services/${service.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}${route}#service`,
        name: service.h1,
        description: service.description,
        url: `${SITE_URL}${route}`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
        serviceType: service.navLabel,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${route}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: service.navLabel, item: `${SITE_URL}${route}` },
        ],
      },
    ],
  };

  return (
    <main className="relative isolate">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--muted)]">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-[var(--fg)]">Home</Link></li>
            <li aria-hidden><ChevronRight size={14} /></li>
            <li><Link href="/services" className="hover:text-[var(--fg)]">Services</Link></li>
            <li aria-hidden><ChevronRight size={14} /></li>
            <li aria-current="page" className="text-[var(--fg)]">{service.navLabel}</li>
          </ol>
        </nav>

        <section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-10 md:p-12">
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[720px]"
            backgroundSrc="/brand/services.webp"
            viewBox="0 0 1600 900"
            photos={[]}
          />
          <div className="absolute inset-0">
            <MeshBackground
              brightness={0.8}
              opacity={0.95}
              palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]}
            />
          </div>
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">{service.eyebrow}</div>
              <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                {service.h1}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">{service.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/contact?intent=${service.contactIntent}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"
                >
                  <MessageSquare size={17} aria-hidden />
                  {service.ctaLabel}
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm transition hover:bg-white/10"
                >
                  View relevant work
                  <ArrowRight size={17} aria-hidden />
                </Link>
              </div>
            </div>
            <div className="border-l border-white/15 pl-0 lg:pl-7">
              <h2 className="text-lg font-semibold">A strong fit for</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--accent)]" size={18} aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]" aria-labelledby="service-problem">
          <div>
            <div className="text-sm font-medium text-[var(--accent)]">The product challenge</div>
            <h2 id="service-problem" className="mt-2 text-2xl font-semibold md:text-3xl">{service.problemTitle}</h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-[var(--muted)]">
            {service.problemCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="service-capabilities">
          <div className="max-w-3xl">
            <h2 id="service-capabilities" className="text-2xl font-semibold md:text-3xl">{service.capabilitiesTitle}</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">{service.capabilitiesIntro}</p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {service.capabilities.map((capability) => (
              <GlassCard key={capability.title} className="h-full">
                <h3 className="text-xl font-semibold">{capability.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{capability.body}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="service-process">
          <div className="max-w-3xl">
            <h2 id="service-process" className="text-2xl font-semibold md:text-3xl">{service.processTitle}</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">{service.processIntro}</p>
          </div>
          <ol className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step, index) => (
              <li key={step.title} className="border-t border-white/20 pt-5">
                <div className="text-sm font-medium text-[var(--accent)]">0{index + 1}</div>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" aria-labelledby="service-guidance">
          <div>
            <h2 id="service-guidance" className="text-2xl font-semibold md:text-3xl">{service.guidanceTitle}</h2>
            <div className="mt-4 space-y-4 leading-7 text-[var(--muted)]">
              {service.guidanceCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {service.guidanceColumns.map((column) => (
              <GlassCard key={column.title}>
                <h3 className="text-lg font-semibold">{column.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--muted)]">
                  {column.items.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="service-work">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-[var(--accent)]">Relevant delivery</div>
            <h2 id="service-work" className="mt-2 text-2xl font-semibold md:text-3xl">Related products and case studies</h2>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {service.work.map((item) => (
              <Link key={item.href} href={item.href} className="group block rounded-2xl">
                <GlassCard className="h-full transition-transform duration-200 group-hover:-translate-y-1">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                    View this project <ArrowRight size={15} aria-hidden />
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.8fr]" aria-labelledby="service-faq">
          <div>
            <h2 id="service-faq" className="text-2xl font-semibold md:text-3xl">Questions about {service.navLabel.toLowerCase()}</h2>
            <div className="mt-6 divide-y divide-white/15 border-y border-white/15">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 font-semibold marker:hidden">{faq.question}</summary>
                  <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Related services</h2>
            <div className="mt-5 space-y-4">
              {service.related.map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`} className="group block border-b border-white/15 pb-4">
                  <span className="flex items-center justify-between gap-4 font-semibold">
                    {item.title}<ArrowRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-[var(--muted)]">{item.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">Project context first</div>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{service.ctaTitle}</h2>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">{service.ctaText}</p>
            </div>
            <Link
              href={`/contact?intent=${service.contactIntent}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"
            >
              <MessageSquare size={17} aria-hidden />
              {service.ctaLabel}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
