'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '../ui/Button'
import { useEffect, useRef } from 'react'

const CTASectionWithVideo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const videoRef = useRef<HTMLVideoElement>(null)
  
  useEffect(() => {
    // Force video to play on mount
    const video = videoRef.current
    if (video) {
      video.play().catch(err => {
        console.error('CTA Video autoplay failed:', err)
      })
    }
  }, [])

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Workflo-code-animatie.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Emergency banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 text-white"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="text-sm font-medium">Beperkte tijd: Gratis IT-scan voor Amsterdamse bedrijven</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Stop Met Zorgen Over IT-Problemen
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Ontvang vandaag nog je gratis IT-scan en ontdek hoe je kosten met 35% kunt verlagen 
            terwijl je downtime elimineert. Geen verplichtingen, alleen inzichten.
          </p>

          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8"
          >
            {[
              '30 minuten consultatie',
              'Op maat gemaakte kostenanalyse',
              'Beveiligingsaudit inbegrepen'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-white">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              href="/tevredenheidscheck" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl"
            >
              Start Gratis IT-Scan
            </Button>
            <Button 
              href="tel:0203080465" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel Nu: 020-30 80 465
            </Button>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-white/80 text-sm"
          >
            Vertrouwd door 100+ Amsterdamse bedrijven • Gemiddelde reactietijd: 15 minuten
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASectionWithVideo