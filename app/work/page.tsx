// app/work/page.tsx
import MeshBackground from "@/components/mesh/MeshBackground";
import MeshWithPhotoInsets from "@/components/visuals/MeshWithPhotoInsets";
import CaseCard from "@/components/work/CaseCard";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { buildPageMetadata } from "@/lib/site";
import { workProducts } from "@/lib/workProducts";

const platformCases = workProducts.filter((product) => product.priority === "platform");
const applicationCases = workProducts.filter((product) => product.priority === "application");

export const metadata = buildPageMetadata({
  title: "Mobile, Web & SaaS Projects",
  description:
    "Explore production mobile apps, SaaS platforms, web systems, and business software built and shipped by FullStack Dev KZ.",
  path: "/work",
});

export default function Work() {
  return (
    <main className="relative isolate">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-18">
        {/* Rounded glass container with mesh */}
        <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 md:p-16 border glass">

          {/* Mesh background */}
          <MeshWithPhotoInsets
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-[800px]"
            backgroundSrc="/brand/work.webp"
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

          {/* Content */}
          <div className="relative z-10 min-w-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Products, platforms &amp; shipped applications
            </h1>

            <p className="mt-4 max-w-3xl text-[var(--muted)]">
              Production software built across Android, web, SaaS, and backend APIs.
              These products show how FullStack Dev KZ handles complete workflows,
              connected systems, release delivery, and practical interface design.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
              >
                Explore development services
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                href="/contact"
                data-cta="discuss-project"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-4 py-2 text-sm transition hover:bg-white/25"
              >
                <MessageSquare size={16} aria-hidden />
                Discuss Your Project
              </Link>
            </div>

            <div className="mt-8 h-px w-full bg-white/10" />

            <section className="mt-8 md:mt-10">
              <div className="max-w-3xl">
                <div className="text-sm font-medium text-[var(--accent)]">Connected systems</div>
                <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Products &amp; platforms</h2>
                <p className="mt-3 text-[var(--muted)]">
                  Commercial software with mobile, web, backend, and operational parts
                  designed to work together as one product.
                </p>
              </div>

              <div className="mt-6 grid min-w-0 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {platformCases.map((product) => (
                  <CaseCard key={product.slug} {...product} href={`/work/${product.slug}`} />
                ))}
              </div>
            </section>

            <section className="mt-14">
              <div className="max-w-3xl">
                <div className="text-sm font-medium text-[var(--accent)]">Google Play releases</div>
                <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Shipped Android applications</h2>
                <p className="mt-3 text-[var(--muted)]">
                  Focused applications spanning study, document scanning, productivity,
                  finance, habits, meditation, and mobile sales workflows.
                </p>
              </div>
              <div className="mt-6 grid min-w-0 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {applicationCases.map((product) => (
                  <CaseCard key={product.slug} {...product} href={`/work/${product.slug}`} />
                ))}
              </div>
            </section>

            <section className="mt-14 border-t border-white/15 pt-9">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="text-sm font-medium text-[var(--accent)]">From evidence to your workflow</div>
                  <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Need something similar?</h2>
                  <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Bring the users, workflow, current systems, and release goal. The first conversation can establish whether the right next step is discovery, a focused build, or work on an existing product.</p>
                </div>
                <Link href="/contact" data-cta="discuss-project" className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/25">
                  <MessageSquare size={17} aria-hidden />Discuss Your Project
                </Link>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
