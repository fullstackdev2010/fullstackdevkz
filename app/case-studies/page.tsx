import { allCaseStudies } from 'contentlayer/generated';

export const metadata = { title: "Case Studies – Fullstack Dev KZ" };

export default function Page() {
  const items = allCaseStudies.sort((a,b)=> (a.date>b.date?-1:1));
  return (
    <main className="min-h-[70vh] bg-[#1C1B33] text-white">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Case Studies</h1>
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map(cs => (
            <a key={cs._id} href={cs.url} className="border border-white/10 rounded-2xl p-5 bg-[#262448] hover:border-fuchsia-400/40">
              <h2 className="text-xl">{cs.title}</h2>
              <div className="text-sm text-violet-300">{new Date(cs.date).toLocaleDateString()}</div>
              {cs.outcomes && <ul className="mt-2 text-violet-200 text-sm list-disc list-inside">{cs.outcomes.map(o=> <li key={o}>{o}</li>)}</ul>}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
