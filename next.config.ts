import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/inspired-by-life", destination: "/inspired-by-life/index.html" },
      { source: "/inspired-by-life/:page(quicksand|pillars|life|check)", destination: "/inspired-by-life/x/:page.html" },
    ];
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
