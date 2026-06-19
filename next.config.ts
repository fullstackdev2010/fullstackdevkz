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
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  turbopack: {},
};

const config = withMDX(nextConfig);

if (config.experimental && "turbo" in config.experimental) {
  const { turbo, ...experimental } = config.experimental;
  void turbo;
  config.experimental = experimental;
}

export default config;
