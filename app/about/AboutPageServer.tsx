import { client } from '@/lib/sanity.client'
import { teamMembersQuery } from '@/lib/sanity.queries'
import AboutPage from './page'

interface AboutPageProps {
  searchParams?: { [key: string]: string | string[] | undefined }
}

// This is a temporary workaround for Vercel's cache
// It fetches team members but passes them to the client component
export default async function AboutPageServer({ searchParams }: AboutPageProps) {
  try {
    const teamMembers = await client.fetch(teamMembersQuery)
    return <AboutPage />
  } catch (error) {
    console.error('Error fetching team members:', error)
    return <AboutPage />
  }
}