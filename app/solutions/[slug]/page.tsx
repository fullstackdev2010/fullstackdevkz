import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionLandingPage from "@/components/solutions/SolutionLandingPage";
import { getSolutionPage, solutionPages } from "@/lib/solutionPages";
import { buildPageMetadata } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutionPages.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionPage(slug);
  if (!solution) return {};
  return buildPageMetadata({
    title: solution.title,
    description: solution.description,
    path: `/solutions/${solution.slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionPage(slug);
  if (!solution) notFound();
  return <SolutionLandingPage solution={solution} />;
}
