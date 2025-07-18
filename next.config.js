/** @type {import('next').NextConfig} */
const nextConfig = {
  // Detect deployment environment
  ...(process.env.VERCEL ? {} : { output: 'standalone' }), // Only use standalone for Docker, not Vercel
  images: {
    domains: ['localhost', 'nextjs.workflo.it'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig