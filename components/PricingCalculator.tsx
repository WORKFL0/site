'use client'

import { useState, useEffect, useMemo } from 'react'
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
  const [selectedOffice365, setSelectedOffice365] = useState('none')
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [office365Licenses, setOffice365Licenses] = useState(0)
  const [showComparison, setShowComparison] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const [hoursPerMonth, setHoursPerMonth] = useState(8)

  const pricingOptions: PricingOption[] = useMemo(() => [
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
        'No expiration date'
      ],
      featuresNL: [
        '20 uur vooraf inkopen',
        'Extra korting',
        'Direct inzetbaar bij elke IT-vraag',
        'Geen vervaldatum'
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
        'No expiration date'
      ],
      featuresNL: [
        '10 uur vooraf inkopen',
        'Snelle inzet bij problemen',
        'Voordeliger tarief dan losse uren',
        'Geen vervaldatum'
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
  ], [])

  const office365Packages = useMemo(() => [
    { id: 'none', name: language === 'en' ? 'No Office 365' : 'Geen Office 365', price: 0 },
    { id: 'basic', name: 'Microsoft 365 Basic', price: 6 },
    { id: 'standard', name: 'Microsoft 365 Business Standard', price: 12 },
    { id: 'premium', name: 'Microsoft 365 Business Premium', price: 22 },
    { id: 'e3', name: 'Microsoft 365 E3', price: 36 },
    { id: 'e5', name: 'Microsoft 365 E5', price: 57 }
  ], [language])

  useEffect(() => {
    try {
      // Validate inputs
      if (!selectedOption || !pricingOptions || pricingOptions.length === 0) {
        console.warn('PricingCalculator: Missing pricing options or selected option')
        return
      }
      
      if (typeof employees !== 'number' || employees < 0 || typeof servers !== 'number' || servers < 0) {
        console.warn('PricingCalculator: Invalid employees or servers count')
        return
      }

      const option = pricingOptions.find(o => o?.id === selectedOption)
      if (!option || typeof option.price !== 'number') {
        console.warn('PricingCalculator: Invalid pricing option found')
        return
      }

      let total = 0
      
      try {
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
        
        // Validate calculated total
        if (isNaN(total) || total < 0) {
          console.warn('PricingCalculator: Invalid total calculated:', total)
          total = 0
        }
      } catch (calculationError) {
        console.error('PricingCalculator: Error calculating base price:', calculationError)
        total = 0
      }

      // Add Office 365 costs with error handling
      try {
        if (office365Packages && selectedOffice365 && selectedOffice365 !== 'none') {
          const office365Package = office365Packages.find(p => p?.id === selectedOffice365)
          if (office365Package && typeof office365Package.price === 'number' && office365Package.price > 0) {
            const licensesToUse = (office365Licenses && office365Licenses > 0) ? office365Licenses : employees
            if (typeof licensesToUse === 'number' && licensesToUse > 0) {
              total += office365Package.price * licensesToUse
            }
          }
        }
      } catch (office365Error) {
        console.error('PricingCalculator: Error calculating Office 365 costs:', office365Error)
      }

      // Apply yearly discount if selected (10% off)
      if (billingPeriod === 'yearly' && option.type === 'fixed') {
        total = total * 0.9
      }
      
      // Validate final total and set price
      const finalTotal = isNaN(total) || total < 0 ? 0 : Math.round(total)
      setTotalPrice(finalTotal)
      
      // Calculate savings vs break-fix (estimated 8 hours/month at €110/hour)
      try {
        const breakFixCost = 8 * 110
        const calculatedSavings = Math.max(0, breakFixCost - finalTotal)
        setSavings(isNaN(calculatedSavings) ? 0 : calculatedSavings)
      } catch (savingsError) {
        console.error('PricingCalculator: Error calculating savings:', savingsError)
        setSavings(0)
      }
    } catch (effectError) {
      console.error('PricingCalculator: Error in price calculation effect:', effectError)
      // Set fallback values
      setTotalPrice(0)
      setSavings(0)
    }
  }, [selectedOption, employees, servers, selectedOffice365, office365Licenses, pricingOptions, office365Packages, billingPeriod])

  const getCompanySize = () => {
    try {
      if (typeof employees !== 'number' || isNaN(employees) || employees < 0) {
        return language === 'en' ? 'Unknown' : 'Onbekend'
      }
      
      if (employees <= 5) return language === 'en' ? 'Micro Business' : 'Micro Bedrijf'
      if (employees <= 25) return language === 'en' ? 'Small Business' : 'Klein Bedrijf'
      if (employees <= 100) return language === 'en' ? 'Medium Business' : 'Middelgroot Bedrijf'
      return 'Enterprise'
    } catch (error) {
      console.error('PricingCalculator: Error determining company size:', error)
      return language === 'en' ? 'Unknown' : 'Onbekend'
    }
  }

  const calculateBreakFixCosts = () => {
    const baseCost = hoursPerMonth * 110 // €110 per hour
    const softwareCosts = employees * 27 + servers * 35 // Estimated software licensing per month
    return baseCost + softwareCosts
  }

  const calculateFixedFeeCosts = () => {
    const option = pricingOptions.find(o => o.id === 'fixed-remote')
    if (!option) return 0
    return option.price * (employees + servers)
  }

  const getRecommendation = () => {
    const breakFixTotal = calculateBreakFixCosts()
    const fixedFeeTotal = calculateFixedFeeCosts()
    
    if (employees <= 3 && hoursPerMonth <= 4) {
      return 'strippenkaart'
    } else if (employees <= 8 && hoursPerMonth <= 6) {
      return 'break-fix'
    } else {
      return 'fixed-fee'
    }
  }

  const Tooltip = ({ content, children, id }: { content: string; children: React.ReactNode; id: string }) => (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setActiveTooltip(id)}
        onMouseLeave={() => setActiveTooltip(null)}
        className="cursor-help"
      >
        {children}
      </div>
      {activeTooltip === id && (
        <div
          className="absolute z-50 px-3 py-2 text-sm bg-gray-900 text-white rounded-lg shadow-lg -top-12 left-1/2 transform -translate-x-1/2 w-64 text-center animate-fadeIn"
        >
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="bg-black rounded-xl p-8 inline-block shadow-2xl border-2 border-yellow-400">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            {language === 'en' 
              ? 'Calculate Your IT Support Investment'
              : 'Bereken Uw IT Support Investering'}
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-medium">
            {language === 'en'
              ? 'Find the perfect IT support package for your business. Transparent pricing, no hidden costs.'
              : 'Vind het perfecte IT-ondersteuningspakket voor uw bedrijf. Transparante prijzen, geen verborgen kosten.'}
          </p>
        </div>
      </div>

      {/* Comparison Toggle */}
      <div className="text-center mb-8">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all inline-flex items-center gap-2"
        >
          {showComparison ? '📊' : '⚡'} 
          {language === 'en' 
            ? (showComparison ? 'Hide Comparison' : 'Compare All Options')
            : (showComparison ? 'Verberg Vergelijking' : 'Vergelijk Alle Opties')}
        </button>
      </div>

      {/* Comparison Section */}
      {showComparison && (
          <div
            className="mb-12 animate-fadeIn"
          >
            <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
                {language === 'en' ? 'Break-Fix vs Fixed Fee Comparison' : 'Break-Fix vs Fixed Fee Vergelijking'}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Break-Fix Column */}
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl">🚨</span>
                    </div>
                    <h4 className="text-xl font-bold text-red-800 mb-2">
                      {language === 'en' ? 'Break-Fix Model' : 'Break-Fix Model'}
                    </h4>
                    <p className="text-sm text-red-600">
                      {language === 'en' ? 'Pay per incident' : 'Betaal per incident'}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-lg font-bold text-red-800">
                        €110 {language === 'en' ? 'per hour' : 'per uur'}
                      </div>
                      <div className="text-sm text-gray-600">
                        {language === 'en' ? 'Support costs only' : 'Alleen support kosten'}
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-lg font-bold text-red-800">
                        +€{Math.round((employees * 27 + servers * 35))}/month
                      </div>
                      <div className="text-sm text-gray-600">
                        {language === 'en' ? 'Software licenses' : 'Software licenties'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="text-center">
                      <Tooltip 
                        content={language === 'en' 
                          ? 'Based on estimated usage patterns for your company size'
                          : 'Gebaseerd op geschatte gebruikspatronen voor uw bedrijfsgrootte'}
                        id="breakfix-estimate"
                      >
                        <div className="text-xl font-bold text-red-800 cursor-help border-b border-dotted border-red-400">
                          €{calculateBreakFixCosts()}/month
                        </div>
                      </Tooltip>
                      <div className="text-xs text-red-600 mt-1">
                        {language === 'en' ? 'Estimated total' : 'Geschatte totaal'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* VS Column */}
                <div className="flex items-center justify-center md:block">
                  <div className="bg-gray-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                    <span className="text-yellow-400 text-2xl font-bold">VS</span>
                  </div>
                </div>

                {/* Fixed Fee Column */}
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl">✅</span>
                    </div>
                    <h4 className="text-xl font-bold text-green-800 mb-2">
                      {language === 'en' ? 'Fixed Fee Model' : 'Fixed Fee Model'}
                    </h4>
                    <p className="text-sm text-green-600">
                      {language === 'en' ? 'Unlimited support' : 'Onbeperkte support'}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-lg font-bold text-green-800">
                        €{pricingOptions.find(o => o.id === 'fixed-remote')?.price || 60}/user/month
                      </div>
                      <div className="text-sm text-gray-600">
                        {language === 'en' ? 'All-inclusive' : 'Alles inclusief'}
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-lg font-bold text-green-800">
                        €0 {language === 'en' ? 'extra' : 'extra'}
                      </div>
                      <div className="text-sm text-gray-600">
                        {language === 'en' ? 'Software included' : 'Software inbegrepen'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-green-800">
                        €{calculateFixedFeeCosts()}/month
                      </div>
                      <div className="text-xs text-green-600 mt-1">
                        {language === 'en' ? 'Fixed price' : 'Vaste prijs'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Savings Highlight */}
              {calculateBreakFixCosts() > calculateFixedFeeCosts() && (
                <div className="bg-yellow-400 text-black rounded-xl p-6 text-center">
                  <h4 className="text-2xl font-bold mb-2">
                    {language === 'en' ? 'You Save' : 'U Bespaart'} €{(calculateBreakFixCosts() - calculateFixedFeeCosts()).toLocaleString()}/month
                  </h4>
                  <p className="text-lg">
                    {language === 'en' 
                      ? `That's €${((calculateBreakFixCosts() - calculateFixedFeeCosts()) * 12).toLocaleString()} per year!`
                      : `Dat is €${((calculateBreakFixCosts() - calculateFixedFeeCosts()) * 12).toLocaleString()} per jaar!`}
                  </p>
                  <div className="mt-4 text-sm font-medium">
                    {Math.round(((calculateBreakFixCosts() - calculateFixedFeeCosts()) / calculateBreakFixCosts()) * 100)}% 
                    {language === 'en' ? ' cost reduction with Fixed Fee' : ' kostenreductie met Fixed Fee'}
                  </div>
                </div>
              )}
              
              {/* Usage Estimator */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4 text-gray-900">
                  {language === 'en' ? 'Adjust Your Usage Estimate' : 'Pas Uw Gebruiksschatting Aan'}
                </h4>
                <div className="mb-4">
                  <label className="block text-base font-semibold text-gray-900 mb-2">
                    {language === 'en' ? `Estimated IT Support Hours per Month: ${hoursPerMonth}` : `Geschatte IT Support Uren per Maand: ${hoursPerMonth}`}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={hoursPerMonth}
                    onChange={(e) => setHoursPerMonth(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #f2f400 0%, #f2f400 ${(hoursPerMonth / 40) * 100}%, #e5e5e5 ${(hoursPerMonth / 40) * 100}%, #e5e5e5 100%)`
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-700 font-medium mt-2">
                    <span>1h</span>
                    <span className="text-center">
                      {hoursPerMonth <= 4 && '💚 Light usage'}
                      {hoursPerMonth > 4 && hoursPerMonth <= 12 && '🟡 Moderate usage'}
                      {hoursPerMonth > 12 && '🔴 Heavy usage'}
                    </span>
                    <span>40h+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-3 space-y-6 md:space-y-8">
          {/* Billing Period Toggle */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-black mb-4">
              {language === 'en' ? 'Billing Period' : 'Facturatieperiode'}
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-2">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all touch-manipulation ${
                  billingPeriod === 'monthly' 
                    ? 'bg-yellow-400 text-black shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
                }`}
              >
                {language === 'en' ? 'Monthly' : 'Maandelijks'}
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all touch-manipulation ${
                  billingPeriod === 'yearly' 
                    ? 'bg-yellow-400 text-black shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
                }`}
              >
                {language === 'en' ? 'Yearly (-10%)' : 'Jaarlijks (-10%)'}
              </button>
            </div>
            {billingPeriod === 'yearly' && (
              <p className="text-sm text-green-600 font-medium">
                {language === 'en' 
                  ? '✓ Save 10% with annual payment' 
                  : '✓ Bespaar 10% met jaarlijkse betaling'}
              </p>
            )}
          </div>

          {/* Company Size */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-black mb-4">
              {language === 'en' ? 'Your Company' : 'Uw Bedrijf'}
            </h3>
            
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <label className="block text-base font-semibold text-gray-900">
                  {language === 'en' ? `Number of Employees: ${employees}` : `Aantal Medewerkers: ${employees}`}
                </label>
                <Tooltip 
                  content={language === 'en' 
                    ? 'Include all staff who use computers, tablets, or phones for work. This affects your IT support needs and software licensing.'
                    : 'Voeg alle medewerkers toe die computers, tablets, of telefoons voor werk gebruiken. Dit beïnvloedt uw IT-ondersteuning en software licenties.'}
                  id="employees-tooltip"
                >
                  <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs cursor-help">
                    ?
                  </div>
                </Tooltip>
              </div>
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
              <div className="flex justify-between text-sm text-gray-700 font-medium mt-2">
                <span>1</span>
                <span className="font-medium text-black">{getCompanySize()}</span>
                <span>100+</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <label className="block text-base font-semibold text-gray-900">
                  {language === 'en' ? `Number of Servers: ${servers}` : `Aantal Servers: ${servers}`}
                </label>
                <Tooltip 
                  content={language === 'en' 
                    ? 'Physical or virtual servers, including file servers, domain controllers, and application servers. Cloud servers (Azure, AWS) count too.'
                    : 'Fysieke of virtuele servers, inclusief bestandsservers, domeincontrollers, en applicatieservers. Cloud servers (Azure, AWS) tellen ook mee.'}
                  id="servers-tooltip"
                >
                  <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs cursor-help">
                    ?
                  </div>
                </Tooltip>
              </div>
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
              <div className="flex justify-between text-sm text-gray-700 font-medium mt-2">
                <span>0</span>
                <span>20+</span>
              </div>
            </div>
          </div>

          {/* Office 365 Package Selection */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-bold text-black">
                {language === 'en' ? 'Microsoft 365 Licenses (Optional)' : 'Microsoft 365 Licenties (Optioneel)'}
              </h3>
              <Tooltip 
                content={language === 'en' 
                  ? 'Microsoft 365 includes Office apps, email, OneDrive, Teams, and security features. We can manage and optimize your licenses.'
                  : 'Microsoft 365 bevat Office apps, email, OneDrive, Teams, en beveiligingsfeatures. Wij kunnen uw licenties beheren en optimaliseren.'}
                id="office365-tooltip"
              >
                <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs cursor-help">
                  ?
                </div>
              </Tooltip>
            </div>
            <p className="text-gray-700 text-base mb-4 font-medium">
              {language === 'en' 
                ? 'Add Microsoft 365 licenses to see your complete monthly IT investment'
                : 'Voeg Microsoft 365 licenties toe om uw complete maandelijkse IT-investering te zien'}
            </p>
            
            <div className="mb-4">
              <label className="block text-base font-semibold text-gray-900 mb-2">
                {language === 'en' ? 'Select Package:' : 'Selecteer Pakket:'}
              </label>
              <select
                value={selectedOffice365}
                onChange={(e) => setSelectedOffice365(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                {office365Packages.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.name} {pkg.price > 0 && `(€${pkg.price}/user/month)`}
                  </option>
                ))}
              </select>
            </div>

            {selectedOffice365 !== 'none' && (
              <div className="mb-4">
                <label className="block text-base font-semibold text-gray-900 mb-2">
                  {language === 'en' 
                    ? `Number of Licenses (default: ${employees} employees):`
                    : `Aantal Licenties (standaard: ${employees} medewerkers):`}
                </label>
                <input
                  type="number"
                  min="0"
                  max="500"
                  value={office365Licenses || employees}
                  onChange={(e) => setOffice365Licenses(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder={employees.toString()}
                />
              </div>
            )}
          </div>

          {/* AI Recommendation */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">AI</span>
              </div>
              <h3 className="text-xl font-bold text-blue-800">
                {language === 'en' ? 'Recommended for Your Business' : 'Aanbevolen voor Uw Bedrijf'}
              </h3>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-blue-800 mb-2">
                {(() => {
                  const rec = getRecommendation()
                  if (rec === 'strippenkaart') return language === 'en' ? 'Strip Cards (Pre-paid Hours)' : 'Strippenkaarten (Vooruitbetaalde Uren)'
                  if (rec === 'break-fix') return language === 'en' ? 'Break-Fix Support' : 'Break-Fix Support'
                  return language === 'en' ? 'Fixed Fee Support' : 'Fixed Fee Support'
                })()}
              </div>
              <p className="text-sm text-blue-700">
                {(() => {
                  const rec = getRecommendation()
                  if (rec === 'strippenkaart') {
                    return language === 'en' 
                      ? 'Perfect for small teams with occasional IT needs. Great control over costs.'
                      : 'Perfect voor kleine teams met incidentele IT-behoeften. Goede kostencontrole.'
                  }
                  if (rec === 'break-fix') {
                    return language === 'en'
                      ? 'Suitable for your current size, but consider Fixed Fee as you grow.'
                      : 'Geschikt voor uw huidige omvang, maar overweeg Fixed Fee als u groeit.'
                  }
                  return language === 'en'
                    ? 'Best value for your business size. Predictable costs and comprehensive coverage.'
                    : 'Beste waarde voor uw bedrijfsomvang. Voorspelbare kosten en uitgebreide dekking.'
                })()}
              </p>
            </div>
          </div>

          {/* Service Selection */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-black mb-6">
              {language === 'en' ? 'Select Support Package' : 'Selecteer Support Pakket'}
            </h3>
            <div className="grid gap-4">
              {pricingOptions.map((option) => (
                <div
                  key={option.id}
                  className={`relative p-6 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedOption === option.id
                      ? 'border-yellow-400 bg-yellow-50 shadow-lg transform scale-[1.02]'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  } ${
                    getRecommendation() === 'strippenkaart' && option.type === 'strippenkaart' ? 'ring-2 ring-blue-300' :
                    getRecommendation() === 'break-fix' && option.type === 'hourly' ? 'ring-2 ring-blue-300' :
                    getRecommendation() === 'fixed-fee' && option.type === 'fixed' ? 'ring-2 ring-blue-300' : ''
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="lg:col-span-1 order-first lg:order-last">
          <div className="lg:sticky lg:top-20">
            <div className="bg-black text-white rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                {language === 'en' ? 'Your Investment' : 'Uw Investering'}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="pb-3 border-b border-gray-700">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="font-medium">
                        {pricingOptions.find(o => o.id === selectedOption)?.[language === 'en' ? 'name' : 'nameNL']}
                      </div>
                      {selectedOption.startsWith('fixed') && (
                        <div className="text-sm text-gray-600 font-medium">
                          {employees} {language === 'en' ? 'users' : 'gebruikers'} + {servers} servers
                        </div>
                      )}
                    </div>
                    <div className="text-lg">
                      €{(() => {
                        const option = pricingOptions.find(o => o.id === selectedOption)
                        if (!option) return 0
                        if (option.type === 'hourly') return option.price * 5
                        if (option.type === 'strippenkaart') return Math.round(option.price / 12)
                        return option.price * (employees + servers)
                      })()}
                    </div>
                  </div>
                </div>
                
                {selectedOffice365 !== 'none' && (
                  <div className="pb-3 border-b border-gray-700">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-medium">
                          {office365Packages.find(p => p.id === selectedOffice365)?.name}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {office365Licenses || employees} {language === 'en' ? 'licenses' : 'licenties'}
                        </div>
                      </div>
                      <div className="text-lg">
                        €{(() => {
                          const pkg = office365Packages.find(p => p.id === selectedOffice365)
                          if (!pkg) return 0
                          return pkg.price * (office365Licenses || employees)
                        })()}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-700 pt-4">
                {selectedOption === 'break-fix' ? (
                  <>
                    <div className="text-center">
                      <div className="text-xl font-bold mb-2">
                        <span className="text-yellow-400">€110</span>
                        <span className="text-gray-600 font-medium"> {language === 'en' ? 'per hour' : 'per uur'}</span>
                      </div>
                      <div className="text-sm text-gray-700 font-medium">
                        {language === 'en' 
                          ? 'Pay only when you need support'
                          : 'Betaal alleen wanneer u ondersteuning nodig heeft'}
                      </div>
                    </div>
                  </>
                ) : selectedOption.startsWith('strippenkaart') ? (
                  <>
                    <div className="flex justify-between items-center text-2xl font-bold mb-2">
                      <span>{language === 'en' ? 'Total:' : 'Totaal:'}</span>
                      <span className="text-yellow-400">€{(() => {
                        const option = pricingOptions.find(o => o.id === selectedOption)
                        return option ? option.price : 0
                      })()}</span>
                    </div>
                    <div className="text-sm text-gray-600 font-medium mb-2">
                      {language === 'en' ? 'Monthly average:' : 'Maandelijks gemiddelde:'} €{totalPrice}
                    </div>
                    {/* ETA Calculator for Prepaid */}
                    <div className="mt-3 p-3 bg-blue-500/20 rounded-lg border border-blue-500">
                      <div className="text-blue-400 text-sm font-medium mb-1">
                        {language === 'en' ? 'Estimated Duration:' : 'Geschatte Duur:'}
                      </div>
                      <div className="text-white text-lg font-bold">
                        {(() => {
                          const option = pricingOptions.find(o => o.id === selectedOption)
                          if (!option?.hours) return ''
                          // Estimate: 2 hours per employee + 5 hours per server per month
                          const hoursPerMonth = (employees * 2) + (servers * 5)
                          const months = Math.ceil(option.hours / hoursPerMonth)
                          return `${months} ${language === 'en' ? 'months' : 'maanden'}`
                        })()}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {language === 'en' 
                          ? '*Based on average usage, depends on your team\'s needs'
                          : '*Gebaseerd op gemiddeld gebruik, afhankelijk van uw team'}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-center text-2xl font-bold mb-2">
                      <span>{language === 'en' ? 'Monthly:' : 'Maandelijks:'}</span>
                      <span className="text-yellow-400">€{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {language === 'en' ? 'Annual:' : 'Jaarlijks:'} €{(totalPrice * 12).toLocaleString()}
                    </div>
                    {billingPeriod === 'yearly' && (
                      <div className="mt-2 p-2 bg-green-500/20 rounded-lg border border-green-500">
                        <div className="text-green-400 text-sm font-medium">
                          {language === 'en' 
                            ? '✓ 10% yearly discount applied!' 
                            : '✓ 10% jaarkorting toegepast!'}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
              
              {savings > 0 && selectedOption.startsWith('fixed') && (
                <div className="mt-4 p-4 bg-green-500/20 rounded-lg border border-green-500">
                  <div className="text-green-400 font-bold mb-2">
                    {language === 'en' ? 'Monthly Savings:' : 'Maandelijkse Besparing:'} €{savings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mb-3">
                    {language === 'en' 
                      ? 'vs. average break-fix costs'
                      : 'vs. gemiddelde break-fix kosten'}
                  </div>
                  {/* Savings Progress Bar */}
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>{language === 'en' ? 'Break-Fix Cost' : 'Break-Fix Kosten'}</span>
                      <span>{Math.round((savings / (calculateBreakFixCosts() || 1)) * 100)}% {language === 'en' ? 'saved' : 'bespaard'}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.min((savings / (calculateBreakFixCosts() || 1)) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-xs text-green-600">
                    {language === 'en' 
                      ? `Annual savings: €${(savings * 12).toLocaleString()}`
                      : `Jaarlijkse besparing: €${(savings * 12).toLocaleString()}`}
                  </div>
                </div>
              )}
              
              {/* ROI Calculator */}
              {selectedOption.startsWith('fixed') && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-bold text-blue-800 mb-3 text-sm">
                    {language === 'en' ? '📊 Return on Investment' : '📊 Return on Investment'}
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700">
                        {language === 'en' ? 'Payback period:' : 'Terugverdientijd:'}
                      </span>
                      <span className="font-bold text-blue-800">
                        {savings > 0 ? `${Math.ceil((totalPrice * 3) / savings)} months` : 'Immediate'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">
                        {language === 'en' ? 'Risk reduction:' : 'Risicoreductie:'}
                      </span>
                      <span className="font-bold text-green-600">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">
                        {language === 'en' ? 'Predictability:' : 'Voorspelbaarheid:'}
                      </span>
                      <span className="font-bold text-green-600">100%</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Risk Assessment for Break-Fix */}
              {selectedOption === 'break-fix' && (
                <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                  <h5 className="font-bold text-red-800 mb-3 text-sm">
                    {language === 'en' ? '⚠️ Cost Risk Assessment' : '⚠️ Kostenrisico Beoordeling'}
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-red-700">
                        {language === 'en' ? 'Monthly variation:' : 'Maandelijkse variatie:'}
                      </span>
                      <span className="font-bold text-red-800">€0 - €2,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">
                        {language === 'en' ? 'Budget predictability:' : 'Budget voorspelbaarheid:'}
                      </span>
                      <span className="font-bold text-red-600">Low</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-700">
                        {language === 'en' ? 'Emergency costs:' : 'Noodkosten:'}
                      </span>
                      <span className="font-bold text-red-600">High risk</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-yellow-100 rounded text-xs text-yellow-800">
                    {language === 'en' 
                      ? '💡 Tip: Fixed Fee eliminates these risks entirely'
                      : '💡 Tip: Fixed Fee elimineert deze risico\'s volledig'}
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
              <a
                href="/contact"
                className="block w-full bg-black text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-gray-800 transition-all mb-4"
              >
                {language === 'en' ? 'Get Started →' : 'Start Nu →'}
              </a>
              <p className="text-xs">
                {language === 'en' 
                  ? '✓ Free IT assessment ✓ Custom advice ✓ No strings attached'
                  : '✓ Gratis IT-assessment ✓ Advies op maat ✓ Vrijblijvend'}
              </p>
            </div>

            {/* License Info */}
            <div className="bg-yellow-50 border border-yellow-400 rounded-xl p-4 mt-6">
              <h4 className="font-bold text-black mb-2 text-sm">
                {language === 'en' ? '💡 Software Licenses' : '💡 Software Licenties'}
              </h4>
              {selectedOption.startsWith('fixed') ? (
                <p className="text-xs text-gray-700">
                  {language === 'en' 
                    ? 'Fixed Fee includes ALL licenses (Backup, EDR/MDR, Monitoring, etc.) except Office 365'
                    : 'Fixed Fee inclusief ALLE licenties (Backup, EDR/MDR, Monitoring, etc.) behalve Office 365'}
                </p>
              ) : (
                <div className="space-y-2">
                  <p className="text-xs text-gray-700 font-medium">
                    {language === 'en' 
                      ? 'Break-Fix & Strippenkaart: Software licenses billed separately'
                      : 'Break-Fix & Strippenkaart: Software licenties apart gefactureerd'}
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Backup: €8-15 {language === 'en' ? 'per device/month' : 'per apparaat/maand'}</li>
                    <li>• EDR/MDR Security: €5-10 {language === 'en' ? 'per device/month' : 'per apparaat/maand'}</li>
                    <li>• Monitoring (RMM): €4-8 {language === 'en' ? 'per device/month' : 'per apparaat/maand'}</li>
                    <li>• Office 365: €6-57 {language === 'en' ? 'per user/month' : 'per gebruiker/maand'}</li>
                  </ul>
                  <p className="text-xs text-gray-600 italic">
                    {language === 'en' 
                      ? 'Prices depend on chosen solutions and number of devices'
                      : 'Prijzen afhankelijk van gekozen oplossingen en aantal apparaten'}
                  </p>
                </div>
              )}
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