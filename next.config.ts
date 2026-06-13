import type { NextConfig } from "next";

type CustomNextConfig = NextConfig & {
  experimental?: {
    nodeMiddleware?: boolean;
  };
};

const nextConfig: CustomNextConfig = {
  experimental: {
    nodeMiddleware: true,
  },
};

export default nextConfig;
