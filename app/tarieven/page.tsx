'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PricingCalculator from '@/components/PricingCalculator'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

export default function PricingPage() {
  const { language } = useLanguage()
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const packages = [
    {
      name: language === 'en' ? 'Fixed Fee Onsite Support' : 'Fixed Fee Onsite Support',
      description: language === 'en' 
        ? 'Unlimited on-site + remote support, fully managed IT'
        : 'Onbeperkte hulp op locatie + remote, volledig beheerde IT',
      monthlyPrice: 90,
      yearlyPrice: 972,
      perUnit: language === 'en' ? 'per user/server per month' : 'per gebruiker/server per maand',
      features: language === 'en' ? [
        'Unlimited on-site visits',
        'Everything from remote support included',
        'Priority response (1 hour)',
        'Dedicated account manager',
        'Quarterly business reviews',
        'Strategic IT planning'
      ] : [
        'Onbeperkte locatiebezoeken',
        'Alles van remote support inbegrepen',
        'Prioriteit reactie (1 uur)',
        'Dedicated accountmanager',
        'Kwartaal business reviews',
        'Strategische IT planning'
      ],
      highlight: true,
      badge: language === 'en' ? 'Most Complete' : 'Meest Compleet',
      targetAudience: language === 'en' 
        ? 'Ambitious companies that want to outsource everything'
        : 'Ambitieuze bedrijven die alles uitbesteden willen'
    },
    {
      name: language === 'en' ? 'Fixed Fee Remote Support' : 'Fixed Fee Remote Support',
      description: language === 'en'
        ? 'Unlimited remote support with proactive monitoring'
        : 'Onbeperkte remote hulp met proactieve monitoring',
      monthlyPrice: 60,
      yearlyPrice: 648,
      perUnit: language === 'en' ? 'per user/server per month' : 'per gebruiker/server per maand',
      features: language === 'en' ? [
        'Unlimited remote support',
        'Proactive monitoring',
        'Updates & user management',
        'No extra invoices',
        'Response within 4 hours',
        'Monthly security updates'
      ] : [
        'Onbeperkte remote (op afstand) hulp',
        'Proactieve monitoring',
        'Updates, gebruikersbeheer',
        'Geen extra facturen',
        'Reactie binnen 4 uur',
        'Maandelijkse beveiligingsupdates'
      ],
      highlight: false,
      targetAudience: language === 'en'
        ? 'Who always wants peace and security, without worries'
        : 'Wie altijd rust en zekerheid wil, zonder zorgen'
    },
    {
      name: language === 'en' ? '20-Hour Support Card' : 'Strippenkaart 20u',
      description: language === 'en'
        ? 'Pre-purchase 20 hours with extra discount'
        : '20 uur vooraf inkopen met extra korting',
      monthlyPrice: 1800,
      yearlyPrice: 1800,
      perUnit: language === 'en' ? 'total (€90/hour)' : 'totaal (€90/uur)',
      features: language === 'en' ? [
        '20 hours pre-purchased',
        'Extra discount',
        'Immediately deployable for any IT question',
        'No expiration date',
        'Flexible usage',
        'No monthly commitment'
      ] : [
        '20 uur vooraf inkopen',
        'Extra korting',
        'Direct inzetbaar bij elke IT-vraag',
        'Geen vervaldatum',
        'Flexibel in te zetten',
        'Geen maandelijkse verplichting'
      ],
      highlight: false,
      targetAudience: language === 'en'
        ? 'Teams that occasionally want structured support'
        : 'Teams die structureel af en toe support willen'
    },
    {
      name: language === 'en' ? '10-Hour Support Card' : 'Strippenkaart 10u',
      description: language === 'en'
        ? 'Pre-purchase 10 hours at discounted rate'
        : '10 uur vooraf inkopen met korting',
      monthlyPrice: 950,
      yearlyPrice: 950,
      perUnit: language === 'en' ? 'total (€95/hour)' : 'totaal (€95/uur)',
      features: language === 'en' ? [
        '10 hours pre-purchased',
        'Quick deployment for problems',
        'Better rate than individual hours',
        'No expiration date',
        'Ideal for smaller teams',
        'Pay once, use when needed'
      ] : [
        '10 uur vooraf inkopen',
        'Snelle inzet bij problemen',
        'Voordeliger tarief dan losse uren',
        'Geen vervaldatum',
        'Ideaal voor kleinere teams',
        'Eenmalig betalen, gebruiken wanneer nodig'
      ],
      highlight: false,
      targetAudience: language === 'en'
        ? 'Who needs support more often, flexible'
        : 'Wie wat vaker support nodig heeft, flexibel'
    },
    {
      name: 'Break-Fix / Ad-hoc',
      description: language === 'en'
        ? 'Direct support when needed, pay only for usage'
        : 'Direct support bij storing, alleen betalen als je het gebruikt',
      monthlyPrice: 110,
      yearlyPrice: 110,
      perUnit: language === 'en' ? 'per hour' : 'per uur',
      features: language === 'en' ? [
        'Direct support for issues',
        'Pay only when you use it',
        'No commitments',
        'Minimum 1 hour billing',
        'Business hours only',
        'Best for occasional issues'
      ] : [
        'Direct support bij storing',
        'Alleen betalen als je het gebruikt',
        'Geen verplichtingen',
        'Minimum 1 uur facturatie',
        'Alleen tijdens kantooruren',
        'Beste voor incidentele problemen'
      ],
      highlight: false,
      targetAudience: language === 'en'
        ? 'For those who occasionally need help'
        : 'Voor wie incidenteel hulp nodig heeft'
    }
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
                {language === 'en' ? 'Transparent IT Support Pricing' : 'Transparante IT Support Tarieven'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {language === 'en' 
                  ? 'Choose the perfect IT support package for your business. All prices exclude VAT.'
                  : 'Kies het perfecte IT-ondersteuningspakket voor uw bedrijf. Alle prijzen zijn exclusief BTW.'}
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                    pkg.highlight ? 'ring-4 ring-yellow-400 scale-105' : ''
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 rounded-bl-lg font-bold text-xs">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-gray-900">
                          €{pkg.monthlyPrice}
                        </span>
                      </div>
                      <span className="text-gray-600 text-sm">
                        {pkg.perUnit}
                      </span>
                    </div>

                    <div className="space-y-3 mb-6 min-h-[200px]">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center text-xs text-gray-500 italic mb-4">
                      {pkg.targetAudience}
                    </div>

                    <Link
                      href="/contact"
                      className={`block text-center py-2 px-4 rounded-lg font-bold transition-all text-sm ${
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

        {/* Why Fixed Fee Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {language === 'en' ? 'Why Choose Fixed Fee?' : 'Waarom kiezen voor Fixed Fee?'}
              </h2>
              
              {/* Important Note about Licenses */}
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {language === 'en' ? 'All Software Licenses Included!' : 'Alle Software Licenties Inbegrepen!'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'en' 
                        ? 'With our Fixed Fee packages, all software licenses are included in the price (except Microsoft 365, which has variable pricing based on your specific needs). This means no hidden costs for antivirus, monitoring tools, backup software, or other essential business applications.'
                        : 'Bij onze Fixed Fee pakketten zijn alle software licenties inbegrepen in de prijs (behalve Microsoft 365, dat variabele prijzen heeft op basis van uw specifieke behoeften). Dit betekent geen verborgen kosten voor antivirus, monitoring tools, backup software of andere essentiële bedrijfsapplicaties.'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">
                    {language === 'en' ? 'Predictable Costs' : 'Voorspelbare Kosten'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'No surprises on your invoice - everything in one fixed monthly amount.'
                      : 'Geen verrassingen op je factuur - alles in een vast maandbedrag.'}
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">
                    {language === 'en' ? 'Always Available' : 'Altijd Beschikbaar'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Help available as quickly and as often as you want.'
                      : 'Altijd hulp beschikbaar - zo snel en zo vaak als je wilt.'}
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">
                    {language === 'en' ? 'Proactive Approach' : 'Proactieve Aanpak'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Problems are often solved before you notice them.'
                      : 'Problemen worden vaak al opgelost voor jij ze merkt.'}
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">
                    {language === 'en' ? 'Complete Service' : 'Complete Service'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'More than break/fix: monitoring, updates, user management, advice & more.'
                      : 'Meer dan break/fix: monitoring, updates, gebruikersbeheer, advies & meer.'}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-700 mb-6">
                  {language === 'en'
                    ? 'Want to know what suits your business best? Contact us for free consultation and experience the peace of mind of truly professional IT support.'
                    : 'Wil je weten wat voor jouw bedrijf het beste past? Neem contact op voor een gratis adviesgesprek en ervaar de rust van echt professionele IT-support.'}
                </p>
                <Link
                  href="/tevredenheidscheck"
                  className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all"
                >
                  {language === 'en' ? 'Get Free IT Assessment' : 'Krijg Gratis IT Assessment'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Calculator Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Calculate Your IT Support Investment' : 'Bereken Uw IT Support Investering'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {language === 'en'
                  ? 'Use our interactive calculator to see your complete monthly IT investment including optional Office 365 licenses.'
                  : 'Gebruik onze interactieve calculator om uw complete maandelijkse IT-investering te zien inclusief optionele Office 365 licenties.'}
              </p>
            </div>
            <PricingCalculator />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'en' 
                ? 'Ready to Experience Worry-Free IT?'
                : 'Klaar voor Zorgeloze IT?'}
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              {language === 'en'
                ? 'Join 100+ Amsterdam businesses already using Workflo'
                : 'Sluit u aan bij 100+ Amsterdamse bedrijven die al Workflo gebruiken'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all"
              >
                {language === 'en' ? 'Get Your Custom Quote' : 'Krijg Uw Offerte Op Maat'}
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