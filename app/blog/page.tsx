import type { Metadata } from "next";
import Link from "next/link";
import MeshBackground from "@/components/mesh/MeshBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { blogPosts } from "@/lib/blogPosts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Launch notes and practical guides for simple Android apps from Fullstack Dev KZ.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-10 md:p-16">
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
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
            <section className="max-w-3xl">
              <h1 className="text-4xl font-semibold md:text-6xl">
                App notes and guides
              </h1>
              <p className="mt-4 text-[var(--muted)]">
                Launch notes, product thinking, and practical guides behind the
                simple Android apps in the Fullstack Dev KZ ecosystem.
              </p>
            </section>

            <div className="mt-8 h-px w-full bg-white/10" />

            <section className="mt-8 grid gap-5 md:grid-cols-2">
              {blogPosts.map((post) => (
                <GlassCard key={post.slug} className="h-full">
                  <div className="text-xs uppercase tracking-wide text-[var(--muted)]">
                    {post.category} - {post.date}
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-[var(--muted)]">
                    {post.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.keywords.slice(0, 3).map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-md border border-white/15 bg-white/[0.03] px-2 py-1 text-xs"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
                    >
                      Read note
                    </Link>
                    <Link
                      href={post.appHref}
                      className="rounded-xl bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20"
                    >
                      View app
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
