import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2023-05-03' // Use current date (YYYY-MM-DD) to target the latest API version

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production', // Enable CDN for production
})

// Client for authenticated requests (if you need to write data)
export const sanityWriteClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Only used for authenticated requests
})

// Initialize the image URL builder
const builder = imageUrlBuilder(sanityClient)

// Helper function to create image URLs
export function urlForImage(source: any) {
  return builder.image(source)
}