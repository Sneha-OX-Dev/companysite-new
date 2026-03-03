import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/6601ebe1041cb651c3a023e8/**",
      },
    ],
  },
};

export default nextConfig;
