import { sanityFetch } from '@/lib/sanity.fetch'
import { heroSectionQuery } from '@/lib/sanity.queries'
import HeroSection from './HeroSection'

export default async function HeroSectionServer() {
  const heroData = await sanityFetch(heroSectionQuery)
  return <HeroSection heroData={heroData} />
}