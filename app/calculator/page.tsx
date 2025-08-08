'use client'

// import Header from '@/components/layout/Header' // REPLACED
import StaticHeader from '@/components/StaticHeader'
// import Footer from '@/components/layout/Footer' // REPLACED
import StaticFooter from '@/components/StaticFooter'
import PricingCalculator from '@/components/PricingCalculator'
import { useLanguage } from '@/context/LanguageContext'

export default function CalculatorPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      <StaticHeader />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'IT Support Pricing Calculator' : 'IT Support Prijs Calculator'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {language === 'en' 
                  ? 'Calculate your IT support investment and find the perfect package for your business.'
                  : 'Bereken uw IT-ondersteuningsinvestering en vind het perfecte pakket voor uw bedrijf.'}
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Calculator Component */}
        <section className="py-12">
          <PricingCalculator />
        </section>

        {/* Additional Info Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {language === 'en' ? 'Why Use Our Calculator?' : 'Waarom Onze Calculator Gebruiken?'}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    {language === 'en' ? 'Instant Pricing' : 'Direct Prijzen'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Get accurate pricing tailored to your business size immediately.'
                      : 'Krijg direct nauwkeurige prijzen afgestemd op uw bedrijfsgrootte.'}
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    {language === 'en' ? 'Compare Packages' : 'Vergelijk Pakketten'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Compare all our support packages side by side to find the best fit.'
                      : 'Vergelijk al onze ondersteuningspakketten om de beste match te vinden.'}
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">
                    {language === 'en' ? 'See Your Savings' : 'Zie Uw Besparingen'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Calculate potential savings compared to break-fix support costs.'
                      : 'Bereken potentiële besparingen vergeleken met break-fix ondersteuningskosten.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'en' 
                ? 'Ready to Get Started?'
                : 'Klaar om te Beginnen?'}
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              {language === 'en'
                ? 'Contact us today for a custom quote tailored to your business needs'
                : 'Neem vandaag contact op voor een offerte op maat voor uw bedrijf'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all"
              >
                {language === 'en' ? 'Contact Sales' : 'Contact Verkoop'}
              </a>
              <a
                href="tel:0203080465"
                className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
              >
                {language === 'en' ? 'Call 020-30 80 465' : 'Bel 020-30 80 465'}
              </a>
            </div>
          </div>
        </section>
      </main>

      <StaticFooter />
    </div>
  )
}