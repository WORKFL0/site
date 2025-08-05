import { client } from '@/lib/sanity.client'
import { siteSettingsQuery } from '@/lib/sanity.queries'
import StatsSection from './StatsSection'

async function getSiteSettings() {
  try {
    const settings = await client.fetch(siteSettingsQuery)
    return settings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

export default async function StatsSectionServer() {
  const settings = await getSiteSettings()
  
  // If no settings from Sanity, use defaults
  if (!settings) {
    return <StatsSection />
  }
  
  // Pass the stats from Sanity settings
  const stats = {
    clients: settings.totalClients || '100+',
    uptime: settings.uptimePercentage || '99.9%',
    responseTime: settings.averageResponseTime || '15 min',
    satisfaction: settings.customerSatisfaction || '98%'
  }
  
  return <StatsSection stats={stats} partners={settings.partners} />
}