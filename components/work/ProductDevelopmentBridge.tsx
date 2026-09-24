import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export type ServiceLink = { href: string; label: string };

export default function ProductDevelopmentBridge({
  eyebrow,
  title,
  description,
  services,
  contactIntent,
}: {
  eyebrow: string;
  title: string;
  description: string;
  services: ServiceLink[];
  contactIntent: string;
}) {
  return (
    <section className="mt-14 border-y border-white/15 py-8" aria-labelledby="development-bridge">
      <div className="grid gap-7 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <div className="text-sm font-medium text-[var(--accent)]">{eyebrow}</div>
          <h2 id="development-bridge" className="mt-2 text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10">
              {service.label}<ArrowRight size={15} aria-hidden />
            </Link>
          ))}
          <Link href={`/contact?intent=${contactIntent}`} data-cta="discuss-project" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20">
            <MessageSquare size={15} aria-hidden />Need Something Similar?
          </Link>
        </div>
      </div>
    </section>
  );
}
