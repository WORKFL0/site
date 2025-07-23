import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

// Enable Incremental Static Regeneration (ISR) to update content every 60 seconds
export const revalidate = 60;

export default function Home() {
  // Updated: 2025-01-16
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}