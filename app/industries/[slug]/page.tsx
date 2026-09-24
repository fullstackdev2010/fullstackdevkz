import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryLandingPage from "@/components/industries/IndustryLandingPage";
import { getIndustryPage, industryPages } from "@/lib/industryPages";
import { buildPageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return industryPages.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryPage(slug);
  if (!industry) return {};
  return buildPageMetadata({ title: industry.title, description: industry.description, path: `/industries/${industry.slug}` });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryPage(slug);
  if (!industry) notFound();
  return <IndustryLandingPage industry={industry} />;
}
