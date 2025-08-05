import { client } from './sanity.client'

export async function sanityFetch<T = any>(query: string): Promise<T | null> {
  if (!client) {
    console.warn('Sanity client not initialized - returning null')
    return null
  }
  
  try {
    const data = await client.fetch<T>(query)
    return data
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return null
  }
}