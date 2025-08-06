'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

interface PricingOption {
  id: string
  name: string
  nameNL: string
  description: string
  descriptionNL: string
  price: number
  unit: string
  unitNL: string
  features: string[]
  featuresNL: string[]
  recommended?: boolean
  type: 'hourly' | 'strippenkaart' | 'fixed'
  hours?: number
  savings?: string
}

const PricingCalculator = () => {
  const { language } = useLanguage()
  const [employees, setEmployees] = useState(10)
  const [servers, setServers] = useState(1)
  const [selectedOption, setSelectedOption] = useState('fixed-remote')
  const [totalPrice, setTotalPrice] = useState(0)
  const [savings, setSavings] = useState(0)

  const pricingOptions: PricingOption[] = [
    {
      id: 'fixed-onsite',
      name: 'Fixed Fee Onsite Support',
      nameNL: 'Fixed Fee Onsite Support',
      description: 'Unlimited on-site + remote support, fully managed IT',
      descriptionNL: 'Onbeperkte hulp op locatie + remote, volledig beheerde IT',
      price: 90,
      unit: 'per user/server per month',
      unitNL: 'per gebruiker/server per maand',
      features: [
        'Unlimited on-site visits',
        'Everything from remote support included',
        'Priority response (1 hour)',
        'Dedicated account manager',
        'Quarterly business reviews',
        'Strategic IT planning'
      ],
      featuresNL: [
        'Onbeperkte locatiebezoeken',
        'Alles van remote support inbegrepen',
        'Prioriteit reactie (1 uur)',
        'Dedicated accountmanager',
        'Kwartaal business reviews',
        'Strategische IT planning'
      ],
      type: 'fixed'
    },
    {
      id: 'fixed-remote',
      name: 'Fixed Fee Remote Support',
      nameNL: 'Fixed Fee Remote Support',
      description: 'Unlimited remote support with proactive monitoring',
      descriptionNL: 'Onbeperkte remote hulp met proactieve monitoring',
      price: 60,
      unit: 'per user/server per month',
      unitNL: 'per gebruiker/server per maand',
      features: [
        'Unlimited remote support',
        'Proactive monitoring 24/7',
        'Automatic updates & patches',
        'User management included',
        'No extra invoices',
        'Response within 4 hours'
      ],
      featuresNL: [
        'Onbeperkte remote (op afstand) hulp',
        'Proactieve monitoring 24/7',
        'Automatische updates & patches',
        'Gebruikersbeheer inbegrepen',
        'Geen extra facturen',
        'Reactie binnen 4 uur'
      ],
      type: 'fixed',
      recommended: true
    },
    {
      id: 'strippenkaart-20',
      name: '20-Hour Support Card',
      nameNL: 'Strippenkaart 20u',
      description: 'Pre-purchase 20 hours with extra discount',
      descriptionNL: '20 uur vooraf inkopen met extra korting',
      price: 1800,
      unit: 'total (€90/hour)',
      unitNL: 'totaal (€90/uur)',
      hours: 20,
      features: [
        '20 hours pre-purchased',
        'Extra discount',
        'Immediately deployable for any IT question',
        'Valid for 12 months'
      ],
      featuresNL: [
        '20 uur vooraf inkopen',
        'Extra korting',
        'Direct inzetbaar bij elke IT-vraag',
        'Geldig voor 12 maanden'
      ],
      type: 'strippenkaart',
      savings: '€400'
    },
    {
      id: 'strippenkaart-10',
      name: '10-Hour Support Card',
      nameNL: 'Strippenkaart 10u',
      description: 'Pre-purchase 10 hours at discounted rate',
      descriptionNL: '10 uur vooraf inkopen met korting',
      price: 950,
      unit: 'total (€95/hour)',
      unitNL: 'totaal (€95/uur)',
      hours: 10,
      features: [
        '10 hours pre-purchased',
        'Quick deployment for problems',
        'Better rate than individual hours',
        'Valid for 12 months'
      ],
      featuresNL: [
        '10 uur vooraf inkopen',
        'Snelle inzet bij problemen',
        'Voordeliger tarief dan losse uren',
        'Geldig voor 12 maanden'
      ],
      type: 'strippenkaart',
      savings: '€150'
    },
    {
      id: 'break-fix',
      name: 'Break-Fix / Ad-hoc',
      nameNL: 'Break-Fix / Ad-hoc',
      description: 'Direct support when needed, pay only for usage',
      descriptionNL: 'Direct support bij storing, alleen betalen als je het gebruikt',
      price: 110,
      unit: 'per hour',
      unitNL: 'per uur',
      features: [
        'Direct support for issues',
        'Pay only when you use it',
        'No commitments',
        'Response within business hours'
      ],
      featuresNL: [
        'Direct support bij storing',
        'Alleen betalen als je het gebruikt',
        'Geen verplichtingen',
        'Reactie binnen kantooruren'
      ],
      type: 'hourly'
    }
  ]

  useEffect(() => {
    const option = pricingOptions.find(o => o.id === selectedOption)
    if (!option) return

    let total = 0
    
    if (option.type === 'hourly') {
      // Estimate 5 hours per month for ad-hoc support
      total = option.price * 5
    } else if (option.type === 'strippenkaart') {
      // Monthly cost = total price / 12 months
      total = option.price / 12
    } else if (option.type === 'fixed') {
      // Fixed price per user/server
      total = option.price * (employees + servers)
    }

    setTotalPrice(Math.round(total))
    
    // Calculate savings vs break-fix (estimated 8 hours/month at €110/hour)
    const breakFixCost = 8 * 110
    setSavings(Math.max(0, breakFixCost - total))
  }, [selectedOption, employees, servers])

  const getCompanySize = () => {
    if (employees <= 5) return language === 'en' ? 'Micro Business' : 'Micro Bedrijf'
    if (employees <= 25) return language === 'en' ? 'Small Business' : 'Klein Bedrijf'
    if (employees <= 100) return language === 'en' ? 'Medium Business' : 'Middelgroot Bedrijf'
    return 'Enterprise'
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-4">
          {language === 'en' 
            ? 'Calculate Your IT Support Investment'
            : 'Bereken Uw IT Support Investering'}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {language === 'en'
            ? 'Find the perfect IT support package for your business. Transparent pricing, no hidden costs.'
            : 'Vind het perfecte IT-ondersteuningspakket voor uw bedrijf. Transparante prijzen, geen verborgen kosten.'}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-8">
          {/* Company Size */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-black mb-4">
              {language === 'en' ? 'Your Company' : 'Uw Bedrijf'}
            </h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? `Number of Employees: ${employees}` : `Aantal Medewerkers: ${employees}`}
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #f2f400 0%, #f2f400 ${employees}%, #e5e5e5 ${employees}%, #e5e5e5 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>1</span>
                <span className="font-medium text-black">{getCompanySize()}</span>
                <span>100+</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? `Number of Servers: ${servers}` : `Aantal Servers: ${servers}`}
              </label>
              <input
                type="range"
                min="0"
                max="20"
                value={servers}
                onChange={(e) => setServers(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #f2f400 0%, #f2f400 ${servers * 5}%, #e5e5e5 ${servers * 5}%, #e5e5e5 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>0</span>
                <span>20+</span>
              </div>
            </div>
          </div>

          {/* Service Selection */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-black mb-6">
              {language === 'en' ? 'Select Support Package' : 'Selecteer Support Pakket'}
            </h3>
            <div className="grid gap-4">
              {pricingOptions.map((option) => (
                <motion.div
                  key={option.id}
                  whileHover={{ scale: 1.01 }}
                  className={`relative p-6 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedOption === option.id
                      ? 'border-yellow-400 bg-yellow-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedOption(option.id)}
                >
                  {option.recommended && (
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {language === 'en' ? 'MOST POPULAR' : 'MEEST POPULAIR'}
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-black mb-1">
                        {language === 'en' ? option.name : option.nameNL}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {language === 'en' ? option.description : option.descriptionNL}
                      </p>
                      
                      <div className="text-lg font-bold text-yellow-600">
                        €{option.price} {language === 'en' ? option.unit : option.unitNL}
                      </div>
                      {option.savings && (
                        <div className="text-sm text-green-600 font-medium">
                          {language === 'en' ? `Save ${option.savings}` : `Bespaar ${option.savings}`}
                        </div>
                      )}
                    </div>
                    
                    <div className="ml-4">
                      <input
                        type="radio"
                        checked={selectedOption === option.id}
                        onChange={() => setSelectedOption(option.id)}
                        className="w-5 h-5 text-yellow-400"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {(language === 'en' ? option.features : option.featuresNL).map((feature, index) => (
                      <div key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-yellow-400 mr-2 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <div className="bg-black text-white rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                {language === 'en' ? 'Your Investment' : 'Uw Investering'}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="font-medium">
                      {pricingOptions.find(o => o.id === selectedOption)?.[language === 'en' ? 'name' : 'nameNL']}
                    </div>
                    {selectedOption.startsWith('fixed') && (
                      <div className="text-sm text-gray-400">
                        {employees} {language === 'en' ? 'users' : 'gebruikers'} + {servers} servers
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between items-center text-2xl font-bold mb-2">
                  <span>{language === 'en' ? 'Monthly:' : 'Maandelijks:'}</span>
                  <span className="text-yellow-400">€{totalPrice.toLocaleString()}</span>
                </div>
                <div className="text-sm text-gray-400">
                  {language === 'en' ? 'Annual:' : 'Jaarlijks:'} €{(totalPrice * 12).toLocaleString()}
                </div>
              </div>
              
              {savings > 0 && selectedOption.startsWith('fixed') && (
                <div className="mt-4 p-4 bg-green-500/20 rounded-lg border border-green-500">
                  <div className="text-green-400 font-bold">
                    {language === 'en' ? 'Monthly Savings:' : 'Maandelijkse Besparing:'} €{savings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-300">
                    {language === 'en' 
                      ? 'vs. average break-fix costs'
                      : 'vs. gemiddelde break-fix kosten'}
                  </div>
                </div>
              )}
            </div>
            
            {/* CTA */}
            <div className="bg-yellow-400 text-black rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold mb-4">
                {language === 'en' 
                  ? 'Get Your Custom Quote'
                  : 'Krijg Uw Offerte Op Maat'}
              </h4>
              <p className="text-sm mb-6">
                {language === 'en'
                  ? 'Free consultation • No obligations • Start within 24 hours'
                  : 'Gratis adviesgesprek • Geen verplichtingen • Start binnen 24 uur'}
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full bg-black text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-gray-800 transition-all mb-4"
              >
                {language === 'en' ? 'Get Started →' : 'Start Nu →'}
              </motion.a>
              <p className="text-xs">
                {language === 'en' 
                  ? '✓ Free IT assessment ✓ Custom advice ✓ No strings attached'
                  : '✓ Gratis IT-assessment ✓ Advies op maat ✓ Vrijblijvend'}
              </p>
            </div>

            {/* Why Fixed Fee */}
            <div className="bg-gray-50 rounded-xl p-6 mt-6">
              <h4 className="font-bold text-black mb-3">
                {language === 'en' ? 'Why Choose Fixed Fee?' : 'Waarom Fixed Fee?'}
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>{language === 'en' 
                    ? 'No surprises on your invoice'
                    : 'Geen verrassingen op uw factuur'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>{language === 'en'
                    ? 'Always help available'
                    : 'Altijd hulp beschikbaar'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>{language === 'en'
                    ? 'Proactive problem prevention'
                    : 'Proactieve probleem preventie'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>{language === 'en'
                    ? 'Complete peace of mind'
                    : 'Volledige gemoedsrust'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCalculator