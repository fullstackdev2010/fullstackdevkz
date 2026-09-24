import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { blogPosts, getBlogPost } from "@/lib/blogPosts";
import { buildPageMetadata, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const serviceByProduct: Record<string, { href: string; label: string }> = {
  "/work/tradesmate": { href: "/services/custom-business-software", label: "Custom business software development" },
  "/work/pubplay": { href: "/services/saas-development", label: "SaaS development services" },
  "/work/studyflow": { href: "/services/mobile-app-development", label: "Mobile app development services" },
  "/work/uniscan": { href: "/services/react-native-development", label: "React Native development services" },
};

const industryByProduct: Record<string, { href: string; label: string }> = {
  "/work/tradesmate": { href: "/industries/trades-service-businesses", label: "Trades and service business workflows" },
  "/work/pubplay": { href: "/industries/pubs-entertainment-venues", label: "Pub and venue platform workflows" },
};

const sectionId = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return { ...buildPageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}`, type: "article" }), keywords: post.keywords };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const route = `/blog/${post.slug}`;
  const productService = post.appHref ? serviceByProduct[post.appHref] : undefined;
  const productIndustry = post.appHref ? industryByProduct[post.appHref] : undefined;
  const relatedLinks = post.relatedLinks ?? [...(productService ? [productService] : []), ...(productIndustry ? [productIndustry] : [])];
  const primaryLink = post.primaryLink ?? (post.appHref && post.appName ? { href: post.appHref, label: `Open ${post.appName}`, description: "See the product, screenshots, use cases, and implementation context." } : undefined);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BlogPosting", "@id": `${SITE_URL}${route}#article`, headline: post.title, description: post.description, datePublished: post.date, dateModified: post.date, author: { "@id": `${SITE_URL}/#organization` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: `${SITE_URL}${route}`, url: `${SITE_URL}${route}` },
      { "@type": "BreadcrumbList", "@id": `${SITE_URL}${route}#breadcrumb`, itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}${route}` },
      ] },
    ],
  };

  return (
    <main className="relative isolate">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <article className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--muted)]">
          <ol className="flex flex-wrap items-center gap-2"><li><Link href="/" className="hover:text-[var(--fg)]">Home</Link></li><li aria-hidden><ChevronRight size={14} /></li><li><Link href="/blog" className="hover:text-[var(--fg)]">Blog</Link></li><li aria-hidden><ChevronRight size={14} /></li><li aria-current="page" className="max-w-[28rem] truncate text-[var(--fg)]">{post.title}</li></ol>
        </nav>

        <header className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-10 md:p-14">
          <MeshWithPhotoInsets className="pointer-events-none absolute inset-0 z-0 h-full min-h-[620px]" backgroundSrc="/brand/blog.webp" viewBox="0 0 1600 900" photos={[]} />
          <div className="absolute inset-0"><MeshBackground brightness={0.8} opacity={0.95} palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]} /></div>
          <div className="relative z-10 max-w-4xl">
            <div className="text-sm text-[var(--muted)]">{post.cluster ?? post.category} · {post.date}</div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">{post.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">{post.description}</p>
            <p className="mt-5 text-sm text-[var(--muted)]">Published by Fullstack Dev KZ</p>
            <div className="mt-7 flex flex-wrap gap-3">{primaryLink && <Link href={primaryLink.href} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20">{primaryLink.label}<ArrowRight size={16} aria-hidden /></Link>}<Link href="/blog" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"><ArrowLeft size={16} aria-hidden />All guides and notes</Link></div>
          </div>
        </header>

        <div className="mx-auto mt-10 max-w-4xl">
          <p className="text-lg leading-8 text-[var(--muted)]">{post.intro}</p>
          {post.sections.length >= 4 && <nav aria-label="On this page" className="mt-9 border-y border-white/15 py-6"><h2 className="text-sm font-semibold uppercase text-[var(--accent)]">On this page</h2><ol className="mt-4 grid gap-2 sm:grid-cols-2">{post.sections.map((section) => <li key={section.title}><a href={`#${section.id ?? sectionId(section.title)}`} className="text-sm text-[var(--muted)] underline decoration-white/20 underline-offset-4 hover:text-[var(--fg)]">{section.title}</a></li>)}</ol></nav>}

          <div className="mt-12 space-y-14">
            {post.sections.map((section) => (
              <section key={section.title} id={section.id ?? sectionId(section.title)} className="scroll-mt-24">
                <h2 className="text-2xl font-semibold leading-tight md:text-3xl">{section.title}</h2>
                <div className="mt-5 space-y-5 leading-8 text-[var(--muted)]">{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                {section.bullets && <ul className="mt-6 grid gap-3 sm:grid-cols-2">{section.bullets.map((item) => <li key={item} className="border-t border-white/15 pt-3 text-sm leading-6 text-[var(--muted)]">{item}</li>)}</ul>}
                {section.diagram && <ol aria-label={`${section.title} flow`} className="mt-7 grid gap-2 rounded-2xl border border-white/15 bg-black/15 p-4 sm:p-6">{section.diagram.map((step, index) => <li key={step} className="text-center"><div className="rounded-lg border border-white/15 bg-white/[0.05] px-4 py-3 font-medium">{step}</div>{index < section.diagram!.length - 1 && <ArrowDown className="mx-auto my-2 text-[var(--accent)]" size={18} aria-hidden />}</li>)}</ol>}
                {section.table && <div className="mt-7 overflow-x-auto rounded-xl border border-white/15"><table className="w-full min-w-[620px] border-collapse text-left text-sm"><caption className="border-b border-white/15 bg-white/[0.04] px-4 py-3 text-left font-semibold">{section.table.caption}</caption><thead><tr>{section.table.headers.map((header) => <th key={header} scope="col" className="border-b border-white/15 px-4 py-3 font-semibold">{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row) => <tr key={row.join("|")} className="border-b border-white/10 last:border-0">{row.map((cell, index) => <td key={`${cell}-${index}`} className="px-4 py-3 align-top leading-6 text-[var(--muted)]">{cell}</td>)}</tr>)}</tbody></table></div>}
              </section>
            ))}
          </div>

          {primaryLink && <GlassCard className="mt-14"><div className="text-sm font-medium text-[var(--accent)]">A practical next step</div><h2 className="mt-2 text-2xl font-semibold">{primaryLink.label}</h2>{primaryLink.description && <p className="mt-3 leading-7 text-[var(--muted)]">{primaryLink.description}</p>}<div className="mt-5 flex flex-wrap gap-3"><Link href={primaryLink.href} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20">{primaryLink.label}<ArrowRight size={16} aria-hidden /></Link>{relatedLinks.map((link) => <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10">{link.label}<ArrowRight size={16} aria-hidden /></Link>)}</div></GlassCard>}
        </div>
      </article>
    </main>
  );
}
