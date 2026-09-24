// components/work/CaseCard.tsx
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink } from "lucide-react";

type Props = {
  href: string;
  title: string;
  summary: string;
  classification: string;
  platform: string;
  strongestCapability: string;
  tags: string[];
  thumb: string;
  serviceHref: string;
  serviceLabel: string;
  externalHref?: string;
  externalLabel?: string;
};

export default function CaseCard({
  href,
  title,
  summary,
  classification,
  platform,
  strongestCapability,
  tags,
  thumb,
  serviceHref,
  serviceLabel,
  externalHref,
  externalLabel,
}: Props) {
  return (
    <GlassCard className="group h-full overflow-hidden transition-transform hover:-translate-y-0.5      focus-within:ring-2 focus-within:ring-white/30">
         <Link href={href} className="relative mb-4 block aspect-[2/1] w-full overflow-hidden rounded-xl border border-white/10 bg-black/15">
          {thumb ? (
            <>
              <Image
                src={thumb}
                alt=""
                fill
                sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                className="scale-110 object-cover opacity-70 blur-lg"
                aria-hidden
              />
              <div className="absolute inset-0 bg-black/10" aria-hidden />
              <Image
                src={thumb}
                alt={`${title} preview`}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                className="object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.01]"
                priority={false}
              />
            </>
          ) : (
            <div className="absolute inset-0 grid place-items-center text-sm text-white/60">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">
                No preview
              </div>
            </div>
          )}
        </Link>
        {/* Text */}
        <div className="text-xs font-medium text-[var(--accent)]">{classification}</div>
        <h3 className="mt-2 text-lg font-medium">
          <Link href={href} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{summary}</p>
        <dl className="mt-4 grid gap-2 border-t border-white/10 pt-4 text-xs">
          <div><dt className="text-[var(--muted)]">Platform</dt><dd className="mt-0.5 font-medium">{platform}</dd></div>
          <div><dt className="text-[var(--muted)]">Demonstrates</dt><dd className="mt-0.5 font-medium">{strongestCapability}</dd></div>
        </dl>

        {/* Tags */}
        {tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/15 bg-white/[0.03] px-2 py-0.5 text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <span className="sr-only">Open case: {title}</span>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={serviceHref}
            className="inline-flex items-center rounded-lg border border-white/15 px-3 py-1.5 text-xs transition hover:bg-white/10"
          >
            {serviceLabel}
          </Link>
        {externalHref && (
          <a
            href={externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 px-3 py-1.5 text-xs hover:bg-white/20 transition"
          >
            <ExternalLink size={14} aria-hidden />
            {externalLabel ?? "Open"}
          </a>
        )}
        </div>

      </GlassCard>
  );
}
