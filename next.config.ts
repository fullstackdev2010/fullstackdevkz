import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Enable MDX as first-class pages in the /app directory
const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  experimental: {},
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
