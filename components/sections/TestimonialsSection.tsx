'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'
import Link from 'next/link'

const defaultTestimonials = [
  {
    name: 'Esther van der Plas',
    role: 'Managing Director',
    company: 'Doctor Feelgood',
    content: 'Every business needs Workflo. They are the IT Masters. Fast, knowledgeable, to the point, down to earth, friendly and super cool!',
    rating: 5,
    logo: '/images/logos/doctor-feelgood.jpg',
  },
  {
    name: 'Thijs Muller',
    role: 'CEO',
    company: 'Havas Media',
    content: 'Workflo is een verlengstuk en integraal onderdeel van ons team. Zeer betrokken, makkelijk aanspreekbaar, oplossingsgericht, creatief en professioneel.',
    rating: 5,
    logo: '/images/logos/havas-media.png',
  },
  {
    name: 'Patrick Beijl',
    role: 'Commerciële Directeur',
    company: 'Winix',
    content: 'Florian and his team are there to help. Whether it is about simple usability issues (every day life at the office) or the more serious stuff about network, servers, trustworthy backup systems and security. Workflo knows. They solve it instantly. With a smile.',
    rating: 5,
    logo: '/images/logos/winix.jpg',
  },
]

interface TestimonialsSectionProps {
  testimonials?: typeof defaultTestimonials
}

const TestimonialsSection = ({ testimonials = defaultTestimonials }: TestimonialsSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-50"></div>
      
      {/* Animated elements */}
      <div className="absolute inset-0">
        {/* Floating stars */}
        <div className="absolute top-10 left-20 text-4xl text-yellow-400 opacity-20 animate-float">★</div>
        <div className="absolute bottom-20 right-10 text-3xl text-yellow-400 opacity-20 animate-float-delayed">★</div>
        <div className="absolute top-1/3 right-1/4 text-5xl text-yellow-400 opacity-20 animate-float-slow">★</div>
        <div className="absolute bottom-1/4 left-1/3 text-3xl text-yellow-400 opacity-20 animate-float">★</div>
        
        {/* Rotating gradient orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-200 to-transparent rounded-full filter blur-3xl opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-br from-yellow-200 to-transparent rounded-full filter blur-3xl opacity-20 animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Vertrouwd door <span className="text-gradient">de Beste Bedrijven</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Geloof niet alleen ons. Lees wat onze klanten zeggen over de samenwerking met Workflo.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group ${index % 2 === 0 ? 'animate-float-slow' : 'animate-float-delayed'}`}
              style={{
                animationDelay: `${index * 0.5}s`
              }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col relative overflow-hidden group-hover:scale-105">
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-6xl text-primary-100 font-serif">&quot;</div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse"
                      style={{
                        animationDelay: `${i * 100}ms`
                      }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 flex-grow italic">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                    {testimonial.logo ? (
                      <Image
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain p-1"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Sluit je aan bij 100+ bedrijven die Workflo vertrouwen</p>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group"
          >
            <span>{t('testimonials.more')}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection