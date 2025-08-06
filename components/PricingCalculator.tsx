'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ServiceOption {
  id: string
  name: string
  description: string
  basePrice: number
  userMultiplier?: number
  features: string[]
  recommended?: boolean
}

const PricingCalculator = () => {
  const [employees, setEmployees] = useState(10)
  const [selectedServices, setSelectedServices] = useState<string[]>(['managed-it'])
  const [totalPrice, setTotalPrice] = useState(0)
  const [savings, setSavings] = useState(0)

  const services: ServiceOption[] = [
    {
      id: 'managed-it',
      name: 'Complete IT Department',
      description: 'Everything you need to eliminate IT problems forever',
      basePrice: 199,
      userMultiplier: 45,
      features: [
        'Problems fixed before you notice them',
        '4-minute response time guaranteed',
        'Unlimited support requests',
        'Automatic security & updates',
        'Never lose a file with hourly backups'
      ],
      recommended: true
    },
    {
      id: 'cybersecurity',
      name: 'Bulletproof Security Shield',
      description: 'Stop hackers cold and avoid €20M GDPR fines',
      basePrice: 299,
      userMultiplier: 25,
      features: [
        'Block 99.9% of cyber threats',
        'GDPR compliance guaranteed',
        'Turn employees into security experts',
        '1-hour breach response',
        'Fix vulnerabilities before hackers find them'
      ]
    },
    {
      id: 'cloud-services',
      name: 'Cloud Transformation',
      description: 'Work from anywhere with zero downtime',
      basePrice: 149,
      userMultiplier: 35,
      features: [
        'Microsoft 365 done right',
        'Seamless cloud migration',
        'Access everything, anywhere, anytime',
        '10x faster performance',
        'Cut cloud costs by 35%'
      ]
    },
    {
      id: 'consulting',
      name: 'IT Consulting',
      description: 'Strategic planning and digital transformation',
      basePrice: 499,
      features: [
        'IT Strategy Development',
        'Technology Roadmap',
        'Vendor Management',
        'Project Planning',
        'Digital Transformation'
      ]
    },
    {
      id: 'compliance',
      name: 'Compliance & Auditing',
      description: 'GDPR, ISO 27001, and regulatory compliance',
      basePrice: 399,
      features: [
        'GDPR Compliance',
        'ISO 27001 Preparation',
        'Compliance Audits',
        'Policy Development',
        'Risk Assessment'
      ]
    }
  ]

  const addOns = [
    { id: 'priority-support', name: '4-Hour Response SLA', price: 99 },
    { id: 'on-site-support', name: 'On-site Support (8hrs/month)', price: 199 },
    { id: 'weekend-support', name: 'Weekend Support', price: 149 },
    { id: 'dedicated-account', name: 'Dedicated Account Manager', price: 299 }
  ]

  useEffect(() => {
    let total = 0
    let traditionalCost = employees * 180 // Traditional IT cost per employee

    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId)
      if (service) {
        total += service.basePrice
        if (service.userMultiplier) {
          total += service.userMultiplier * employees
        }
      }
    })

    setTotalPrice(total)
    setSavings(Math.max(0, traditionalCost - total))
  }, [selectedServices, employees])

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const getEmployeeRange = () => {
    if (employees <= 5) return 'Micro Business'
    if (employees <= 25) return 'Small Business'
    if (employees <= 100) return 'Medium Business'
    return 'Enterprise'
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-black mb-4">
          See Exactly How Much You'll Save in 30 Seconds
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Amsterdam businesses using our calculator discover €19,000+ in annual savings. 
          Your custom quote is 90% accurate and requires zero commitment.
        </p>
        <div className="inline-flex items-center gap-2 bg-green-100 border border-green-500 rounded-full px-6 py-2 mt-4">
          <span className="text-green-600 font-bold">✓</span>
          <span className="text-green-700 font-medium">247 businesses calculated savings this month</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-8">
          {/* Company Size */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-black mb-4">Company Size</h3>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees: {employees}
              </label>
              <input
                type="range"
                min="1"
                max="500"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #f2f400 0%, #f2f400 ${((employees - 1) / 499) * 100}%, #e5e5e5 ${((employees - 1) / 499) * 100}%, #e5e5e5 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>1</span>
                <span className="font-medium text-black">{getEmployeeRange()}</span>
                <span>500+</span>
              </div>
            </div>
          </div>

          {/* Service Selection */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-black mb-6">Select Services</h3>
            <div className="grid gap-4">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.01 }}
                  className={`relative p-6 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedServices.includes(service.id)
                      ? 'border-yellow-400 bg-yellow-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handleServiceToggle(service.id)}
                >
                  {service.recommended && (
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                      RECOMMENDED
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-black mb-1">{service.name}</h4>
                      <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                      
                      <div className="text-sm text-gray-500">
                        Base: €{service.basePrice}/month
                        {service.userMultiplier && (
                          <span> + €{service.userMultiplier}/user/month</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="w-5 h-5 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-yellow-400 mr-2">✓</span>
                        {feature}
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
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Price Summary</h3>
              
              <div className="space-y-4 mb-6">
                {selectedServices.map(serviceId => {
                  const service = services.find(s => s.id === serviceId)
                  if (!service) return null
                  
                  const serviceCost = service.basePrice + (service.userMultiplier ? service.userMultiplier * employees : 0)
                  
                  return (
                    <div key={serviceId} className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-gray-400">
                          {employees} employees
                        </div>
                      </div>
                      <div className="text-yellow-400 font-bold">
                        €{serviceCost.toLocaleString()}
                      </div>
                    </div>
                  )
                })}
              </div>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between items-center text-2xl font-bold mb-2">
                  <span>Monthly Total:</span>
                  <span className="text-yellow-400">€{totalPrice.toLocaleString()}</span>
                </div>
                <div className="text-sm text-gray-400">
                  Annual: €{(totalPrice * 12).toLocaleString()}
                </div>
              </div>
              
              {savings > 0 && (
                <div className="mt-4 p-4 bg-yellow-400/20 rounded-lg border border-yellow-400">
                  <div className="text-yellow-400 font-bold text-lg">
                    Monthly Savings: €{savings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-300">
                    vs. traditional IT support (€{(employees * 180).toLocaleString()}/month)
                  </div>
                  <div className="text-yellow-400 font-bold">
                    Annual Savings: €{(savings * 12).toLocaleString()}
                  </div>
                </div>
              )}
            </div>
            
            {/* CTA */}
            <div className="bg-yellow-400 text-black rounded-xl p-6 text-center">
              <div className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                🔥 LIMITED TIME: Free Migration Worth €2,500
              </div>
              <h4 className="text-xl font-bold mb-4">Lock In These Savings Now</h4>
              <p className="text-sm mb-6">
                Get your exact quote + free migration plan + €2,500 bonus.
                Only 3 spots left for March.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-black text-white py-4 px-6 rounded-full font-bold text-lg hover:bg-gray-800 transition-all mb-4"
              >
                Claim My Savings + Bonus →
              </motion.button>
              <p className="text-xs">
                ✓ 2-minute process ✓ Instant quote ✓ €2,500 migration included
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="mt-16 bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-center text-black mb-8">
          What Happens After You Switch to Workflo?
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">⏰</div>
            <h4 className="font-bold text-lg mb-2">Week 1: Instant Relief</h4>
            <p className="text-gray-600 text-sm">
              IT problems stop. Support answers immediately. You wonder why you waited so long.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h4 className="font-bold text-lg mb-2">Month 1: Productivity Soars</h4>
            <p className="text-gray-600 text-sm">
              Team productivity up 60%. IT costs down 40%. Zero downtime recorded.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h4 className="font-bold text-lg mb-2">Year 1: Competitive Edge</h4>
            <p className="text-gray-600 text-sm">
              €19,000+ saved. Technology drives growth. Competitors wonder how you do it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCalculator