import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MeshBackground from "@/components/mesh/MeshBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { blogPosts, getBlogPost } from "@/lib/blogPosts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Fullstack Dev KZ",
    },
    publisher: {
      "@type": "Organization",
      name: "Fullstack Dev KZ",
    },
    mainEntityOfPage: `https://www.fullstackdev.kz/blog/${post.slug}`,
  };

  return (
    <main className="relative isolate">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        <div className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-10 md:p-16">
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[620px]"
            backgroundSrc="/brand/blog.webp"
            viewBox="0 0 1600 900"
            photos={[]}
          />
          <div className="absolute inset-0">
            <MeshBackground
              brightness={0.8}
              opacity={0.95}
              palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]}
            />
          </div>

          <div className="relative z-10">
            <div className="text-sm text-[var(--muted)]">
              {post.category} - {post.date}
            </div>
            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-[var(--muted)]">
              {post.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={post.appHref}
                className="rounded-xl bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20"
              >
                View {post.appName}
              </Link>
              <Link
                href="/blog"
                className="rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
              >
                All blog posts
              </Link>
            </div>
          </div>
        </div>

        <GlassCard className="mx-auto mt-10 max-w-4xl">
          <p className="text-lg text-[var(--muted)]">{post.intro}</p>
        </GlassCard>

        <div className="mx-auto mt-10 max-w-4xl space-y-8">
          {post.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <div className="mt-4 space-y-4 text-[var(--muted)]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <GlassCard className="mx-auto mt-12 max-w-4xl">
          <h2 className="text-2xl font-semibold">Explore the app</h2>
          <p className="mt-3 text-[var(--muted)]">
            The full app landing page includes screenshots, use cases, privacy
            details, FAQs, and a Google Play link.
          </p>
          <Link
            href={post.appHref}
            className="mt-5 inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20"
          >
            Open {post.appName}
          </Link>
        </GlassCard>
      </article>
    </main>
  );
}
