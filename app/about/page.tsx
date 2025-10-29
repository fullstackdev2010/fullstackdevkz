
export const metadata = { title: "About – Fullstack Dev KZ" };

export default function Page() {
  return (
    <main className="min-h-[70vh] bg-[#1C1B33] text-white">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">About Fullstack Dev KZ</h1>
        <p className="text-violet-200 mb-4">
          We build performant, secure mobile software. Recent work spans secure on‑device scanning (UniScan) and a full
          trading stack (Iskra) from mobile client to FastAPI backend.
        </p>
        <p className="text-violet-200 mb-4">
          Our philosophy: ship small, integrate native capabilities responsibly, and measure UX quality under real‑world conditions.
        </p>
        <div className="mt-8">
          <a className="underline" href="/case-studies">See our case studies</a>
        </div>
      </div>
    </main>
  );
}
