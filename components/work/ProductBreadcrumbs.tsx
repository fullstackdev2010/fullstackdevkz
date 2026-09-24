import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export function productBreadcrumbJsonLd(slug: string, productName: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/work/${slug}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
      { "@type": "ListItem", position: 3, name: productName, item: `${SITE_URL}/work/${slug}` },
    ],
  };
}

export default function ProductBreadcrumbs({ productName }: { slug: string; productName: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--muted)]">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:text-[var(--fg)]">Home</Link></li>
        <li aria-hidden><ChevronRight size={14} /></li>
        <li><Link href="/work" className="hover:text-[var(--fg)]">Work</Link></li>
        <li aria-hidden><ChevronRight size={14} /></li>
        <li aria-current="page" className="text-[var(--fg)]">{productName}</li>
      </ol>
    </nav>
  );
}
