export const MDXComponents = {
  h1: (props: any) => <h1 className="text-4xl md:text-5xl font-semibold" {...props} />,
  h2: (props: any) => <h2 className="mt-10 text-2xl font-semibold" {...props} />,
  p: (props: any) => <p className="mt-3 leading-relaxed text-[var(--muted)]" {...props} />,
  ul: (props: any) => <ul className="mt-3 list-disc pl-6 text-[var(--muted)]" {...props} />,
  code: (props: any) => <code className="rounded bg-white/10 px-1 py-0.5" {...props} />,
};
