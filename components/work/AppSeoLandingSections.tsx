import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import ProductDevelopmentBridge, { type ServiceLink } from "@/components/work/ProductDevelopmentBridge";
import { productBreadcrumbJsonLd } from "@/components/work/ProductBreadcrumbs";
import { SITE_URL } from "@/lib/site";

type RelatedApp = {
  href: string;
  title: string;
  description: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  slug: string;
  appName: string;
  appCategory: string;
  description: string;
  searchIntents: readonly string[];
  audience: readonly string[];
  useCases: readonly string[];
  benefits: readonly string[];
  faqs: readonly FAQ[];
  relatedApps: readonly RelatedApp[];
  demonstrates: string;
  serviceLinks: readonly ServiceLink[];
  contactIntent: string;
  articleHref?: string;
  children?: ReactNode;
};

export default function AppSeoLandingSections({
  slug,
  appName,
  appCategory,
  description,
  audience,
  useCases,
  benefits,
  faqs,
  relatedApps,
  demonstrates,
  serviceLinks,
  contactIntent,
  articleHref,
  children,
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: appName,
        applicationCategory: appCategory,
        operatingSystem: "Android",
        description,
        url: `${SITE_URL}/work/${slug}`,
      },
      productBreadcrumbJsonLd(slug, appName),
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <section className="mt-14 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div>
        <GlassCard>
          <h2 className="text-2xl font-semibold">Best for</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
            {audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <GlassCard>
          <h2 className="text-2xl font-semibold">Use cases</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard>
          <h2 className="text-2xl font-semibold">Why it works</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>
      </div>

      {children}

      <GlassCard>
        <h2 className="text-2xl font-semibold">Questions people ask</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="text-2xl font-semibold">More simple Android apps</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {relatedApps.map((app) => (
            <Link
              key={app.href}
              href={app.href}
              className="rounded-xl border border-white/15 bg-white/[0.03] p-4 transition hover:bg-white/[0.07]"
            >
              <h3 className="font-semibold">{app.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{app.description}</p>
            </Link>
          ))}
        </div>
      </GlassCard>

      {articleHref ? (
        <Link href={articleHref} className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
          Read the product introduction <ArrowRight size={15} aria-hidden />
        </Link>
      ) : null}

      <ProductDevelopmentBridge
        eyebrow="What this product demonstrates"
        title={`Building an application with challenges similar to ${appName}?`}
        description={demonstrates}
        services={[...serviceLinks]}
        contactIntent={contactIntent}
      />
    </section>
  );
}
