import { sanityFetch } from '@/lib/sanity.fetch'
import { clientsQuery } from '@/lib/sanity.queries'
import ClientsSection from './ClientsSection'

async function getClients() {
  const clients = await sanityFetch(clientsQuery)
  return clients || []
}

export default async function ClientsSectionServer() {
  const clients = await getClients()
  
  // If no clients from Sanity, use default hardcoded ones
  if (clients.length === 0) {
    return <ClientsSection />
  }
  
  // Transform Sanity data to match component props
  const transformedClients = clients.map((client: any) => ({
    name: client.name,
    logo: client.logo?.asset?.url || '', // This would be the actual logo URL
    industry: client.industry,
    description: client.description,
    website: client.website
  }))
  
  return <ClientsSection clients={transformedClients} />
}