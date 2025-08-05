import { sanityFetch } from '@/lib/sanity.fetch'
import { partnersQuery } from '@/lib/sanity.queries'
import PartnersSection from './PartnersSection'

async function getPartners() {
  try {
    const partners = await sanityFetch(partnersQuery)
    return partners || []
  } catch (error) {
    console.error('Error fetching partners:', error)
    return []
  }
}

export default async function PartnersSectionServer() {
  const partners = await getPartners()
  
  // If no partners from Sanity, use default hardcoded ones
  if (partners.length === 0) {
    return <PartnersSection />
  }
  
  // Transform Sanity data to match component props
  const transformedPartners = partners.map((partner: any) => ({
    name: partner.name,
    logo: partner.logo?.asset?.url || '', // This would be the actual logo URL
    description: partner.description,
    website: partner.website
  }))
  
  return <PartnersSection partners={transformedPartners} />
}