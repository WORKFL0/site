import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://workflo.it'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/',
          '/static/',
          '/*.json$',
          '/*?*', // URLs with query parameters
          '/404',
          '/500',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/images/',
        disallow: '/private-images/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
      // AI Crawlers - Allow with specific rules
      {
        userAgent: 'GPTBot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'YouBot',
        allow: '/',
        crawlDelay: 1,
      },
      // Block bad SEO bots
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-services.xml`,
      `${baseUrl}/sitemap-blog.xml`,
    ],
    host: baseUrl,
  }
}