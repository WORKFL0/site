'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'

const defaultTestimonials = [
  {
    name: 'Esther van der Plas',
    role: 'Managing Director',
    company: 'Doctor Feelgood',
    content: 'Every business needs Workflo. They are the IT Masters. Fast, knowledgeable, to the point, down to earth, friendly and super cool!',
    rating: 5,
    image: '/testimonials/esther.jpg',
  },
  {
    name: 'Thijs Muller',
    role: 'CEO',
    company: 'Havas Media',
    content: 'Workflo is een verlengstuk en integraal onderdeel van ons team. Zeer betrokken, makkelijk aanspreekbaar, oplossingsgericht, creatief en professioneel.',
    rating: 5,
    image: '/testimonials/thijs.jpg',
  },
  {
    name: 'Patrick Beijl',
    role: 'Commerciële Directeur',
    company: 'Winix',
    content: 'Florian and his team are there to help. Whether it is about simple usability issues (every day life at the office) or the more serious stuff about network, servers, trustworthy backup systems and security. Workflo knows. They solve it instantly. With a smile.',
    rating: 5,
    image: '/testimonials/patrick.jpg',
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
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

        {/* Review Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">Bekijk wat onze klanten zeggen op:</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <a
              href="https://g.page/r/CVLBg-DQ8Q0mEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="font-medium text-gray-700">Google Reviews</span>
              <span className="text-yellow-500">★★★★★</span>
            </a>
            <a
              href="https://www.trustpilot.com/review/workflo.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-24 h-6" viewBox="0 0 126 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.7 22.3V10.2h-3.9V8.3h10v1.9h-3.9v12.1h-2.2zm8.5 0V14c0-1.1.2-2 .7-2.6.5-.7 1.2-1 2.2-1 .5 0 .9.1 1.3.2v1.8c-.3-.1-.6-.1-.9-.1-.5 0-.9.2-1.1.5-.2.3-.3.8-.3 1.4v8.1h-1.9zm12.3-8.5v8.5h-1.9v-1.3c-.5.9-1.4 1.4-2.5 1.4-1.9 0-3.1-1.4-3.1-3.9v-5.7h1.9v5.3c0 1.6.6 2.4 1.8 2.4s1.9-.8 1.9-2.4v-5.3h1.9zm7.5 6.9c1 0 1.8-.3 2.3-.9l1.3 1c-.8 1-2 1.5-3.6 1.5-2.8 0-4.6-1.8-4.6-4.6s1.8-4.6 4.4-4.6c2.5 0 4.2 1.8 4.2 4.5 0 .3 0 .5-.1.7h-6.6c.2 1.5 1.2 2.4 2.7 2.4zm-2.6-3.8h4.7c-.1-1.3-.9-2.1-2.3-2.1-1.2 0-2.1.8-2.4 2.1zm11.2 5.7c-1.1 0-2-.4-2.5-1.1v1h-1.9v-9.2h1.9v3.4c.5-.7 1.4-1.1 2.5-1.1 2.2 0 3.8 1.7 3.8 4.5s-1.6 4.5-3.8 4.5zm-.4-7.4c-1.4 0-2.4 1-2.4 2.8s1 2.8 2.4 2.8 2.4-1 2.4-2.8-1-2.8-2.4-2.8z" fill="#191919"/>
                <path d="M76.8 9.5c0-.5.4-.9.9-.9s.9.4.9.9-.4.9-.9.9-.9-.4-.9-.9zm.1 3.3h1.9v9.5h-1.9v-9.5zm4.2 0h1.9v9.5h-1.9v-9.5zm0-3.3h1.9v2h-1.9v-2zm8.6 13c-2.6 0-4.5-1.8-4.5-4.6s1.9-4.6 4.5-4.6 4.5 1.8 4.5 4.6-1.9 4.6-4.5 4.6zm0-1.7c1.5 0 2.6-1.1 2.6-2.9s-1.1-2.9-2.6-2.9-2.6 1.1-2.6 2.9 1.1 2.9 2.6 2.9zm10.3 1.6c-1.3 0-2.1-.9-2.1-2.3v-5.1h-1.2v-1.6h1.2v-2.3h1.9v2.3H102v1.6h-2.1v4.9c0 .6.3.9.8.9.4 0 .8-.1 1.1-.3v1.6c-.5.2-1 .3-1.7.3z" fill="#00B67A"/>
                <path d="M15.5 5.9l1.8 5.6h5.9l-4.8 3.5 1.8 5.6-4.8-3.5-4.8 3.5 1.8-5.6-4.8-3.5h5.9l1.8-5.6z" fill="#00B67A"/>
              </svg>
              <span className="text-green-600">★★★★★</span>
            </a>
          </div>
        </motion.div>

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
            <span>Lees meer succesverhalen</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Add Link import
import Link from 'next/link'

export default TestimonialsSection