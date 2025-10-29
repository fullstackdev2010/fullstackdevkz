// Full-width Case Studies index with Brainwave hover glows and no centered container.
import fs from "node:fs";
import path from "node:path";

export const metadata = { title: "Case Studies – Fullstack Dev KZ" };

type Item = { title: string; slug: string; date?: string; excerpt?: string };

function parseFrontmatter(raw: string) {
  const body = raw.replace(/^---[\s\S]*?---\n?/, "");
  const titleMatch = raw.match(/title:\s*["']?(.+?)["']?\s*$/m);
  const dateMatch = raw.match(/date:\s*["']?(.+?)["']?\s*$/m);
  // excerpt = first meaningful line
  let excerpt = "";
  for (const line of body.split(/\r?\n/)) {
    const s = line.trim();
    if (!s || s.startsWith("#") || s.startsWith("![")) continue;
    excerpt = s.replace(/\*\*/g, "").replace(/`/g, "");
    if (excerpt.length > 200) excerpt = excerpt.slice(0, 197) + "…";
    break;
  }
  return { title: titleMatch?.[1], date: dateMatch?.[1], excerpt };
}

function getItems(): Item[] {
  const dir = path.join(process.cwd(), "app", "case-studies");
  const subdirs = fs.readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory());
  const items: Item[] = [];
  for (const d of subdirs) {
    const p = path.join(dir, d.name, "page.mdx");
    if (!fs.existsSync(p)) continue;
    const raw = fs.readFileSync(p, "utf-8");
    const { title, date, excerpt } = parseFrontmatter(raw);
    items.push({ title: title ?? d.name, slug: d.name, date, excerpt });
  }
  return items.sort((a, b) => (b.date?.localeCompare(a.date ?? "") ?? 0));
}

export default function Page() {
  const items = getItems();
  return (
    <main>
      {/* Full-bleed header with no max-width container */}
      <section className="w-full px-6 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Case Studies</h1>
        <p className="mt-3 max-w-3xl text-slate-300/90">
          Real projects, real outcomes. Explore goals, technical highlights, and results.
        </p>
      </section>

      {/* Full-width grid; only side paddings via px-0/px-6 for gutters on small screens */}
      <section className="w-full">
        <div className="grid grid-cols-1 gap-6 px-0 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((cs, i) => (
            <a
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-fuchsia-400/40"
            >
              {/* Brainwave glow */}
              <div className="pointer-events-none absolute -inset-12 -z-10 opacity-40 blur-3xl transition group-hover:opacity-70">
                <div className={`h-full w-full ${i % 2 ? "bg-gradient-to-r from-cyan-500/40 to-violet-500/40" : "bg-gradient-to-r from-violet-500/40 to-cyan-500/40"}`} />
              </div>

              <div className="text-sm text-violet-300">{cs.date}</div>
              <h2 className="mt-1 text-xl text-white">{cs.title}</h2>
              {cs.excerpt && <p className="mt-2 text-slate-300/90 text-sm">{cs.excerpt}</p>}
              <div className="mt-4 text-sm text-cyan-300">Read case →</div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
