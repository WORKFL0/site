import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// Handle both prefixed and non-prefixed env vars
export const projectId = process.env.SANITY_PROJECT_ID || 
                        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 
                        'jul5ogsa' // Your actual project ID as fallback

export const dataset = process.env.SANITY_DATASET || 
                      process.env.NEXT_PUBLIC_SANITY_DATASET || 
                      'production'

export const apiVersion = process.env.SANITY_API_VERSION || '2023-05-03'

// Create client only if we have a project ID
export const client = projectId ? createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  // Allow unauthenticated requests during build
  ignoreBrowserTokenWarning: true,
}) : null as any

// Image URL builder
const builder = projectId ? imageUrlBuilder({
  projectId,
  dataset,
}) : null

export const urlFor = (source: any) => {
  if (!builder) {
    console.warn('Sanity image builder not initialized - missing project ID')
    return { url: () => '' }
  }
  return builder.image(source)
}