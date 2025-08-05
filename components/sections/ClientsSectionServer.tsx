import { notionFetch } from '@/lib/notion.fetch'
import ClientsSection from './ClientsSection'

export default async function ClientsSectionServer() {
  const clients = await notionFetch('clients')
  
  // If no clients from Notion, use default hardcoded ones
  if (!clients || clients.length === 0) {
    return <ClientsSection />
  }
  
  // Transform Notion data to match component props
  const transformedClients = clients.map((client: any) => ({
    name: client.name,
    logo: client.logo || '',
    industry: client.industry,
    description: client.description,
    website: client.website
  }))
  
  return <ClientsSection clients={transformedClients} />
}