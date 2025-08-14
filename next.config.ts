import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xtruyen.vn",
      },
    ],
  },
};

export default nextConfig;
