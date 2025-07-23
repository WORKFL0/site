import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import StatsSectionServer from '@/components/sections/StatsSectionServer'
import TestimonialsSectionServer from '@/components/sections/TestimonialsSectionServer'
import PartnersSectionServer from '@/components/sections/PartnersSectionServer'
import ClientsSectionServer from '@/components/sections/ClientsSectionServer'
import CTASectionWithVideo from '@/components/sections/CTASectionWithVideo'

export default function Home() {
  // Updated: 2025-01-18
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ServicesSection />
        <StatsSectionServer />
        <PartnersSectionServer />
        <TestimonialsSectionServer />
        <ClientsSectionServer />
        <CTASectionWithVideo />
      </main>
      <Footer />
    </>
  )
}