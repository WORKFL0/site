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
}

module.exports = nextConfig