import { client } from '@/lib/sanity.client'
import { teamMembersQuery } from '@/lib/sanity.queries'
import AboutPage from './page'

export default async function AboutPageServer() {
  const teamMembers = await client.fetch(teamMembersQuery)
  return <AboutPage teamMembers={teamMembers} />
}