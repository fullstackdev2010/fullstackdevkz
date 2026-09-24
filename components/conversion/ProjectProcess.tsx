const steps = [
  {
    title: "Understand the workflow",
    body: "Identify the users, the job they need to complete, the current tools, and where the process loses time or clarity.",
  },
  {
    title: "Define the scope",
    body: "Set the first useful release, required integrations, delivery constraints, and the product boundary that can be estimated responsibly.",
  },
  {
    title: "Build and verify",
    body: "Implement complete user journeys across the required mobile, web, backend, and data surfaces, then test the important paths.",
  },
  {
    title: "Release and improve",
    body: "Prepare the production or store release, observe real use, and prioritise the next phase from evidence rather than guesswork.",
  },
];

export default function ProjectProcess({ className = "mt-16" }: { className?: string }) {
  return (
    <section className={className} aria-labelledby="project-process">
      <div className="max-w-3xl">
        <div className="text-sm font-medium text-[var(--accent)]">How we work</div>
        <h2 id="project-process" className="mt-2 text-2xl font-semibold md:text-3xl">
          A clear path from workflow to release
        </h2>
        <p className="mt-3 leading-7 text-[var(--muted)]">
          The process stays practical and proportionate to the product. You do not need a complete technical specification before the first conversation.
        </p>
      </div>
      <ol className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="border-t border-white/20 pt-5">
            <div className="text-sm font-semibold text-[var(--accent)]">0{index + 1}</div>
            <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
