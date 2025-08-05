import { notionFetch } from '@/lib/notion.fetch'
import StatsSection from './StatsSection'

export default async function StatsSectionServer() {
  const settings = await notionFetch('stats')
  
  // If no settings from Notion, use defaults
  if (!settings) {
    return <StatsSection />
  }
  
  // Pass the stats from Notion
  const stats = {
    clients: settings.totalClients || '100+',
    uptime: settings.uptimePercentage || '99.9%',
    responseTime: settings.averageResponseTime || '15 min',
    satisfaction: settings.customerSatisfaction || '98%'
  }
  
  return <StatsSection stats={stats} />
}