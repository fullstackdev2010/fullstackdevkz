import type { ReactNode } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

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
  appName: string;
  appCategory: string;
  description: string;
  searchIntents: readonly string[];
  audience: readonly string[];
  useCases: readonly string[];
  benefits: readonly string[];
  faqs: readonly FAQ[];
  relatedApps: readonly RelatedApp[];
  children?: ReactNode;
};

export default function AppSeoLandingSections({
  appName,
  appCategory,
  description,
  searchIntents,
  audience,
  useCases,
  benefits,
  faqs,
  relatedApps,
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
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
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

      <div className="grid gap-3 md:grid-cols-2">
        <GlassCard>
          <h2 className="text-2xl font-semibold">Best for</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
            {audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard>
          <h2 className="text-2xl font-semibold">Search intent</h2>
          <p className="mt-4 text-[var(--muted)]">
            This page is built around the real phrases people use when they
            need this kind of Android app.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {searchIntents.map((intent) => (
              <span
                key={intent}
                className="rounded-md border border-white/15 bg-white/[0.03] px-2 py-1 text-xs"
              >
                {intent}
              </span>
            ))}
          </div>
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
    </section>
  );
}
