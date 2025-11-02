import MeshBackground from '@/components/mesh/MeshBackground';
import { MDXComponents } from '@/components/mdx/MDXComponents';
import { getPost, getAllPosts } from '@/lib/mdx';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { mdx, data } = await getPost(params.slug);
  return (
    <div className="relative">
      <div className="absolute inset-0"><MeshBackground /></div>
      <article className="prose prose-invert relative mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold">{String((data as any).title ?? '')}</h1>
        <div className="mt-1 text-xs text-[var(--muted)]">{String((data as any).date ?? '')}</div>
        <div className="mt-6">
          {/* @ts-expect-error RSC MDX */}
          <mdx.components components={MDXComponents} />
          {/* @ts-expect-error RSC MDX */}
          {mdx}
        </div>
      </article>
    </div>
  );
}
