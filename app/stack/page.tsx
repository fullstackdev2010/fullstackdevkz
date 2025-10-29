
export const metadata = { title: "Tech Stack – Fullstack Dev KZ" };

const groups = [
  {
    title: "Mobile",
    items: ["Expo 53", "React Native 0.79", "TypeScript", "React Navigation", "Expo Router", "Nativewind/Tailwind", "Paper UI"],
  },
  {
    title: "Device & Native",
    items: ["expo-camera", "image-manipulator", "file-system", "secure-store", "local-authentication", "NetInfo", "Skia"],
  },
  {
    title: "OCR & ML",
    items: ["Tesseract OCR", "ML Kit Text Recognition"],
  },
  {
    title: "Data & State",
    items: ["axios (+retry)", "TanStack Query", "Zustand"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "SQLAlchemy", "Pydantic", "PostgreSQL"],
  },
  {
    title: "DevOps",
    items: ["EAS Build/Submit", "CI-ready scripts", "Rate limiting (slowapi)"],
  },
];

export default function Page() {
  return (
    <main className="min-h-[70vh] bg-[#1C1B33] text-white">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">Tech Stack</h1>
        <div className="grid md:grid-cols-3 gap-5">
          {groups.map(g => (
            <section key={g.title} className="rounded-2xl border border-white/10 bg-[#262448] p-5">
              <h2 className="text-lg mb-2">{g.title}</h2>
              <ul className="text-violet-200 space-y-1.5 list-disc list-inside">
                {g.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
