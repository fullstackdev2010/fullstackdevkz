import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const items = [
  "The people who will use the software and the main workflow they need to complete",
  "The platforms involved: mobile, web, administration, backend, or a connected combination",
  "Existing systems, APIs, spreadsheets, data, or manual processes that must remain or be replaced",
  "Required integrations, fixed deadlines, release constraints, and must-have outcomes",
];

export default function ScopePreparation({
  title = "What helps us scope your project",
  className = "mt-14",
}: {
  title?: string;
  className?: string;
}) {
  return (
    <section className={`${className} border-y border-white/15 py-9`} aria-labelledby="scope-preparation">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <div className="text-sm font-medium text-[var(--accent)]">Before the first conversation</div>
          <h2 id="scope-preparation" className="mt-2 text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            A complete technical specification is not required. A clear description of the workflow and constraints is enough to start shaping the right next step.
          </p>
          <Link href="/blog/prepare-for-software-development-estimate" className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:underline">
            Read the software estimation guide <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex gap-3 border-t border-white/15 pt-4 text-sm leading-6 text-[var(--muted)]">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--accent)]" size={18} aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
