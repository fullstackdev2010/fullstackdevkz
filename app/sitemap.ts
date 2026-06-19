// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fullstackdev.kz"; // no trailing slash
  const routes = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/work",
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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
  }));
}
