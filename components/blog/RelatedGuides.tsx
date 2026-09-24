import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogLink } from "@/lib/blogTypes";

export default function RelatedGuides({ links, className = "mt-14" }: { links: BlogLink[]; className?: string }) {
  if (!links.length) return null;
  return (
    <section className={`${className} border-y border-white/15 py-8`} aria-labelledby={`planning-resources-${links[0].href.replace(/\W/g, "")}`}>
      <div className="grid gap-7 lg:grid-cols-[0.68fr_1.32fr]">
        <div><div className="text-sm font-medium text-[var(--accent)]">Useful before scoping</div><h2 id={`planning-resources-${links[0].href.replace(/\W/g, "")}`} className="mt-2 text-2xl font-semibold md:text-3xl">Planning resources</h2></div>
        <div className="space-y-4">{links.map((link) => <Link key={link.href} href={link.href} className="group block border-b border-white/15 pb-4"><span className="flex items-center justify-between gap-4 font-semibold">{link.label}<ArrowRight size={16} className="shrink-0 transition-transform group-hover:translate-x-1" aria-hidden /></span>{link.description && <span className="mt-1 block text-sm leading-6 text-[var(--muted)]">{link.description}</span>}</Link>)}</div>
      </div>
    </section>
  );
}
