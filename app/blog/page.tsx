import { GlassCard } from '@/components/ui/GlassCard';
import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export const dynamic = 'force-static';

export default async function Page() {
  const posts = await getAllPosts();
  return (
    <div className="relative">
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold">Pow‑Wow</h1>
        <p className="mt-3 text-[var(--muted)] max-w-prose">Short, visual posts pairing UI meshes with the engineering behind them.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <GlassCard key={p.slug}>
              <Link href={'/blog/' + p.slug} className="block">
                <div className="text-xl font-medium">{p.title}</div>
                <div className="text-xs mt-1 text-[var(--muted)]">{p.date}</div>
                {p.excerpt && <p className="mt-2 text-sm text-[var(--muted)]">{p.excerpt}</p>}
                {p.tags && <div className="mt-3 flex flex-wrap gap-2">{p.tags.map(t => <span key={t} className="rounded-md border border-white/15 px-2 py-0.5 text-xs">{t}</span>)}</div>}
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
