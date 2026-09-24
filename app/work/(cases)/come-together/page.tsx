import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BellRing,
  CalendarDays,
  ExternalLink,
  Globe2,
  Languages,
  ShieldCheck,
  Smartphone,
  Trash2,
  UserCheck,
  Users,
} from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { GlassCard } from "@/components/ui/GlassCard";
import { QualityBadge } from "@/components/ui/QualityBadge";
import ProductBreadcrumbs, { productBreadcrumbJsonLd } from "@/components/work/ProductBreadcrumbs";
import ProductDevelopmentBridge from "@/components/work/ProductDevelopmentBridge";
import { SITE_URL } from "@/lib/site";

const title = "Come Together: Local Clubs Platform";
const description =
  "A connected web and Android platform for local club organizers to publish events, manage bookings and waitlists, track attendance, and encourage repeat visits.";
const metadataTitle = "Come Together — Local Club Management Platform";
const liveUrl = "https://hellolocalclubs.com";

export const metadata: Metadata = {
  title: metadataTitle,
  description,
  alternates: { canonical: "/work/come-together" },
  keywords: [
    "local clubs platform",
    "club event management software",
    "community event booking",
    "club organizer app",
    "event waitlist software",
    "Android organizer app",
    "local community platform",
  ],
  openGraph: {
    title: metadataTitle,
    description,
    url: "/work/come-together",
    type: "article",
    images: [
      {
        url: "/demos/preview/come-together.png",
        width: 1024,
        height: 500,
        alt: "Come Together local clubs platform overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description,
    images: ["/demos/preview/come-together.png"],
  },
};

const platformParts = [
  {
    icon: Globe2,
    title: "Public club pages",
    text: "Members discover a club, browse published events, see local dates and prices, and book a place from the web.",
  },
  {
    icon: CalendarDays,
    title: "Organizer workspace",
    text: "Hosts create clubs and events, upload imagery, set capacity, review guests, duplicate events, and monitor retention.",
  },
  {
    icon: Smartphone,
    title: "Android companion",
    text: "Organizers carry upcoming events and guest lists on the day, record attendance, and receive operational notifications.",
  },
];

const mobileScreens = [
  {
    src: "/demos/come-together/01.jpg",
    alt: "Come Together Android organizer sign-in screen with language selector",
    caption: "Secure organizer access",
  },
  {
    src: "/demos/come-together/02.jpg",
    alt: "Come Together Android dashboard showing a club and upcoming event",
    caption: "Upcoming events and language controls",
  },
  {
    src: "/demos/come-together/03.jpg",
    alt: "Come Together Android guest list with attendance status",
    caption: "Guest and attendance management",
  },
];

const capabilities = [
  {
    icon: Users,
    title: "Clubs with a public identity",
    text: "Each organizer can publish a branded club profile with location, description, imagery, and a clear list of upcoming gatherings.",
  },
  {
    icon: UserCheck,
    title: "Capacity-aware booking",
    text: "Confirmed places respect event capacity. When an event fills, later guests join an ordered waitlist and can be promoted after a cancellation.",
  },
  {
    icon: BellRing,
    title: "Useful event communication",
    text: "Confirmation, reminder, promotion, cancellation, and repeat-booking messages keep guests informed without requiring a member app.",
  },
  {
    icon: Languages,
    title: "Four mobile languages",
    text: "The Android companion supports English, German, French, and Spanish, with automatic device-language detection and regional date formatting.",
  },
];

const workflow = [
  "Create the club profile, location, time zone, currency, description, and imagery.",
  "Publish an event with a venue, local schedule, capacity, description, and public booking page.",
  "Let guests book online while the platform keeps confirmed places and the waitlist in order.",
  "Use the Android companion at the venue to review guests and record attendance.",
  "Follow returning attendance and invite eligible guests to the club's next event.",
];

const faqs = [
  {
    question: "Do guests need the Android app?",
    answer:
      "No. The Android companion is for organizers. Guests use responsive public club and event pages in their browser.",
  },
  {
    question: "What happens when an event is full?",
    answer:
      "New bookings join an ordered waitlist. If a confirmed guest cancels, the first waiting guest can be promoted and notified.",
  },
  {
    question: "Can organizers use the same account on web and Android?",
    answer:
      "Yes. The companion loads the organizer's clubs, upcoming events, recent events, and guest data from the same service used by the website.",
  },
  {
    question: "Does the current pilot process paid checkout?",
    answer:
      "No. The pilot models local currencies and event prices, but paid-event checkout is outside the current tested release.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: title,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android",
      description,
      url: `${SITE_URL}/work/come-together`,
      sameAs: [liveUrl],
      featureList: [
        "Public club and event pages",
        "Event booking and ordered waitlists",
        "Organizer web dashboard",
        "Android guest and attendance management",
        "Event confirmations and reminders",
        "Repeat-attendance insights",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    productBreadcrumbJsonLd("come-together", "Come Together"),
  ],
};

function SectionHeading({ eyebrow, heading, text }: { eyebrow: string; heading: string; text: string }) {
  return (
    <div className="mb-6 max-w-3xl">
      <div className="text-sm font-medium text-[var(--accent)]">{eyebrow}</div>
      <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{heading}</h2>
      <p className="mt-3 text-[var(--muted)]">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12">
        <ProductBreadcrumbs slug="come-together" productName="Come Together" />
        <section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
            backgroundSrc="/brand/work.webp"
            viewBox="0 0 1600 900"
            photos={[]}
          />
          <div className="absolute inset-0">
            <MeshBackground
              brightness={0.82}
              opacity={0.94}
              seed="come-together-local-clubs"
              palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]}
              static
            />
          </div>

          <div className="relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-start gap-4">
                <QualityBadge size="md" className="mt-1 hidden sm:block" />
                <div>
                  <div className="text-sm font-medium text-[var(--accent)]">
                    Local events platform · Web + Android
                  </div>
                  <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                    {title}
                  </h1>
                </div>
              </div>
              <p className="mt-5 max-w-3xl text-lg text-[var(--muted)]">
                Give independent clubs one place to publish gatherings, manage bookings and attendance,
                and build the repeat rhythm that turns strangers into regulars.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"
                >
                  <ExternalLink size={17} aria-hidden />
                  Visit live platform
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium transition hover:bg-white/10"
                >
                  Discuss a community platform
                  <ArrowRight size={17} aria-hidden />
                </Link>
              </div>
            </div>

            <div className="mt-9 overflow-hidden rounded-2xl border border-white/15 bg-black/20 shadow-2xl">
              <Image
                src="/demos/preview/come-together.png"
                alt="Come Together brings local clubs, classes, and community gatherings into one platform"
                width={1024}
                height={500}
                className="h-auto w-full"
                unoptimized
                priority
              />
            </div>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="One connected service"
            heading="The public website fills the room. The organizer tools run it."
            text="Come Together gives members and hosts different interfaces while keeping every club, event, booking, and attendance update connected."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {platformParts.map(({ icon: Icon, title: itemTitle, text }) => (
              <GlassCard key={itemTitle} className="h-full">
                <Icon className="text-[var(--accent)]" size={28} aria-hidden />
                <h3 className="mt-4 text-xl font-semibold">{itemTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{text}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Public web experience"
            heading="A clear front door for every club and event"
            text="Responsive pages make local gatherings discoverable and give guests the details and booking action they need before leaving home."
          />
          <figure>
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/25 shadow-[var(--shadow-md)]">
              <Image
                src="/demos/come-together/web.png"
                alt="Come Together website showing local club discovery, event activity, and organizer calls to action"
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--muted)]">
              Public discovery and organizer acquisition share one web platform.
            </figcaption>
          </figure>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Android organizer companion"
            heading="The event list and guest status travel with the host"
            text="The mobile companion is intentionally operational: sign in, see what is next, open an event, review guests, and record attendance at the venue."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {mobileScreens.map((screen) => (
              <figure key={screen.src} className="mx-auto w-full max-w-[330px]">
                <DeviceFrame
                  platform="android"
                  src={screen.src}
                  alt={screen.alt}
                  width={300}
                  height={650}
                  contentScale={1}
                />
                <figcaption className="mt-3 text-center text-sm text-[var(--muted)]">
                  {screen.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Designed for return visits"
            heading="Operational details that protect the guest experience"
            text="The platform handles the less glamorous parts of a recurring event so organizers can focus on the people in the room."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map(({ icon: Icon, title: itemTitle, text }) => (
              <GlassCard key={itemTitle} className="h-full">
                <Icon className="text-[var(--accent)]" size={28} aria-hidden />
                <h3 className="mt-4 text-xl font-semibold">{itemTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{text}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="A complete event loop"
              heading="From first listing to the next invitation"
              text="Every step uses the same club and event record, reducing duplicated work between promotion, booking, and day-of-event administration."
            />
            <GlassCard>
              <ol className="space-y-5">
                {workflow.map((step, index) => (
                  <li key={step} className="grid grid-cols-[2.25rem_1fr] gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 font-semibold">
                      {index + 1}
                    </span>
                    <p className="pt-1.5 text-sm leading-6 text-[var(--muted)]">{step}</p>
                  </li>
                ))}
              </ol>
            </GlassCard>
          </div>
          <div>
            <SectionHeading
              eyebrow="Full-stack delivery"
              heading="Built as a real connected product"
              text="The public marketplace, organizer dashboard, mobile companion, and notification workflows share one service boundary."
            />
            <GlassCard>
              <dl className="space-y-5 text-sm">
                <div><dt className="font-semibold">Web</dt><dd className="mt-1 text-[var(--muted)]">Next.js App Router and responsive public pages</dd></div>
                <div><dt className="font-semibold">Mobile</dt><dd className="mt-1 text-[var(--muted)]">Expo, React Native, TypeScript, and Android notifications</dd></div>
                <div><dt className="font-semibold">Backend</dt><dd className="mt-1 text-[var(--muted)]">FastAPI, SQLAlchemy, PostgreSQL, and scheduled reminders</dd></div>
                <div><dt className="font-semibold">Media</dt><dd className="mt-1 text-[var(--muted)]">Browser-side image cropping with optimized WebP variants</dd></div>
              </dl>
            </GlassCard>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading
            eyebrow="Common questions"
            heading="How the pilot works"
            text="The current scope is focused on proving the organizer and guest journey for real local events."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <GlassCard key={faq.question} className="h-full">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <ProductDevelopmentBridge
          eyebrow="What Come Together demonstrates"
          title="Building a platform around organizers, guests, and recurring events"
          description="Come Together demonstrates public discovery, organizer administration, capacity-aware booking, ordered waitlists, attendance, notifications, media handling, localization, and a connected Android companion on one SaaS backend."
          services={[{ href: "/services/saas-development", label: "SaaS Development" }, { href: "/services/web-app-development", label: "Web Application Development" }, { href: "/services/mobile-app-development", label: "Mobile App Development" }, { href: "/services/backend-api-development", label: "Backend & API Development" }]}
          contactIntent="saas-development"
        />

        <section className="mt-10 border-t border-white/15 pt-5" aria-labelledby="come-together-solution">
          <div className="max-w-3xl">
            <div className="text-sm font-medium text-[var(--accent)]">Extending a platform beyond the browser?</div>
            <h2 id="come-together-solution" className="mt-2 text-xl font-semibold">Plan a mobile companion around shared accounts and workflows</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Come Together demonstrates public web and Android experiences connected through shared club, event, booking, capacity, and attendance data.</p>
            <Link href="/solutions/mobile-app-for-existing-web-platform" className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:underline">Explore the mobile companion decision guide<ArrowRight size={15} aria-hidden /></Link>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">Bring local life online</div>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Build the tools that help people show up in person.
              </h2>
              <p className="mt-3 max-w-2xl text-[var(--muted)]">
                Explore the live pilot or discuss a web and Android platform for your own community,
                events, or membership workflow.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"
              >
                <ExternalLink size={17} aria-hidden />
                Open platform
              </a>
              <Link
                href="/contact?intent=saas-development"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium transition hover:bg-white/10"
              >
                Start a conversation
                <ArrowRight size={17} aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-10 border-t border-white/15 pt-5" aria-labelledby="come-together-industry">
          <div className="max-w-3xl"><div className="text-sm font-medium text-[var(--accent)]">Industry workflow context</div><h2 id="come-together-industry" className="mt-2 text-xl font-semibold">Software for clubs and member organizations</h2><p className="mt-2 text-sm leading-6 text-[var(--muted)]">See how public discovery, booking, capacity, waitlists, attendance, organizer tools, and mobile access form a connected platform.</p><Link href="/industries/clubs-member-organizations" className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:underline">Explore the club platform guide<ArrowRight size={15} aria-hidden /></Link></div>
        </section>

        <nav aria-label="Product navigation" className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
            >
              <ArrowLeft size={16} aria-hidden />
              Back to Work
            </Link>
            <Link
              href="/services/saas-development"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
            >
              SaaS development services
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="/work/come-together/privacy"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
            >
              <ShieldCheck size={16} aria-hidden />
              Privacy Policy
            </Link>
            <Link
              href="/work/come-together/delete"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
            >
              <Trash2 size={16} aria-hidden />
              Delete account and data
            </Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
