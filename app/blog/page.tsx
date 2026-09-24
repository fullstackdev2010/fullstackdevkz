import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { blogPosts } from "@/lib/blogPosts";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({ title: "Software Development Guides for Business & Product Teams", description: "Practical guides to custom software, MVP planning, mobile and web applications, SaaS architecture, cost, and modernization.", path: "/blog" });
const clusterOrder = ["Business Software", "MVP & Product", "Mobile Development", "SaaS & Architecture", "Cost & Modernization"];

export default function BlogPage() {
  const guides = blogPosts.filter((post) => post.cluster);
  const productNotes = blogPosts.filter((post) => !post.cluster);
  return (
    <main className="relative isolate"><div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
      <header className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-10 md:p-16"><MeshWithPhotoInsets className="pointer-events-none absolute inset-0 z-0 h-full min-h-[640px]" backgroundSrc="/brand/blog.webp" viewBox="0 0 1600 900" photos={[]} /><div className="absolute inset-0"><MeshBackground brightness={0.8} opacity={0.95} palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]} /></div><div className="relative z-10 max-w-4xl"><div className="text-sm font-medium text-[var(--accent)]">Guides and product notes</div><h1 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">Software development guides for business &amp; product teams</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">Clear answers for planning business software, MVPs, mobile products, connected SaaS platforms, estimates, and modernization without turning every question into a sales pitch.</p></div></header>
      <div className="mt-14 space-y-16">
        {clusterOrder.map((cluster) => { const posts = guides.filter((post) => post.cluster === cluster); if (!posts.length) return null; const id = `cluster-${cluster.replace(/\W+/g, "-").toLowerCase()}`; return <section key={cluster} aria-labelledby={id}><h2 id={id} className="text-2xl font-semibold md:text-3xl">{cluster}</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{posts.map((post) => <GlassCard key={post.slug} className="h-full"><div className="text-xs uppercase text-[var(--muted)]">{post.category} · {post.date}</div><h3 className="mt-3 text-xl font-semibold md:text-2xl"><Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link></h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{post.description}</p><Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:underline"><BookOpen size={16} aria-hidden />Read guide<ArrowRight size={15} aria-hidden /></Link></GlassCard>)}</div></section>; })}
        <section aria-labelledby="product-notes" className="border-t border-white/15 pt-12"><h2 id="product-notes" className="text-2xl font-semibold md:text-3xl">Product notes</h2><p className="mt-3 max-w-3xl text-[var(--muted)]">Launch context and design decisions from products built by FullStack Dev KZ.</p><div className="mt-6 grid gap-5 md:grid-cols-2">{productNotes.map((post) => <GlassCard key={post.slug} className="h-full"><div className="text-xs uppercase text-[var(--muted)]">{post.category} · {post.date}</div><h3 className="mt-3 text-xl font-semibold"><Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link></h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{post.description}</p><div className="mt-5 flex flex-wrap gap-3"><Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"><BookOpen size={16} aria-hidden />Read note</Link>{post.appHref && <Link href={post.appHref} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20">View app<ArrowRight size={16} aria-hidden /></Link>}</div></GlassCard>)}</div></section>
      </div>
    </div></main>
  );
}
