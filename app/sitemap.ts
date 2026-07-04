// app/sitemap.ts
import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fullstackdev.kz"; // no trailing slash
  const routes = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/work",
    "/blog",
    "/stack",
    "/work/uniscan",
    "/work/uniscan/privacy",
    "/work/iskra",
    "/work/iskra/privacy",
    "/work/todo",
    "/work/todo/privacy",
    "/work/expense",
    "/work/expense/privacy",
    "/work/habit",
    "/work/habit/privacy",
    "/work/meditation",
    "/work/meditation/privacy",
  ];

  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...routes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
  }));
}
