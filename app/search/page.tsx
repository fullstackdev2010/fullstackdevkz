import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ChevronRight } from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import SearchClient from "@/components/search/SearchClient";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { searchDocuments } from "@/lib/searchIndex";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Search",
    description: "Search FullStack Dev KZ services, products, case studies, industries, software guides, and company information.",
    path: "/search",
  }),
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function SearchPage() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--muted)]">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-[var(--fg)]">Home</Link></li>
            <li aria-hidden><ChevronRight size={14} /></li>
            <li aria-current="page" className="text-[var(--fg)]">Search</li>
          </ol>
        </nav>

        <header className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-10 md:p-12">
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[420px]"
            backgroundSrc="/brand/main.webp"
            viewBox="0 0 1600 900"
            photos={[]}
          />
          <div className="absolute inset-0"><MeshBackground brightness={0.8} opacity={0.95} seed="site-search" palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]} static /></div>
          <div className="relative z-10">
            <div className="max-w-3xl">
              <div className="text-sm font-medium text-[var(--accent)]">Content discovery</div>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Find the right expertise, product, or guide</h1>
              <p className="mt-3 leading-7 text-[var(--muted)]">Search the FullStack Dev KZ service, product, industry, use-case, and software guidance library.</p>
            </div>
          </div>
        </header>

        <section className="mt-6 rounded-2xl border glass p-5 sm:p-8 md:p-10" aria-label="Site search">
          <Suspense fallback={<div className="h-14 rounded-lg border border-white/20 bg-black/20" aria-label="Loading search" />}>
            <SearchClient documents={searchDocuments} />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
