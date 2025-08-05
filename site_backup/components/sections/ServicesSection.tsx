'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const services = [
  {
    title: 'Cloud Services',
    description: 'Reduce IT costs by 35% with smart cloud solutions. Scalable, secure, and optimized for Amsterdam businesses.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    href: '/services/cloud',
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your business from the 39% of European companies hit by cyberattacks. 24/7 monitoring and response.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    href: '/services/security',
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Managed IT Services',
    description: 'Focus on growth while we handle your IT. 95% less downtime, predictable monthly costs, expert support.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    href: '/services/managed-it',
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'IT Consulting',
    description: 'Strategic technology guidance for Amsterdam SMEs. Transform IT from cost center to growth engine.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    href: '/services/consulting',
    color: 'from-amber-400 to-amber-600',
  },
]

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Animated Background decorations */}
      <div className="absolute inset-0">
        {/* Moving circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 rounded-full filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-200 rounded-full filter blur-xl opacity-20 animate-float-slow"></div>
        
        {/* Floating dots */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary-300 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-primary-500 rounded-full animate-pulse animation-delay-4000"></div>
        
        {/* Gradient mesh */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-transparent rounded-full filter blur-3xl opacity-30 animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Solutions That <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From cloud migration to cybersecurity, we provide comprehensive IT solutions 
            tailored for Amsterdam&apos;s ambitious businesses.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group relative ${index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <Link href={service.href}>
                <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-primary-200 relative overflow-hidden group-hover:-translate-y-2">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                    <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 animate-ping"></div>
                    <div className="relative group-hover:animate-bounce">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Hover effect corner */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-lg group"
          >
            <span>View all services</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection