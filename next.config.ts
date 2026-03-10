import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quantrail-data.com",
      },
      {
        protocol: "https",
        hostname: "www.w3.org",
      }
    ]
  }
};

export default nextConfig;