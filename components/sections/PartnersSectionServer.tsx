import { notionFetch } from '@/lib/notion.fetch'
import PartnersSection from './PartnersSection'

export default async function PartnersSectionServer() {
  const partners = await notionFetch('partners')
  
  // If no partners from Notion, use default hardcoded ones
  if (!partners || partners.length === 0) {
    return <PartnersSection />
  }
  
  // Transform Notion data to match component props
  const transformedPartners = partners.map((partner: any) => ({
    name: partner.name,
    logo: partner.logo || '',
    description: partner.description,
    website: partner.url
  }))
  
  return <PartnersSection partners={transformedPartners} />
}