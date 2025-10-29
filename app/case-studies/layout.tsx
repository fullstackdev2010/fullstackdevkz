// Server Component layout for case studies (typography + dark theme spacing)
const CS_STYLES = `
  .cs-prose { line-height: 1.75; }
  .cs-prose h1, .cs-prose h2, .cs-prose h3 {
    color: #fff; margin: 1.6rem 0 0.8rem; font-weight: 650;
  }
  .cs-prose h1 { font-size: clamp(1.9rem, 3vw, 2.4rem); }
  .cs-prose h2 { font-size: clamp(1.5rem, 2.2vw, 1.9rem); }
  .cs-prose h3 { font-size: clamp(1.25rem, 1.8vw, 1.5rem); }
  .cs-prose p { margin: 0.9rem 0; color: #c9b5ff; }
  .cs-prose ul, .cs-prose ol { margin: 0.75rem 0 1rem 1.25rem; color: #c9b5ff; }
  .cs-prose li { margin: 0.25rem 0; }
  .cs-prose strong { color: #fff; }
  .cs-prose a { color: #e879f9; text-decoration: underline; text-underline-offset: 3px; }
  .cs-prose code { background: #2a284a; color: #e5e7eb; padding: 0.15rem 0.4rem; border-radius: 0.4rem; }
  .cs-prose pre {
    background: #201e3a; color: #e5e7eb; padding: 0.9rem 1rem;
    border-radius: 0.8rem; overflow: auto; border: 1px solid rgba(255,255,255,0.08);
  }
  .cs-prose hr { border: none; height: 1px; background: rgba(255,255,255,0.15); margin: 1.5rem 0; }
`;

export default function CaseStudiesLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <main className="min-h-[70vh] bg-[#1C1B33] text-white">
      <div className="max-w-3xl mx-auto px-4 py-24">
        <article className="cs-prose">{children}</article>
      </div>
      {/* Use a plain <style> tag to avoid styled-jsx (which triggers client-only in Server Components) */}
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: CS_STYLES }}
      />
    </main>
  );
}