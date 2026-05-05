import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["next/font"],
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
