/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone', // Commented out for Vercel deployment
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