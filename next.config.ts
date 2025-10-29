// next.config.ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Enable MDX in /app, but render without MDXProvider (no client context in Server Components)
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Prevent @mdx-js/react provider injection; keeps MDX server-safe
    providerImportSource: null,
  },
});

const nextConfig: NextConfig = {
  experimental: {},
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);