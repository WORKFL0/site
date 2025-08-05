import { notionFetch } from '@/lib/notion.fetch'
import HeroSection from './HeroSection'

export default async function HeroSectionServer() {
  const heroData = await notionFetch('heroSection')
  return <HeroSection heroData={heroData} />
}