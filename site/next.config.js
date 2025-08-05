/** @type {import('next').NextConfig} */
const nextConfig = {
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
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID || '',
    SANITY_DATASET: process.env.SANITY_DATASET || 'production',
    SANITY_API_VERSION: process.env.SANITY_API_VERSION || '2023-05-03',
  },
}

module.exports = nextConfig