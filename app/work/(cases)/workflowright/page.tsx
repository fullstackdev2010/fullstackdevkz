import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  Files,
  ListTodo,
  MessageSquare,
  Workflow,
} from "lucide-react";
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import { GlassCard } from "@/components/ui/GlassCard";
import { QualityBadge } from "@/components/ui/QualityBadge";
import ProductBreadcrumbs, { productBreadcrumbJsonLd } from "@/components/work/ProductBreadcrumbs";
import ProductDevelopmentBridge from "@/components/work/ProductDevelopmentBridge";
import { WORKFLOWRIGHT_SITE_URL } from "@/lib/constants";
import { ORGANIZATION_ID, SITE_URL, buildPageMetadata } from "@/lib/site";

const title = "WorkflowRight: Business Process Platform";
const description =
  "WorkflowRight gives teams one place for applications, records, approvals, and tasks, with tenant-separated workspaces developed by FullStack Dev KZ.";

export const metadata = buildPageMetadata({
  title: "WorkflowRight Software Development Case Study",
  description,
  path: "/work/workflowright",
  type: "article",
});

const capabilities = [
  {
    icon: Files,
    title: "Applications and records",
    text: "Keep operational applications and their records within the workspace where the team uses them.",
  },
  {
    icon: ClipboardCheck,
    title: "Approvals and decisions",
    text: "Give decisions a visible place in the process instead of leaving their status across separate conversations.",
  },
  {
    icon: ListTodo,
    title: "Clear next actions",
    text: "Connect tasks to the work they move forward so teams can see what needs attention next.",
  },
  {
    icon: Workflow,
    title: "Separate tenant workspaces",
    text: "Each tenant keeps its applications, people, and data separate while using the same product surface.",
  },
];

const faqs = [
  {
    question: "What is WorkflowRight?",
    answer: "WorkflowRight is a web-based business process platform for organizing applications, records, approvals, and tasks in connected workspaces.",
  },
  {
    question: "Who is it designed for?",
    answer: "It is designed for teams that need a clearer operational record and a visible next step across repeatable internal processes.",
  },
  {
    question: "How are organizations separated?",
    answer: "The product uses tenant workspaces so each tenant keeps its applications, people, and data separate.",
  },
  {
    question: "What did FullStack Dev KZ develop?",
    answer: "FullStack Dev KZ developed WorkflowRight as a multi-tenant business workflow product, including its public product surface and tenant-based application experience.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${SITE_URL}/work/workflowright#software`,
      name: "WorkflowRight",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description,
      url: `${SITE_URL}/work/workflowright`,
      sameAs: [WORKFLOWRIGHT_SITE_URL],
      creator: { "@id": ORGANIZATION_ID },
      featureList: [
        "Tenant-separated workspaces",
        "Applications and records",
        "Approval workflows",
        "Task tracking",
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
    productBreadcrumbJsonLd("workflowright", "WorkflowRight"),
  ],
};

function SectionHeading({ eyebrow, heading, text }: { eyebrow: string; heading: string; text: string }) {
  return (
    <div className="mb-6 max-w-3xl">
      <div className="text-sm font-medium text-[var(--accent)]">{eyebrow}</div>
      <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{heading}</h2>
      <p className="mt-3 leading-7 text-[var(--muted)]">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12">
        <ProductBreadcrumbs slug="workflowright" productName="WorkflowRight" />

        <section className="relative overflow-hidden rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <MeshWithPhotoInsets className="pointer-events-none absolute inset-0 z-0 h-full min-h-[720px]" backgroundSrc="/brand/work.webp" viewBox="0 0 1600 900" photos={[]} />
          <div className="absolute inset-0">
            <MeshBackground brightness={0.79} opacity={0.94} seed="workflowright-process" palette={["#7AA2FF", "#8DF2D6", "#FFB3EC"]} static />
          </div>
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="flex items-start gap-4">
                <QualityBadge size="md" className="mt-1 hidden sm:block" />
                <div>
                  <div className="text-sm font-medium text-[var(--accent)]">Business workflow platform · Web application</div>
                  <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">{title}</h1>
                </div>
              </div>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                Give every process a clear next step by keeping applications, records, approvals, and tasks in one tenant-separated workspace.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--muted)]">
                WorkflowRight is developed by FullStack Dev KZ as a production business software product.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={WORKFLOWRIGHT_SITE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25">
                  <ExternalLink size={17} aria-hidden />Visit WorkflowRight
                </a>
                <Link href="/contact?intent=custom-business-software" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-medium transition hover:bg-white/10">
                  Discuss a workflow platform<ArrowRight size={17} aria-hidden />
                </Link>
              </div>
            </div>

            <div className="border-y border-white/15 py-6 lg:border-y-0 lg:border-l lg:py-2 lg:pl-8">
              <div className="text-sm font-medium text-[var(--accent)]">Your work, connected</div>
              <ol className="mt-5 space-y-3" aria-label="WorkflowRight process surfaces">
                {["Application", "Record", "Approval", "Task"].map((step, index) => (
                  <li key={step} className="flex items-center gap-4 rounded-lg border border-white/15 bg-black/10 px-4 py-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-sm font-semibold">{index + 1}</span>
                    <span className="font-medium">{step}</span>
                    {index < 3 ? <ArrowRight className="ml-auto text-[var(--accent)]" size={17} aria-hidden /> : <CheckCircle2 className="ml-auto text-[var(--accent)]" size={17} aria-hidden />}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <SectionHeading eyebrow="The business problem" heading="Decisions and next actions need one operational context" text="When applications, records, approvals, and tasks sit in separate tools, teams spend time rebuilding context and checking which action is current. WorkflowRight brings those parts into one workspace." />
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

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="FullStack Dev KZ role" heading="Developed as a real product, not a demonstration page" text="The company developed the WorkflowRight public product presence and its tenant-based web application experience around the same operational proposition." />
          </div>
          <GlassCard>
            <ul className="space-y-4 text-sm leading-6 text-[var(--muted)]">
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-[var(--accent)]" size={18} aria-hidden /><span>Product positioning around connected applications, records, approvals, and tasks.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-[var(--accent)]" size={18} aria-hidden /><span>Tenant workspaces that separate the applications, people, and data of each organization.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-[var(--accent)]" size={18} aria-hidden /><span>A browser-based product surface that moves visitors from the product website into the application.</span></li>
            </ul>
          </GlassCard>
        </section>

        <section className="mt-14">
          <SectionHeading eyebrow="Common questions" heading="How WorkflowRight is positioned" text="The current public product focuses on clear process ownership and tenant-separated work." />
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
          eyebrow="What WorkflowRight demonstrates"
          title="Building business software around repeatable operational work"
          description="WorkflowRight demonstrates how tenant separation, operational records, approvals, tasks, and a clear next-action model can form one focused business platform."
          services={[{ href: "/services/custom-business-software", label: "Custom Business Software" }, { href: "/services/web-app-development", label: "Web Application Development" }, { href: "/services/saas-development", label: "SaaS Development" }]}
          contactIntent="custom-business-software"
        />

        <section className="mt-14 rounded-3xl border glass p-6 sm:p-8 md:p-10">
          <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm font-medium text-[var(--accent)]">See the product</div>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Explore the WorkflowRight public product website.</h2>
              <p className="mt-3 max-w-2xl text-[var(--muted)]">The product website presents WorkflowRight for teams; this page records the product and development relationship with FullStack Dev KZ.</p>
            </div>
            <a href={WORKFLOWRIGHT_SITE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25">
              <ExternalLink size={17} aria-hidden />Visit WorkflowRight
            </a>
          </div>
        </section>

        <nav aria-label="Product navigation" className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/work" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"><ArrowLeft size={16} aria-hidden />Back to Work</Link>
            <Link href="/services/custom-business-software" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10">Business software development<ArrowRight size={16} aria-hidden /></Link>
            <Link href="/contact?intent=custom-business-software" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20"><MessageSquare size={16} aria-hidden />Discuss Your Project</Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
