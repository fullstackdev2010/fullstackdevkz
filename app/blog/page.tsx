import { allBlogPosts } from 'contentlayer/generated';

export const metadata = { title: "Blog – Fullstack Dev KZ" };

export default function Page() {
  const posts = allBlogPosts.sort((a,b)=> (a.date>b.date?-1:1));
  return (
    <main className="min-h-[70vh] bg-[#1C1B33] text-white">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Blog</h1>
        <div className="space-y-6">
          {posts.map(p => (
            <article key={p._id} className="border border-white/10 rounded-2xl p-5 bg-[#262448]">
              <h2 className="text-xl"><a href={p.url} className="hover:underline">{p.title}</a></h2>
              <div className="text-sm text-violet-300">{new Date(p.date).toLocaleDateString()}</div>
              {p.description && <p className="text-violet-200 mt-2">{p.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
