'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
}

const CountUp = ({ end, duration = 2000, suffix = '' }: CountUpProps) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

interface StatsSectionProps {
  stats?: {
    clients: string
    uptime: string
    responseTime: string
    satisfaction: string
  }
  partners?: Array<{
    name: string
    logoUrl: string
  }>
}

const defaultStats = [
  {
    value: 100,
    suffix: '+',
    label: 'Bedrijven vertrouwen ons',
    description: 'In Amsterdam en omgeving',
  },
  {
    value: 35,
    suffix: '%',
    label: 'Kostenbesparing',
    description: 'Door slimme IT-optimalisatie',
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Uptime Garantie',
    description: '24/7 monitoring en support',
  },
  {
    value: 15,
    suffix: ' min',
    label: 'Gemiddelde Reactietijd',
    description: 'Voor urgente problemen',
  },
]

const StatsSection = ({ stats, partners }: StatsSectionProps = {}) => {
  const statItems = stats ? [
    {
      value: parseInt(stats.clients) || 100,
      suffix: '+',
      label: 'Bedrijven vertrouwen ons',
      description: 'In Amsterdam en omgeving',
    },
    {
      value: 35,
      suffix: '%',
      label: 'Kostenbesparing',
      description: 'Door slimme IT-optimalisatie',
    },
    {
      value: parseFloat(stats.uptime) || 99.9,
      suffix: '%',
      label: 'Uptime Garantie',
      description: '24/7 monitoring en support',
    },
    {
      value: parseInt(stats.responseTime) || 15,
      suffix: ' min',
      label: 'Gemiddelde Reactietijd',
      description: 'Voor urgente problemen',
    },
  ] : defaultStats
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary-400/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;re not just another IT provider. We&apos;re your growth partner with proven results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-gradient mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <div className="text-gray-400 text-sm mb-2">Onze partners</div>
          </div>
          <div className="relative overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
            
            {/* Partners carousel */}
            <div className="flex animate-scroll">
              <div className="flex items-center gap-12 px-12">
                {(partners || []).map((partner: { name: string; logoUrl: string }) => (
                  <div key={partner.name} className="bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 border border-white/20 whitespace-nowrap flex items-center justify-center h-20 w-32">
                    {partner.logoUrl && (
                      <Image
                        src={partner.logoUrl}
                        alt={partner.name}
                        width={80}
                        height={40}
                        style={{ objectFit: 'contain' }}
                      />
                    )}
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless scroll */}
              <div className="flex items-center gap-12 px-12">
                {(partners || []).map((partner: { name: string; logoUrl: string }, index: number) => (
                  <div key={`${partner.name}-duplicate-${index}`} className="bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 border border-white/20 whitespace-nowrap flex items-center justify-center h-20 w-32">
                    {partner.logoUrl && (
                      <Image
                        src={partner.logoUrl}
                        alt={partner.name}
                        width={80}
                        height={40}
                        style={{ objectFit: 'contain' }}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection