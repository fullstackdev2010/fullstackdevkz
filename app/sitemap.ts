import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogPosts";
import { SITE_URL } from "@/lib/site";

const CORE_ROUTES = [
  "/",
  "/services",
  "/work",
  "/blog",
  "/about",
  "/contact",
  "/stack",
  "/partners",
  "/partners/samuel-cascadia",
] as const;

const PRODUCT_ROUTES = [
  "/work/tradesmate",
  "/work/come-together",
  "/work/pubplay",
  "/work/studyflow",
  "/work/uniscan",
  "/work/iskra",
  "/work/todo",
  "/work/expense",
  "/work/habit",
  "/work/meditation",
] as const;

const POLICY_ROUTES = [
  "/work/tradesmate/privacy",
  "/work/come-together/privacy",
  "/work/pubplay/privacy",
  "/work/studyflow/privacy",
  "/work/uniscan/privacy",
  "/work/iskra/privacy",
  "/work/todo/privacy",
  "/work/expense/privacy",
  "/work/habit/privacy",
  "/work/meditation/privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    ...CORE_ROUTES,
    ...PRODUCT_ROUTES,
    ...POLICY_ROUTES,
  ].map((path) => ({
    url: new URL(path, SITE_URL).toString(),
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, SITE_URL).toString(),
    lastModified: new Date(`${post.date}T00:00:00.000Z`),
  }));

  return [...staticRoutes, ...blogRoutes];
}
