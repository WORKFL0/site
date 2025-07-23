import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// Transform the project ID to remove underscores and make it valid
const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const projectId = rawProjectId.replace(/_/g, '-').toLowerCase()
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}