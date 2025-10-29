import fs from "node:fs";
import path from "node:path";

export const metadata = { title: "Blog – Fullstack Dev KZ" };

type BlogItem = { title: string; slug: string; date?: string };

function getBlogItems(): BlogItem[] {
  const dir = path.join(process.cwd(), "app", "blog");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      // Simple frontmatter sniff (optional)
      const full = fs.readFileSync(path.join(dir, file), "utf8");
      const titleMatch = full.match(/title:\s*["']?(.+?)["']?\s*$/m);
      const dateMatch = full.match(/date:\s*["']?(.+?)["']?\s*$/m);
      return {
        title: titleMatch?.[1] || slug,
        date: dateMatch?.[1],
        slug,
      };
    })
    .sort((a, b) => (a.date && b.date ? (a.date > b.date ? -1 : 1) : 0));
}

export default function Page() {
  const posts = getBlogItems();
  return (
    <main className="min-h-[70vh] bg-[#1C1B33] text-white">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Blog</h1>
        {posts.length === 0 && <p className="text-violet-200">No posts yet.</p>}
        <div className="space-y-6">
          {posts.map((p) => (
            <article key={p.slug} className="border border-white/10 rounded-2xl p-5 bg-[#262448]">
              <h2 className="text-xl">
                <a href={`/blog/${p.slug}`} className="hover:underline">{p.title}</a>
              </h2>
              {p.date && <div className="text-sm text-violet-300">{p.date}</div>}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}