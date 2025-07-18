import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy-project-id'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'

// Check if we have valid Sanity configuration
const hasValidConfig = projectId && projectId !== 'dummy-project-id' && projectId !== 'your-project-id'

export const client = createClient({
  projectId: hasValidConfig ? projectId : 'dummy-project-id',
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  // Disable fetching if no valid config
  ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  if (!hasValidConfig || !source) {
    return { url: () => '/placeholder.jpg' }
  }
  return builder.image(source)
}