import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  FileText,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Trash2,
  Users,
} from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { GlassCard } from "@/components/ui/GlassCard";
import { QualityBadge } from "@/components/ui/QualityBadge";
import { TRADESMATE_PLAY_URL, TRADESMATE_SITE_URL } from "@/lib/constants";

const title = "TradesMate: Jobs, Quotes & Invoices";
const description =
  "Android business management for tradespeople: schedule jobs, manage customers, create quotes and invoices, record costs and payments, and understand profit.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work/tradesmate" },
  keywords: [
    "tradesperson job management app",
    "quote and invoice app Android",
    "trade business software",
    "job scheduling for tradespeople",
    "customer management app for trades",
    "small business expense tracker",
  ],
  openGraph: {
    title,
    description,
    url: "/work/tradesmate",
    type: "article",
    images: [{
      url: "/demos/preview/tradesmate.png",
      width: 1024,
      height: 500,
      alt: "TradesMate jobs, quotes, and invoices overview",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/demos/preview/tradesmate.png"],
  },
};

const mobileScreens = [
  { src: "/demos/tradesmate/01.jpg", alt: "TradesMate dashboard with paid revenue, outstanding balance, profit, and upcoming jobs", caption: "Business performance and next jobs" },
  { src: "/demos/tradesmate/02.jpg", alt: "TradesMate Android job schedule with upcoming and completed work", caption: "Job scheduling in the field" },
  { src: "/demos/tradesmate/03.jpg", alt: "TradesMate customer directory with call, email, and WhatsApp actions", caption: "Customers and direct contact" },
  { src: "/demos/tradesmate/04.jpg", alt: "TradesMate finance screen with quotes, invoices, expenses, and overdue balance", caption: "Quotes, invoices, costs, and overdue work" },
];

const capabilities = [
  { icon: CalendarDays, title: "Jobs stay visible", text: "Schedule work, attach customers, follow status, and keep the next appointments close at hand." },
  { icon: Users, title: "Customer details in context", text: "Keep the contact record beside the work and reach customers by phone, email, or WhatsApp." },
  { icon: FileText, title: "Quotes become invoices", text: "Prepare itemised documents with tax and totals, then follow payment and outstanding balances." },
  { icon: ReceiptText, title: "Costs meet revenue", text: "Record job-linked expenses and review invoiced, paid, outstanding, and profit totals by currency." },
];

const workflow = [
  "Create the business account and add the customer who requested the work.",
  "Schedule the job with its date, status, address, assignee, and reminder.",
  "Prepare a quote with line items, tax, currency, notes, and a calculated total.",
  "Convert approved work into an invoice and record payments as they arrive.",
  "Capture costs and review paid revenue, outstanding balances, overdue invoices, and profit.",
];

const faqs = [
  { question: "Who is TradesMate for?", answer: "TradesMate is designed for independent tradespeople and small service teams that manage customers, appointments, quotes, invoices, payments, and costs." },
  { question: "Can it manage more than one currency?", answer: "Yes. GBP, USD, and EUR records are reported separately so historical documents keep their original currency." },
  { question: "Can staff members use the business account?", answer: "The connected service includes a team directory and owner or admin workflows for creating team members and assigning work." },
  { question: "Is TradesMate only an invoice app?", answer: "No. Invoicing is part of a wider job workflow that also includes customers, scheduling, quotes, expenses, payments, reminders, and business reporting." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "TradesMate",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android",
      description,
      url: "https://www.fullstackdev.kz/work/tradesmate",
      sameAs: [TRADESMATE_SITE_URL, TRADESMATE_PLAY_URL],
      featureList: ["Job scheduling", "Customer management", "Quotes and invoices", "Payment tracking", "Expense capture", "Multi-currency business reporting"],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    },
  ],
};

function SectionHeading({ eyebrow, heading, text }: { eyebrow: string; heading: string; text: string }) {
  return <div className="mb-6 max-w-3xl"><div className="text-sm font-medium text-[var(--accent)]">{eyebrow}</div><h2 className="mt-2 text-2xl font-semibold md:text-3xl">{heading}</h2><p className="mt-3 text-[var(--muted)]">{text}</p></div>;
}

export default function Page() {
  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12">
        <section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <MeshWithPhotoInsets className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]" backgroundSrc="/brand/work.webp" viewBox="0 0 1600 900" photos={[]} />
          <div className="absolute inset-0"><MeshBackground brightness={0.76} opacity={0.93} seed="tradesmate-business" palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]} static /></div>
          <div className="relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-start gap-4"><QualityBadge size="md" className="mt-1 hidden sm:block" /><div><div className="text-sm font-medium text-[var(--accent)]">Business administration · Android + FastAPI</div><h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">{title}</h1></div></div>
              <p className="mt-5 max-w-3xl text-lg text-[var(--muted)]">Keep the commercial side of every job together, from the first customer call and appointment to the quote, invoice, payment, cost, and final profit.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={TRADESMATE_SITE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"><ExternalLink size={17} aria-hidden />Visit TradesMate</a>
                <a href={TRADESMATE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium transition hover:bg-white/10"><Smartphone size={17} aria-hidden />Google Play</a>
              </div>
            </div>
            <div className="mt-9 overflow-hidden rounded-2xl border border-white/15 bg-black/20 shadow-2xl">
              <Image src="/demos/tradesmate/feature-graphic-en.png" alt="TradesMate - jobs, quotes, and invoices sorted" width={1024} height={500} className="h-auto w-full" priority />
            </div>
          </div>
        </section>

        <section className="mt-14"><SectionHeading eyebrow="Business admin without the office" heading="One operational record from enquiry to payment" text="TradesMate connects the parts of a working day that otherwise end up split between calendars, contacts, documents, messages, and spreadsheets." /><div className="grid gap-4 md:grid-cols-2">{capabilities.map(({ icon: Icon, title: itemTitle, text }) => <GlassCard key={itemTitle} className="h-full"><Icon className="text-[var(--accent)]" size={28} aria-hidden /><h3 className="mt-4 text-xl font-semibold">{itemTitle}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{text}</p></GlassCard>)}</div></section>

        <section className="mt-14"><SectionHeading eyebrow="Dedicated product website" heading="A focused sales surface for working tradespeople" text="The product website explains the practical value before sending visitors to Google Play or a guided walkthrough." /><figure><div className="overflow-hidden rounded-2xl border border-white/15 bg-black/25 shadow-[var(--shadow-md)]"><Image src="/demos/tradesmate/website.png" alt="TradesMate website showing business dashboard, jobs, and product calls to action" width={1600} height={900} className="h-auto w-full" /></div><figcaption className="mt-3 text-sm text-[var(--muted)]">TradesMate&apos;s dedicated website carries the product campaign; this page documents the engineering and workflow behind it.</figcaption></figure></section>

        <section className="mt-14"><SectionHeading eyebrow="Android field companion" heading="The working day fits in one clear navigation" text="The supplied screens show the core loop: review the business, schedule the work, contact the customer, and keep the paperwork current." /><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{mobileScreens.map((screen) => <figure key={screen.src} className="mx-auto w-full max-w-[300px]"><DeviceFrame platform="android" src={screen.src} alt={screen.alt} width={270} height={480} contentScale={1} /><figcaption className="mt-3 text-center text-sm text-[var(--muted)]">{screen.caption}</figcaption></figure>)}</div></section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"><div><SectionHeading eyebrow="A complete job loop" heading="Each step builds on the last" text="Customer, job, document, payment, and cost records stay connected, reducing repeated entry and making financial status easier to understand." /><GlassCard><ol className="space-y-5">{workflow.map((step, index) => <li key={step} className="grid grid-cols-[2.25rem_1fr] gap-3"><span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 font-semibold">{index + 1}</span><p className="pt-1.5 text-sm leading-6 text-[var(--muted)]">{step}</p></li>)}</ol></GlassCard></div><div><SectionHeading eyebrow="Connected delivery" heading="Android, API, data, and subscriptions" text="TradesMate is a live full-stack product with secure accounts and operational data rather than a standalone interface prototype." /><GlassCard><dl className="space-y-5 text-sm"><div><dt className="flex items-center gap-2 font-semibold"><Smartphone size={18} aria-hidden />Android</dt><dd className="mt-1 text-[var(--muted)]">Expo, React Native, TypeScript, secure token storage, and push reminders</dd></div><div><dt className="flex items-center gap-2 font-semibold"><BriefcaseBusiness size={18} aria-hidden />Backend</dt><dd className="mt-1 text-[var(--muted)]">FastAPI, SQLAlchemy, PostgreSQL, authentication, and business-scoped records</dd></div><div><dt className="flex items-center gap-2 font-semibold"><Banknote size={18} aria-hidden />Commerce</dt><dd className="mt-1 text-[var(--muted)]">RevenueCat entitlement management with Google Play billing</dd></div><div><dt className="flex items-center gap-2 font-semibold"><ShieldCheck size={18} aria-hidden />Data care</dt><dd className="mt-1 text-[var(--muted)]">HTTPS transport, hashed passwords, protected mobile credentials, and account deletion support</dd></div></dl></GlassCard></div></section>

        <section className="mt-14"><SectionHeading eyebrow="Common questions" heading="What TradesMate is designed to handle" text="The product stays focused on the commercial workflow around practical service work." /><div className="grid gap-4 md:grid-cols-2">{faqs.map((faq) => <GlassCard key={faq.question} className="h-full"><h3 className="text-lg font-semibold">{faq.question}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{faq.answer}</p></GlassCard>)}</div></section>

        <section className="mt-14 rounded-3xl border glass p-6 sm:p-8 md:p-10"><div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center"><div><div className="text-sm font-medium text-[var(--accent)]">Your jobs. Your customers. Sorted.</div><h2 className="mt-2 text-2xl font-semibold md:text-3xl">Spend less time rebuilding the paperwork around every job.</h2><p className="mt-3 max-w-2xl text-[var(--muted)]">Explore the dedicated TradesMate website, get the Android app, or discuss a connected business platform with Fullstack Dev KZ.</p></div><div className="flex flex-wrap gap-3 md:justify-end"><a href={TRADESMATE_SITE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25"><ExternalLink size={17} aria-hidden />Open TradesMate</a><Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium transition hover:bg-white/10">Discuss a business app<ArrowRight size={17} aria-hidden /></Link></div></div></section>

        <nav aria-label="Product navigation" className="mt-16 border-t border-white/10 pt-8"><div className="flex flex-wrap gap-3"><Link href="/work" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"><ArrowLeft size={16} aria-hidden />Back to Work</Link><Link href="/work/tradesmate/privacy" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"><ShieldCheck size={16} aria-hidden />Privacy Policy</Link><Link href="/work/tradesmate/delete" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"><Trash2 size={16} aria-hidden />Delete account and data</Link></div></nav>
      </div>
    </main>
  );
}
