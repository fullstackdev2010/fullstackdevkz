// app/contact/layout.tsx
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Tell Us About Your Software Project",
  description:
    "Contact FullStack Dev KZ about a mobile app, web application, SaaS product, backend API, MVP, or existing software product.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
