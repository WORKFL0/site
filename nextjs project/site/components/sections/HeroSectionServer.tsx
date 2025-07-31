import { client } from '@/lib/sanity.client'
import { heroSectionQuery } from '@/lib/sanity.queries'
import HeroSection from './HeroSection'

export default async function HeroSectionServer() {
  const heroData = await client.fetch(heroSectionQuery)
  return <HeroSection heroData={heroData} />
}