
export const metadata = { title: "Our Services – Fullstack Dev KZ" };

const services = [
  {
    title: "iOS & Android Apps",
    bullets: [
      "Swift/SwiftUI, Kotlin/Jetpack, React Native / Expo",
      "Camera, OCR, biometrics, secure storage",
      "App Store / Play Console delivery & compliance",
    ],
  },
  {
    title: "Cross‑platform Delivery",
    bullets: [
      "Expo + EAS pipelines with staging/production channels",
      "Native modules integration (camera, ML, crypto)",
      "Performance profiling and CI snapshots",
    ],
  },
  {
    title: "Backend & APIs",
    bullets: [
      "FastAPI / Node, PostgreSQL with SQLAlchemy/Prisma",
      "Auth (JWT/refresh), rate limiting, observability",
      "Automated tests & seed loaders",
    ],
  },
  {
    title: "Design & UX",
    bullets: [
      "Design systems, accessibility, haptics & motion",
      "Offline-first flows & failure states",
      "Analytics and in‑app experiments",
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-[70vh] bg-[#1C1B33] text-white">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map(s => (
            <section key={s.title} className="rounded-2xl border border-white/10 bg-[#262448] p-5">
              <h2 className="text-xl mb-3">{s.title}</h2>
              <ul className="text-violet-200 space-y-1.5 list-disc list-inside">
                {s.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </section>
          ))}
        </div>
        <div className="mt-10 text-violet-300">
          See also: <a className="underline" href="/case-studies">Case Studies</a> and <a className="underline" href="/stack">Tech Stack</a>.
        </div>
      </div>
    </main>
  );
}
