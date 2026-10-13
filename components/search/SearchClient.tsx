"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { MAX_SEARCH_QUERY_LENGTH, normalizeSearchQuery, rankSearchDocuments } from "@/lib/searchRanking";
import type { SearchDocument } from "@/lib/searchTypes";

type Props = {
  documents: SearchDocument[];
};

const popularAreas = [
  { href: "/services", label: "Software Development Services" },
  { href: "/services/saas-development", label: "SaaS Development" },
  { href: "/services/mobile-app-development", label: "Mobile App Development" },
  { href: "/services/custom-business-software", label: "Custom Business Software" },
  { href: "/work", label: "Products & Case Studies" },
];

const featuredProducts = [
  { href: "/work/tradesmate", label: "TradesMate" },
  { href: "/work/pubplay", label: "PubPlay" },
  { href: "/work/come-together", label: "HelloLocalClubs / Come Together" },
  { href: "/work/workflowright", label: "WorkflowRight" },
];

function safeDisplayQuery(value: string | null) {
  return (value ?? "").slice(0, MAX_SEARCH_QUERY_LENGTH);
}

function Highlight({ text, query }: { text: string; query: string }) {
  const terms = normalizeSearchQuery(query)
    .split(" ")
    .filter((term) => term.length >= 2)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

  if (!terms.length) return <>{text}</>;

  const pattern = new RegExp(`(${terms.join("|")})`, "gi");
  return (
    <>
      {text.split(pattern).map((part, index) =>
        terms.some((term) => term.toLowerCase() === part.toLowerCase()) ? (
          <mark key={`${part}-${index}`} className="rounded-sm bg-[var(--accent)]/25 px-0.5 text-inherit">
            {part}
          </mark>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}

export default function SearchClient({ documents }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const parameterQuery = safeDisplayQuery(searchParams.get("q"));
  const [query, setQuery] = useState(parameterQuery);
  const [activeIndex, setActiveIndex] = useState(0);
  const updateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const normalizedQuery = normalizeSearchQuery(query);
  const results = useMemo(() => rankSearchDocuments(documents, query), [documents, query]);

  useEffect(() => {
    setQuery(parameterQuery);
    setActiveIndex(0);
    if (updateTimer.current) clearTimeout(updateTimer.current);
  }, [parameterQuery]);

  useEffect(() => () => {
    if (updateTimer.current) clearTimeout(updateTimer.current);
  }, []);

  const updateUrl = (nextQuery: string, immediate = false) => {
    if (updateTimer.current) clearTimeout(updateTimer.current);
    const commit = () => {
      const normalized = normalizeSearchQuery(nextQuery);
      const nextUrl = normalized ? `/search?q=${encodeURIComponent(nextQuery.trim())}` : "/search";
      window.history.replaceState(window.history.state, "", nextUrl);
    };
    if (immediate) commit();
    else updateTimer.current = setTimeout(commit, 180);
  };

  const handleChange = (value: string) => {
    const nextQuery = value.slice(0, MAX_SEARCH_QUERY_LENGTH);
    setQuery(nextQuery);
    setActiveIndex(0);
    updateUrl(nextQuery);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateUrl(query, true);
    if (results[activeIndex]) router.push(results[activeIndex].url);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" && results.length) {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % results.length);
    } else if (event.key === "ArrowUp" && results.length) {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + results.length) % results.length);
    } else if (event.key === "Escape") {
      event.preventDefault();
      handleChange("");
      inputRef.current?.focus();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} role="search" className="relative">
        <label htmlFor="site-search" className="sr-only">Search FullStack Dev KZ</label>
        <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={20} aria-hidden />
        <input
          ref={inputRef}
          id="site-search"
          type="search"
          inputMode="search"
          autoComplete="off"
          autoFocus
          maxLength={MAX_SEARCH_QUERY_LENGTH}
          value={query}
          onChange={(event) => handleChange(event.target.value)}
          onKeyDown={handleKeyDown}
          aria-controls="search-results"
          aria-describedby="search-status"
          placeholder="Search services, products, guides, or business problems"
          className="h-14 w-full rounded-lg border border-white/20 bg-black/20 pl-12 pr-12 text-base outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30"
        />
        {query ? (
          <button
            type="button"
            onClick={() => handleChange("")}
            className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-lg text-[var(--muted)] transition hover:bg-white/10 hover:text-[var(--fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label="Clear search"
            title="Clear search"
          >
            <X size={19} aria-hidden />
          </button>
        ) : null}
      </form>

      <div id="search-status" className="mt-3 min-h-6 text-sm text-[var(--muted)]" aria-live="polite" aria-atomic="true">
        {normalizedQuery ? `${results.length} ${results.length === 1 ? "result" : "results"} for “${query.trim()}”` : "Search across services, products, industries, use cases, and guides."}
      </div>

      {!normalizedQuery ? (
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section aria-labelledby="popular-areas">
            <h2 id="popular-areas" className="text-xl font-semibold">Popular areas</h2>
            <div className="mt-4 grid gap-2">
              {popularAreas.map((item) => (
                <Link key={item.href} href={item.href} className="flex min-h-12 items-center justify-between gap-3 border-b border-white/10 py-3 text-sm transition hover:text-[var(--accent)]">
                  {item.label}<ArrowRight size={16} aria-hidden />
                </Link>
              ))}
            </div>
          </section>
          <section aria-labelledby="featured-products">
            <h2 id="featured-products" className="text-xl font-semibold">Featured products</h2>
            <div className="mt-4 grid gap-2">
              {featuredProducts.map((item) => (
                <Link key={item.href} href={item.href} className="flex min-h-12 items-center justify-between gap-3 border-b border-white/10 py-3 text-sm transition hover:text-[var(--accent)]">
                  {item.label}<ArrowRight size={16} aria-hidden />
                </Link>
              ))}
            </div>
          </section>
        </div>
      ) : results.length ? (
        <ol id="search-results" className="mt-6 divide-y divide-white/10" aria-label="Search results">
          {results.map((result, index) => (
            <li key={result.url}>
              <Link
                href={result.url}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={`block px-2 py-5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)] ${index === activeIndex ? "bg-white/[0.06]" : "hover:bg-white/[0.04]"}`}
              >
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-medium text-[var(--accent)]">{result.type}</span>
                  {result.category ? <><span aria-hidden className="text-white/30">·</span><span className="text-[var(--muted)]">{result.category}</span></> : null}
                </div>
                <h2 className="mt-2 text-lg font-semibold"><Highlight text={result.title} query={query} /></h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)]"><Highlight text={result.description} query={query} /></p>
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <section id="search-results" className="mt-8 border-t border-white/10 pt-8" aria-labelledby="no-results">
          <h2 id="no-results" className="text-xl font-semibold">No useful matches for “{query.trim()}”</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">Try a broader term, or explore the main development services and software projects. You can also describe the workflow you need help with.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/services" className="rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10">Explore services</Link>
            <Link href="/work" className="rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10">View work &amp; products</Link>
            <Link href="/contact" className="rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20">Discuss your project</Link>
          </div>
        </section>
      )}
    </div>
  );
}
