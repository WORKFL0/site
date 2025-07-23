
import { client } from '@/lib/sanity.client'
import { useEffect, useState } from 'react'
import { groq } from 'next-sanity'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const serviceQuery = groq`*[_type == "service"] | order(order asc) {
  _id,
  title,
  shortDescription,
  slug,
  icon,
  color
}`


const ServicesSection = () => {
  const [services, setServices] = useState<any[]>([])
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    client.fetch(serviceQuery).then(setServices)
  }, [])

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
            tailored for Amsterdam's ambitious businesses.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service: any, index: number) => (
            <motion.div
              key={service._id}
              variants={itemVariants}
              className={`group relative ${index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <Link href={service.slug?.current ? `/services/${service.slug.current}` : '#'}>
                <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-primary-200 relative overflow-hidden group-hover:-translate-y-2">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon (optional: render Sanity image if available) */}
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                    {/* TODO: Render Sanity image if service.icon exists */}
                    <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 animate-ping"></div>
                    <div className="relative group-hover:animate-bounce">
                      {/* Placeholder icon or Sanity image */}
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.shortDescription}
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