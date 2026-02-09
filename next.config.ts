import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
  // ⚡ Development Speed Optimizations
  experimental: {
    // Optimize package imports for faster compilation
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      'date-fns',
      '@fullcalendar/core',
      '@fullcalendar/react',
    ],
  },
  // Reduce bundle analysis in dev
  productionBrowserSourceMaps: false,
};

export default nextConfig;

