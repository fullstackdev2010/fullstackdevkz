import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import ProjectProcess from "@/components/conversion/ProjectProcess";
import { buildPageMetadata } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "About Our Software Engineering Approach",
  description:
    "Learn how FullStack Dev KZ plans, builds, and ships reliable mobile apps, web applications, backend APIs, SaaS platforms, and business software.",
  path: "/about",
});

const capabilities = [
  ["Mobile applications", "React Native and Expo products with practical UX, device capabilities, local data, notifications, billing, and store-ready releases."],
  ["Web platforms", "Customer experiences, portals, dashboards, administration, and responsive workflows built with Next.js."],
  ["Backend and APIs", "FastAPI and SQL services for accounts, permissions, shared data, integrations, synchronization, and business rules."],
  ["SaaS and business software", "Connected products for operational records, recurring workflows, multiple user roles, and production ownership."],
];

const evidence = [
  {
    href: "/work/tradesmate",
    title: "TradesMate",
    body: "Android business software connecting customers, jobs, schedules, quotes, invoices, payments, expenses, team access, and a FastAPI backend.",
  },
  {
    href: "/work/pubplay",
    title: "PubPlay",
    body: "A venue platform spanning an Android host, QR player web app, fixtures, scoring, live leaderboards, subscriptions, and TV display.",
  },
  {
    href: "/work/come-together",
    title: "Come Together",
    body: "A web and Android platform for club discovery, event booking, capacity, waitlists, attendance, and organizer workflows.",
  },
];

export default function Page() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12">
        <section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-10 md:p-12">
          <MeshWithPhotoInsets className="pointer-events-none absolute inset-0 z-0 h-full min-h-[720px]" backgroundSrc="/brand/about.webp" viewBox="0 0 1600 900" photos={[]} />
          <div className="absolute inset-0">
            <MeshBackground brightness={0.8} opacity={0.95} palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]} />
          </div>
          <div className="relative z-10 max-w-4xl">
            <div className="text-sm font-medium text-[var(--accent)]">About FullStack Dev KZ</div>
            <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Software development backed by real products
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              We plan, design, build, and release mobile apps, web applications, backend APIs, SaaS platforms, and custom business software. The approach starts with the real workflow and stays grounded in production responsibilities such as data, permissions, errors, deployment, privacy, and ongoing ownership.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" data-cta="discuss-project" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25">
                <MessageSquare size={17} aria-hidden />Discuss Your Project
              </Link>
              <Link href="/work" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm transition hover:bg-white/10">
                View Our Work <ArrowRight size={17} aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="about-capabilities">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-[var(--accent)]">What we build</div>
            <h2 id="about-capabilities" className="mt-2 text-2xl font-semibold md:text-3xl">Capabilities across the complete product</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">The strongest delivery decisions connect interface, application state, backend rules, release requirements, and the way the software will be operated.</p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {capabilities.map(([title, body]) => (
              <GlassCard key={title} className="h-full">
                <h3 className="flex items-center gap-3 text-xl font-semibold"><CheckCircle2 size={19} className="text-[var(--accent)]" aria-hidden />{title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{body}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <ProjectProcess />

        <section className="mt-16" aria-labelledby="see-software">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-[var(--accent)]">Evidence in working software</div>
            <h2 id="see-software" className="mt-2 text-2xl font-semibold md:text-3xl">See the software</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">These larger products show connected mobile, web, backend, commercial, and operational decisions. Their case studies use real product screens and documented workflows.</p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {evidence.map((item) => (
              <Link key={item.href} href={item.href} className="group block rounded-2xl">
                <GlassCard className="h-full transition-transform duration-200 group-hover:-translate-y-1">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">View case study <ArrowRight size={15} aria-hidden /></span>
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">Start with the workflow</div>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Have a software project in mind?</h2>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Share the users, current process, existing systems, and the result the software needs to make possible.</p>
            </div>
            <Link href="/contact" data-cta="discuss-project" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"><MessageSquare size={17} aria-hidden />Discuss Your Project</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
