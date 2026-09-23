import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Braces,
  BriefcaseBusiness,
  CodeXml,
  Layers3,
  Rocket,
  Smartphone,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { buildPageMetadata } from "@/lib/site";

const services = [
  {
    href: "/services/mobile-app-development",
    title: "Mobile App Development",
    description:
      "Custom mobile applications shaped around a real workflow, from user journeys and interface design to backend integration, testing, and store-ready delivery.",
    icon: Smartphone,
  },
  {
    href: "/services/react-native-development",
    title: "React Native Development",
    description:
      "Cross-platform Android and iOS development with Expo and React Native, including native integrations, notifications, subscriptions, offline behavior, and ongoing feature work.",
    icon: CodeXml,
  },
  {
    href: "/services/web-app-development",
    title: "Web Application Development",
    description:
      "Responsive web applications, portals, dashboards, and customer systems built with Next.js and connected to production APIs and databases.",
    icon: Braces,
  },
  {
    href: "/services/saas-development",
    title: "SaaS Development",
    description:
      "Subscription products with account flows, role-based access, billing-ready architecture, administration tools, and connected mobile or web experiences.",
    icon: Layers3,
  },
  {
    href: "/services/mvp-development",
    title: "MVP Development",
    description:
      "A focused route from product scope and prototype to a testable production release, with architecture that can support the next stage instead of trapping it.",
    icon: Rocket,
  },
  {
    href: "/services/backend-api-development",
    title: "Backend & API Development",
    description:
      "FastAPI services, SQL data models, authentication, integrations, background processes, and secure APIs for mobile and web products.",
    icon: Blocks,
  },
  {
    href: "/services/custom-business-software",
    title: "Custom Business Software",
    description:
      "Operational software for jobs, customers, documents, payments, events, reporting, and other workflows that generic tools do not fit well.",
    icon: BriefcaseBusiness,
  },
];

const engagementOptions = [
  {
    name: "Focused build",
    timeline: "Typical scope: 2–4 weeks",
    bullets: ["Prototype or focused MVP", "One validated core workflow", "Technical handover"],
  },
  {
    name: "Product delivery",
    timeline: "Typical scope: 4–12+ weeks",
    bullets: ["Mobile or web application", "Backend and integrations", "Testing and release support"],
  },
  {
    name: "Ongoing engineering",
    timeline: "Scope agreed together",
    bullets: ["New features and modernization", "Backend and API work", "Maintenance and release support"],
  },
];

export const metadata = buildPageMetadata({
  title: "Software Development Services",
  description:
    "Custom mobile app, React Native, web application, SaaS, MVP, backend API, and business software development from Fullstack Dev KZ.",
  path: "/services",
});

export default function Page() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12">
        <section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-10 md:p-12">
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
            backgroundSrc="/brand/services.webp"
            viewBox="0 0 1600 900"
            photos={[]}
          />
          <div className="absolute inset-0">
            <MeshBackground
              brightness={0.8}
              opacity={0.95}
              palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]}
            />
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="text-sm font-medium text-[var(--accent)]">
              Software development services
            </div>
            <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Build a mobile app, web product, SaaS platform, or business system
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-[var(--muted)]">
              Fullstack Dev KZ plans, designs, and engineers production software for
              businesses, founders, and software teams. Projects can cover one focused
              application or a connected mobile, web, backend, and API platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"
              >
                Discuss your software project
                <ArrowRight size={17} aria-hidden />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm transition hover:bg-white/10"
              >
                See shipped products
                <ArrowRight size={17} aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="service-categories">
          <div className="max-w-3xl">
            <h2 id="service-categories" className="text-2xl font-semibold md:text-3xl">
              Development capabilities
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              Each engagement is shaped around users, business rules, integrations,
              data, security, and the release environment rather than a generic feature list.
            </p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <GlassCard key={service.title} className="h-full">
                  <Icon size={24} className="text-[var(--accent)]" aria-hidden />
                  <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  >
                    Explore {service.title.toLowerCase()}
                    <ArrowRight size={15} aria-hidden />
                  </Link>
                </GlassCard>
              );
            })}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="engagement-options">
          <div className="max-w-3xl">
            <h2 id="engagement-options" className="text-2xl font-semibold md:text-3xl">
              Ways to work together
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              Timelines are indicative, not fixed promises. Final scope depends on
              product complexity, integrations, backend requirements, data migration,
              security, testing, and release needs.
            </p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {engagementOptions.map((option) => (
              <GlassCard key={option.name} className="h-full">
                <h3 className="text-xl font-semibold">{option.name}</h3>
                <div className="mt-2 text-sm text-[var(--accent)]">{option.timeline}</div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  {option.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-5 lg:grid-cols-2">
          <GlassCard>
            <div className="text-sm font-medium text-[var(--accent)]">Relevant work</div>
            <h2 className="mt-2 text-2xl font-semibold">Business and SaaS examples</h2>
            <p className="mt-3 text-[var(--muted)]">
              See the <Link href="/work/tradesmate" className="font-medium text-[var(--fg)] underline underline-offset-4">TradesMate business management application</Link>,
              the <Link href="/work/come-together" className="font-medium text-[var(--fg)] underline underline-offset-4">Come Together SaaS platform</Link>,
              and the <Link href="/work/pubplay" className="font-medium text-[var(--fg)] underline underline-offset-4">PubPlay mobile and web system</Link>.
            </p>
          </GlassCard>
          <GlassCard>
            <div className="text-sm font-medium text-[var(--accent)]">Project fit</div>
            <h2 className="mt-2 text-2xl font-semibold">Start with a useful technical conversation</h2>
            <p className="mt-3 text-[var(--muted)]">
              Share the current problem, intended users, must-have workflows, existing
              systems, and target release. That is enough to identify a sensible next step.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
            >
              Start a project inquiry
              <ArrowRight size={16} aria-hidden />
            </Link>
          </GlassCard>
        </section>
      </div>
    </main>
  );
}
