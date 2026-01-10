// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/", // prevent indexing of API routes like /api/og
      },
    ],
    sitemap: "https://www.fullstackdev.kz/sitemap.xml",
  };
}
