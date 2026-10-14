import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages has no image optimization server
  },
};

export default nextConfig;
