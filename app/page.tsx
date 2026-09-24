import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Braces,
  MessageSquare,
  MonitorSmartphone,
  Rocket,
  Smartphone,
} from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import ClientActiveNav from "@/components/ClientActiveNav";
import { QualityBadge } from "@/components/ui/QualityBadge";
import { buildPageMetadata } from "@/lib/site";

export const metadata = {
  ...buildPageMetadata({
    title: "Custom Mobile & Web App Development",
    description:
      "Fullstack Dev KZ builds production-ready mobile apps, web applications, SaaS platforms, MVPs, and custom business software for companies and founders.",
    path: "/",
  }),
  title: { absolute: "Custom Mobile & Web App Development | Fullstack Dev KZ" },
};

const services = [
  {
    href: "/services/mobile-app-development",
    title: "Mobile app development",
    description:
      "Production-ready React Native applications for Android and iOS, with practical UX, secure data flows, store-ready builds, and maintainable code.",
    icon: Smartphone,
  },
  {
    href: "/services/web-app-development",
    title: "Web application development",
    description:
      "Modern portals, dashboards, customer applications, and operational systems built for fast, reliable use across devices.",
    icon: MonitorSmartphone,
  },
  {
    href: "/services/saas-development",
    title: "SaaS & business software",
    description:
      "Subscription platforms, internal tools, workflow software, APIs, and integrations that connect day-to-day business operations.",
    icon: Blocks,
  },
  {
    href: "/services/mvp-development",
    title: "MVP & product development",
    description:
      "Focused product delivery from scope and prototype through backend implementation, testing, deployment, and production release.",
    icon: Rocket,
  },
];

const examples = [
  {
    href: "/work/tradesmate",
    title: "TradesMate business management application",
    description: "Jobs, customers, quotes, invoices, payments, and expenses in one Android product backed by FastAPI.",
    linkLabel: "Explore TradesMate",
  },
  {
    href: "/work/come-together",
    title: "Come Together SaaS platform",
    description: "A web and Android system for local clubs, event organisers, bookings, attendance, and community activity.",
    linkLabel: "Explore Come Together",
  },
  {
    href: "/work/pubplay",
    title: "PubPlay mobile and web platform",
    description: "An Android host app, QR player experience, live fixtures, and TV leaderboards for recurring pub events.",
    linkLabel: "Explore PubPlay",
  },
  {
    href: "/work/studyflow",
    title: "StudyFlow local-first mobile application",
    description: "Spaced repetition, review scheduling, recall statistics, reminders, and purchases in a focused Android product.",
    linkLabel: "Explore StudyFlow",
  },
];

export default function Home() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-10">
        <section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-10 md:p-12">
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
            backgroundSrc="/brand/main.webp"
            viewBox="0 0 1600 900"
            photos={[]}
          />
          <div className="absolute inset-0">
            <MeshBackground
              brightness={0.85}
              opacity={0.95}
              palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]}
            />
          </div>

          <div className="relative z-10 grid min-w-0 items-start gap-10 md:grid-cols-2">
            <div className="pt-1 md:pt-2">
              <div className="text-sm font-medium text-[var(--accent)]">
                Engineering-led software development
              </div>
              <div className="mt-3 flex items-start gap-4">
                <QualityBadge size="lg" className="mt-1 hidden sm:block" />
                <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                  Custom mobile &amp; web application development
                </h1>
              </div>
              <p className="mt-5 max-w-prose text-lg text-[var(--muted)]">
                We design and build production-ready mobile apps, web applications,
                SaaS platforms, backend systems, and custom business software for
                companies, founders, and existing software teams.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  className="glow-outline inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm"
                  href="/contact"
                >
                  <MessageSquare size={17} aria-hidden />
                  Discuss your project
                </Link>
                <Link
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm"
                  href="/work"
                >
                  View products &amp; work
                  <ArrowRight size={17} aria-hidden />
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
                <span>React Native &amp; Expo</span>
                <span>Next.js</span>
                <span>FastAPI</span>
                <span>SQL backends &amp; APIs</span>
              </div>
            </div>

            <div className="min-w-0">
              <div className="mb-3 text-sm font-medium text-[var(--accent)]">Primary product evidence · TradesMate</div>
              <div className="relative mx-auto h-[500px] w-full max-w-[540px] sm:h-[590px]" aria-label="TradesMate mobile business workflow screens">
                <figure className="absolute left-0 top-0 z-30 w-[49%] overflow-hidden rounded-2xl border border-white/20 bg-black/25 shadow-2xl">
                  <Image src="/demos/tradesmate/tradesmate-dashboard.jpg" alt="TradesMate business dashboard showing revenue, outstanding payments and scheduled jobs" width={1080} height={1920} sizes="(max-width: 767px) 48vw, 270px" className="h-auto w-full" priority />
                </figure>
                <figure className="absolute right-[21%] top-[7%] z-20 w-[34%] rotate-2 overflow-hidden rounded-2xl border border-white/20 bg-black/25 shadow-2xl">
                  <Image src="/demos/tradesmate/tradesmate-jobs.jpg" alt="TradesMate job scheduling screen showing upcoming trade jobs" width={1080} height={1920} sizes="(max-width: 767px) 34vw, 190px" className="h-auto w-full" />
                </figure>
                <figure className="absolute right-0 top-[18%] z-10 w-[34%] -rotate-1 overflow-hidden rounded-2xl border border-white/20 bg-black/25 shadow-2xl">
                  <Image src="/demos/tradesmate/tradesmate-finance.jpg" alt="TradesMate finance screen showing quotes, invoices and expenses" width={1080} height={1920} sizes="(max-width: 767px) 34vw, 190px" className="h-auto w-full" />
                </figure>
                <figure className="absolute bottom-0 right-[8%] z-40 w-[29%] rotate-1 overflow-hidden rounded-2xl border border-white/20 bg-black/25 shadow-2xl">
                  <Image src="/demos/tradesmate/tradesmate-customers.jpg" alt="TradesMate customer management screen with customer contact actions" width={1080} height={1920} sizes="(max-width: 767px) 29vw, 160px" className="h-auto w-full" />
                </figure>
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-semibold">TradesMate — business management software for trades</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Customers, jobs, scheduling, quotes, invoices, expenses, and payments form one connected mobile business workflow.</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <Link href="/work/tradesmate" className="inline-flex items-center gap-2 font-medium hover:underline">Explore TradesMate<ArrowRight size={15} aria-hidden /></Link>
                  <Link href="/solutions/build-an-app-for-my-business" className="inline-flex items-center gap-2 font-medium hover:underline">Build a business app<ArrowRight size={15} aria-hidden /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="development-services">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-[var(--accent)]">What we build</div>
            <h2 id="development-services" className="mt-2 text-2xl font-semibold md:text-3xl">
              Software development for products and business operations
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              A practical delivery stack for customer-facing products, internal
              systems, and new software ventures. Scope can start with a focused MVP
              or extend into a complete mobile, web, and backend platform.
            </p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <RevealOnScroll key={service.title} delay={index * 0.05}>
                  <GlassCard className="h-full">
                    <Icon size={24} className="text-[var(--accent)]" aria-hidden />
                    <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">{service.description}</p>
                    <Link
                      href={service.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:underline"
                    >
                      Explore {service.title}
                      <ArrowRight size={15} aria-hidden />
                    </Link>
                  </GlassCard>
                </RevealOnScroll>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link href="/services/react-native-development" className="inline-flex items-center gap-2 hover:underline">
              React Native development <ArrowRight size={14} aria-hidden />
            </Link>
            <Link href="/services/backend-api-development" className="inline-flex items-center gap-2 hover:underline">
              Backend &amp; API development <ArrowRight size={14} aria-hidden />
            </Link>
            <Link href="/services/custom-business-software" className="inline-flex items-center gap-2 hover:underline">
              Custom business software <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="shipped-software">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                <Braces size={18} aria-hidden />
                Shipped software
              </div>
              <h2 id="shipped-software" className="mt-2 text-2xl font-semibold md:text-3xl">
                Real products demonstrate the full delivery path
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                Our work includes production Android applications, connected web
                experiences, SaaS systems, backend APIs, store releases, and product
                sites. These are working examples, not speculative mockups.
              </p>
              <Link
                href="/work"
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
              >
                Explore all products and applications
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>

            <div className="grid gap-4">
              {examples.map((example) => (
                <Link key={example.href} href={example.href} className="group block rounded-2xl">
                  <GlassCard className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl">
                    <h3 className="text-xl font-semibold">{example.title}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">{example.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                      {example.linkLabel}
                      <ArrowRight size={15} aria-hidden />
                    </span>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 border-y border-white/15 py-9" aria-labelledby="software-solutions">
          <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">Start from your situation</div>
              <h2 id="software-solutions" className="mt-2 text-2xl font-semibold md:text-3xl">Not sure what type of software you need?</h2>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Explore practical guidance for business apps, spreadsheet-heavy workflows, mobile companions, MVP scope, modernization, backend integration, and software cost.</p>
            </div>
            <Link href="/solutions" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium transition hover:bg-white/10">Explore software solutions<ArrowRight size={17} aria-hidden /></Link>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">Start with the problem</div>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Need a new application or a stronger existing product?
              </h2>
              <p className="mt-3 max-w-2xl text-[var(--muted)]">
                Share the users, workflow, integrations, and release goal. We can
                discuss a focused MVP, a production build, or additional engineering
                capacity for an existing system.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"
            >
              <MessageSquare size={17} aria-hidden />
              Start a project discussion
            </Link>
          </div>
        </section>
      </div>
      <ClientActiveNav />
    </main>
  );
}
