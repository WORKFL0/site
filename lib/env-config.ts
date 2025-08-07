/**
 * Failsafe environment configuration
 * Returns environment variables with fallbacks to prevent crashes
 */

interface EnvConfig {
  // RSS Feed Configuration
  RSS_USE_FALLBACK: boolean
  RSS_PRIMARY_FEED: string
  
  // Analytics (Public)
  NEXT_PUBLIC_GA_ID: string | undefined
  NEXT_PUBLIC_GTM_ID: string | undefined
  NEXT_PUBLIC_CLARITY_ID: string | undefined
  NEXT_PUBLIC_HOTJAR_ID: string | undefined
  NEXT_PUBLIC_LINKEDIN_PARTNER_ID: string | undefined
  NEXT_PUBLIC_FB_PIXEL_ID: string | undefined
  
  // Notion API
  NOTION_API_KEY: string | undefined
  NOTION_BLOG_DATABASE_ID: string | undefined
  NOTION_NEWS_DATABASE_ID: string | undefined
}

/**
 * Get environment configuration with failsafe defaults
 * This ensures the site NEVER crashes due to missing env vars
 */
export function getEnvConfig(): EnvConfig {
  // Use a try-catch for each env var to ensure we never crash
  const config: EnvConfig = {
    // RSS Feed - always provide working defaults
    RSS_USE_FALLBACK: process.env.RSS_USE_FALLBACK === 'true' || true, // Default to true
    RSS_PRIMARY_FEED: process.env.RSS_PRIMARY_FEED || 'https://feeds.feedburner.com/TechCrunch', // Fallback feed
    
    // Analytics - these can be undefined without breaking the site
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    NEXT_PUBLIC_CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID,
    NEXT_PUBLIC_HOTJAR_ID: process.env.NEXT_PUBLIC_HOTJAR_ID,
    NEXT_PUBLIC_LINKEDIN_PARTNER_ID: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID,
    NEXT_PUBLIC_FB_PIXEL_ID: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
    
    // Notion - can be undefined, features will gracefully degrade
    NOTION_API_KEY: process.env.NOTION_API_KEY,
    NOTION_BLOG_DATABASE_ID: process.env.NOTION_BLOG_DATABASE_ID,
    NOTION_NEWS_DATABASE_ID: process.env.NOTION_NEWS_DATABASE_ID,
  }
  
  // Log missing env vars in development only
  if (process.env.NODE_ENV === 'development') {
    const missing = []
    if (!process.env.RSS_PRIMARY_FEED) missing.push('RSS_PRIMARY_FEED')
    if (!process.env.NEXT_PUBLIC_HOTJAR_ID) missing.push('NEXT_PUBLIC_HOTJAR_ID')
    
    if (missing.length > 0) {
      console.warn(`⚠️ Missing environment variables: ${missing.join(', ')}`)
      console.warn('Using fallback values. Set these in .env.local or Vercel dashboard.')
    }
  }
  
  return config
}

/**
 * Safe getter for environment variables
 * Never throws, always returns a value or undefined
 */
export function safeEnv(key: string, fallback?: string): string | undefined {
  try {
    return process.env[key] || fallback
  } catch (error) {
    console.warn(`Failed to read env var ${key}, using fallback`)
    return fallback
  }
}