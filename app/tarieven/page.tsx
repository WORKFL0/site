'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

export default function PricingPage() {
  const { language } = useLanguage()
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const packages = [
    {
      name: language === 'en' ? 'Essential' : 'Essentieel',
      description: language === 'en' 
        ? 'Perfect for small businesses starting their IT journey'
        : 'Perfect voor kleine bedrijven die hun IT-reis beginnen',
      monthlyPrice: 499,
      yearlyPrice: 4990,
      features: [
        language === 'en' ? 'Up to 10 users' : 'Tot 10 gebruikers',
        language === 'en' ? 'Basic cybersecurity' : 'Basis cybersecurity',
        language === 'en' ? 'Office 365 management' : 'Office 365 beheer',
        language === 'en' ? 'Remote support' : 'Remote ondersteuning',
        language === 'en' ? 'Response within 8 hours' : 'Reactie binnen 8 uur',
        language === 'en' ? 'Monthly security updates' : 'Maandelijkse beveiligingsupdates',
      ],
      notIncluded: [
        language === 'en' ? 'On-site support' : 'On-site ondersteuning',
        language === 'en' ? '24/7 monitoring' : '24/7 monitoring',
      ],
      highlight: false,
    },
    {
      name: language === 'en' ? 'Professional' : 'Professioneel',
      description: language === 'en'
        ? 'Comprehensive IT management for growing businesses'
        : 'Uitgebreid IT-beheer voor groeiende bedrijven',
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        language === 'en' ? 'Up to 25 users' : 'Tot 25 gebruikers',
        language === 'en' ? 'Advanced cybersecurity' : 'Geavanceerde cybersecurity',
        language === 'en' ? 'Full Microsoft 365 suite' : 'Volledige Microsoft 365 suite',
        language === 'en' ? 'Network monitoring' : 'Netwerk monitoring',
        language === 'en' ? 'Response within 4 hours' : 'Reactie binnen 4 uur',
        language === 'en' ? 'Weekly security scans' : 'Wekelijkse beveiligingsscans',
        language === 'en' ? 'Backup & recovery' : 'Backup & herstel',
        language === 'en' ? 'GDPR compliance tools' : 'AVG compliance tools',
      ],
      notIncluded: [
        language === 'en' ? 'Dedicated account manager' : 'Dedicated accountmanager',
      ],
      highlight: true,
      badge: language === 'en' ? 'Most Popular' : 'Meest Populair',
    },
    {
      name: language === 'en' ? 'Enterprise' : 'Enterprise',
      description: language === 'en'
        ? 'Full-service IT department for established companies'
        : 'Full-service IT-afdeling voor gevestigde bedrijven',
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      features: [
        language === 'en' ? 'Unlimited users' : 'Onbeperkt gebruikers',
        language === 'en' ? 'Enterprise security suite' : 'Enterprise beveiligingssuite',
        language === 'en' ? 'Complete cloud management' : 'Volledig cloud beheer',
        language === 'en' ? '24/7 proactive monitoring' : '24/7 proactieve monitoring',
        language === 'en' ? 'Response within 1 hour' : 'Reactie binnen 1 uur',
        language === 'en' ? 'Daily security monitoring' : 'Dagelijkse beveiligingsmonitoring',
        language === 'en' ? 'Disaster recovery planning' : 'Disaster recovery planning',
        language === 'en' ? 'Dedicated account manager' : 'Dedicated accountmanager',
        language === 'en' ? 'On-site support included' : 'On-site ondersteuning inbegrepen',
        language === 'en' ? 'Custom integrations' : 'Aangepaste integraties',
      ],
      notIncluded: [],
      highlight: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Transparent Pricing' : 'Transparante Tarieven'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {language === 'en' 
                  ? 'Choose the perfect IT support package for your business'
                  : 'Kies het perfecte IT-ondersteuningspakket voor uw bedrijf'}
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    billingPeriod === 'monthly'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  {language === 'en' ? 'Monthly' : 'Maandelijks'}
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    billingPeriod === 'yearly'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  {language === 'en' ? 'Yearly' : 'Jaarlijks'}
                  <span className="ml-2 text-green-600 text-sm">
                    {language === 'en' ? 'Save 17%' : 'Bespaar 17%'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                    pkg.highlight ? 'ring-4 ring-yellow-400 scale-105' : ''
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 rounded-bl-lg font-bold text-sm">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>

                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">
                          ¬{billingPeriod === 'monthly' ? pkg.monthlyPrice : pkg.yearlyPrice}
                        </span>
                        <span className="text-gray-600 ml-2">
                          /{language === 'en' ? (billingPeriod === 'monthly' ? 'month' : 'year') : (billingPeriod === 'monthly' ? 'maand' : 'jaar')}
                        </span>
                      </div>
                      {billingPeriod === 'yearly' && (
                        <p className="text-sm text-green-600 mt-1">
                          {language === 'en' 
                            ? `¬${Math.round(pkg.yearlyPrice / 12)}/month billed annually`
                            : `¬${Math.round(pkg.yearlyPrice / 12)}/maand jaarlijks gefactureerd`}
                        </p>
                      )}
                    </div>

                    <div className="space-y-4 mb-8">
                      <p className="font-semibold text-gray-900">
                        {language === 'en' ? 'Included:' : 'Inbegrepen:'}
                      </p>
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                      
                      {pkg.notIncluded.length > 0 && (
                        <>
                          {pkg.notIncluded.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 opacity-50">
                              <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span className="text-gray-500 text-sm line-through">{feature}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>

                    <Link
                      href="/contact"
                      className={`block text-center py-3 px-6 rounded-lg font-bold transition-all ${
                        pkg.highlight
                          ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      {language === 'en' ? 'Get Started' : 'Aan de slag'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Need a Custom Solution?' : 'Maatwerk Oplossing Nodig?'}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {language === 'en'
                  ? 'We create tailored IT packages for businesses with unique requirements'
                  : 'Wij creëren op maat gemaakte IT-pakketten voor bedrijven met unieke vereisten'}
              </p>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-3xl mb-4"><â</div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {language === 'en' ? 'Multiple Locations' : 'Meerdere Locaties'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en'
                        ? 'Unified IT management across all offices'
                        : 'Uniform IT-beheer voor alle kantoren'}
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl mb-4">='</div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {language === 'en' ? 'Special Requirements' : 'Speciale Vereisten'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en'
                        ? 'Industry-specific compliance and tools'
                        : 'Branche-specifieke compliance en tools'}
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl mb-4">=È</div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {language === 'en' ? 'Scalable Solutions' : 'Schaalbare Oplossingen'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en'
                        ? 'Grow your IT with your business'
                        : 'Groei uw IT mee met uw bedrijf'}
                    </p>
                  </div>
                </div>
                <Link
                  href="/tevredenheidscheck"
                  className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all"
                >
                  {language === 'en' ? 'Get Custom Quote' : 'Krijg Offerte Op Maat'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {language === 'en' ? 'Frequently Asked Questions' : 'Veelgestelde Vragen'}
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {language === 'en' 
                      ? 'Can I switch packages anytime?'
                      : 'Kan ik op elk moment van pakket wisselen?'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Yes, you can upgrade or downgrade your package at any time. Changes take effect at the next billing cycle.'
                      : 'Ja, u kunt uw pakket op elk moment upgraden of downgraden. Wijzigingen gaan in bij de volgende factuurcyclus.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {language === 'en' 
                      ? 'What happens if I exceed my user limit?'
                      : 'Wat gebeurt er als ik mijn gebruikerslimiet overschrijd?'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'We\'ll notify you when you\'re approaching your limit and help you choose the best upgrade path or add additional users at ¬25/user/month.'
                      : 'We informeren u wanneer u uw limiet nadert en helpen u het beste upgradepad te kiezen of extra gebruikers toe te voegen voor ¬25/gebruiker/maand.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {language === 'en' 
                      ? 'Is there a setup fee?'
                      : 'Zijn er installatiekosten?'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'No setup fees for standard packages. We offer a free IT assessment and smooth onboarding process.'
                      : 'Geen installatiekosten voor standaardpakketten. Wij bieden een gratis IT-assessment en soepel onboardingproces.'}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {language === 'en' 
                      ? 'What\'s your cancellation policy?'
                      : 'Wat is het annuleringsbeleid?'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Monthly plans can be cancelled with 30 days notice. Yearly plans include a 30-day money-back guarantee.'
                      : 'Maandelijkse abonnementen kunnen worden opgezegd met 30 dagen opzegtermijn. Jaarabonnementen hebben een 30-dagen geld-terug-garantie.'}
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
                ? 'Ready to Transform Your IT?'
                : 'Klaar om uw IT te transformeren?'}
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              {language === 'en'
                ? 'Join 100+ Amsterdam businesses already using Workflo'
                : 'Sluit u aan bij 100+ Amsterdamse bedrijven die al Workflo gebruiken'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tevredenheidscheck"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all"
              >
                {language === 'en' ? 'Start Free Assessment' : 'Start Gratis Assessment'}
              </Link>
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

      <Footer />
    </div>
  )
}