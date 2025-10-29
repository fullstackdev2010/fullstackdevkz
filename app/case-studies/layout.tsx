import Image from "next/image";

const STYLES = `
  .cs-prose { line-height: 1.85; color: #EEE9FF; font-size: 17.5px; }
  .cs-prose h1, .cs-prose h2, .cs-prose h3 { color: #fff; margin: 1.6rem 0 0.8rem; font-weight: 650; }
  .cs-prose h1 { font-size: clamp(1.9rem, 3.4vw, 2.5rem); }
  .cs-prose h2 { font-size: clamp(1.5rem, 2.4vw, 2rem); }
  .cs-prose h3 { font-size: clamp(1.25rem, 2vw, 1.5rem); }
  .cs-prose p { margin: 0.9rem 0; color: #EEE9FF; }
  .cs-prose ul, .cs-prose ol { margin: 0.75rem 0 1rem 1.25rem; }
  .cs-prose li { margin: 0.25rem 0; }
  .cs-prose strong { color: #fff; }
  .cs-prose a { color: #7dd3fc; text-decoration: underline; }
  .cs-prose code { background: #1b1430; color: #e4d8ff; padding: 0.15rem 0.35rem; border-radius: 6px; }
  .cs-prose pre { background: #1b1430; color: #e4d8ff; padding: 1rem; border-radius: 12px; overflow:auto; }
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#0B0F19]">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <Image
        src="/brainwave/cs-mesh.svg"
        alt=""
        width={1600}
        height={900}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-[#0B0F19]/35" />
      <main className="relative">
        <article className="cs-prose mx-auto max-w-3xl px-6 py-10 sm:py-16">
          {children}
        </article>
      </main>
    </div>
  );
}
