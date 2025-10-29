import fs from "node:fs";
import path from "node:path";

export const metadata = { title: "Case Studies – Fullstack Dev KZ" };

type Item = { title: string; slug: string; date?: string };

function getItems(): Item[] {
  const dir = path.join(process.cwd(), "app", "case-studies");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const full = fs.readFileSync(path.join(dir, file), "utf8");
      const titleMatch = full.match(/title:\s*["']?(.+?)["']?\s*$/m);
      const dateMatch = full.match(/date:\s*["']?(.+?)["']?\s*$/m);
      return { title: titleMatch?.[1] || slug, date: dateMatch?.[1], slug };
    })
    .sort((a, b) => (a.date && b.date ? (a.date > b.date ? -1 : 1) : 0));
}

export default function Page() {
  const items = getItems();
  return (
    <main className="min-h-[70vh] bg-[#1C1B33] text-white">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Case Studies</h1>
        {items.length === 0 && <p className="text-violet-200">No case studies yet.</p>}
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((cs) => (
            <a key={cs.slug} href={`/case-studies/${cs.slug}`} className="border border-white/10 rounded-2xl p-5 bg-[#262448] hover:border-fuchsia-400/40">
              <h2 className="text-xl">{cs.title}</h2>
              {cs.date && <div className="text-sm text-violet-300">{cs.date}</div>}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}