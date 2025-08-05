import { notionFetch } from '@/lib/notion.fetch'
import ServicesSection from './ServicesSection'

export default async function ServicesSectionServer() {
  const services = await notionFetch('services')
  return <ServicesSection services={services} />
}