import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // 2026-10-21 security: same baseline headers as prismaiconsultants.com
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
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
