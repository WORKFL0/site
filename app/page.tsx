import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PartnersSection from '@/components/sections/PartnersSection'
import ClientsSection from '@/components/sections/ClientsSection'
import CTASectionWithVideo from '@/components/sections/CTASectionWithVideo'

export default function Home() {
  // Updated: 2025-01-18
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <PartnersSection />
        <TestimonialsSection />
        <ClientsSection />
        <CTASectionWithVideo />
      </main>
      <Footer />
    </>
  )
}