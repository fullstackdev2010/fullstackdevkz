// components/work/CaseCard.tsx
import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";

type Props = {
  href: string;
  title: string;
  summary: string;
  tags: string[];
  thumb: string;
  externalHref?: string;
  externalLabel?: string;
};

export default function CaseCard({
  href,
  title,
  summary,
  tags,
  thumb,
  externalHref,
  externalLabel,
}: Props) {
  return (
    <GlassCard className="group h-full overflow-hidden transition-transform hover:-translate-y-0.5      focus-within:ring-2 focus-within:ring-white/30">
         <Link href={href} className="block mb-4 relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.06]">
          {thumb ? (
            <Image
              src={thumb}
              alt={`${title} preview`}
              fill
              sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
              priority={false}
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-sm text-white/60">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">
                No preview
              </div>
            </div>
          )}
        </Link>
        {/* Text */}
        <h3 className="text-lg font-medium">
          <Link href={href} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{summary}</p>

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

        {externalHref && (
          <a
            href={externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 px-3 py-1.5 text-xs hover:bg-white/20 transition"
          >
            📲 {externalLabel ?? "Open"}
          </a>
        )}

      </GlassCard>
  );
}
