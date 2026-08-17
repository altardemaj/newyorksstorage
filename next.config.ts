import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
        statusCode: 308,
      },
    ];
  },
};

export default nextConfig;
