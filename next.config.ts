import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['randomuser.me'], // Add external image domain here
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
