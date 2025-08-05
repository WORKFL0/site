'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '@/components/ui/Button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Declare HubSpot global types
declare global {
  interface Window {
    hbspt: any
  }
}

export default function ContactPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    // Load HubSpot forms script
    const script = document.createElement('script')
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    script.onload = () => {
      // Create HubSpot form
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "143658118",
          formId: "52569a01-e73e-4d0f-9f3f-9c7f68e5e5a5",
          target: "#hubspot-form-container",
          onFormReady: () => {
            // Style the HubSpot form to match our design
            const style = document.createElement('style')
            style.textContent = `
              .hs-form-field label {
                font-size: 0.875rem;
                font-weight: 500;
                color: #374151;
                margin-bottom: 0.5rem;
                display: block;
              }
              .hs-input {
                width: 100%;
                padding: 0.75rem 1rem;
                border: 1px solid #d1d5db;
                border-radius: 0.5rem;
                transition: all 0.2s;
                font-size: 1rem;
              }
              .hs-input:focus {
                outline: none;
                border-color: #f16e13;
                box-shadow: 0 0 0 3px rgba(241, 110, 19, 0.1);
              }
              .hs-form-field {
                margin-bottom: 1.5rem;
              }
              .hs-button {
                width: 100%;
                padding: 0.875rem 1.5rem;
                background-color: #f16e13;
                color: white;
                border: none;
                border-radius: 0.5rem;
                font-size: 1.125rem;
                font-weight: 500;
                cursor: pointer;
                transition: background-color 0.2s;
              }
              .hs-button:hover {
                background-color: #e54f0d;
              }
              .hs-error-msgs {
                margin-top: 0.5rem;
                color: #dc2626;
                font-size: 0.875rem;
              }
              .submitted-message {
                padding: 1rem;
                background-color: #d1fae5;
                border: 1px solid #6ee7b7;
                border-radius: 0.5rem;
                color: #065f46;
              }
            `
            document.head.appendChild(style)
          },
          onFormSubmit: () => {
            // Track form submission in analytics if needed
            console.log('Form submitted successfully')
          }
        })
      }
    }

    return () => {
      // Cleanup
      const hubspotScript = document.querySelector('script[src*="hsforms.net"]')
      if (hubspotScript) {
        hubspotScript.remove()
      }
    }
  }, [])

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-primary-50 to-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Stop Met IT-Stress, <span className="text-gradient">Begin Met Groeien</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600">
                Direct antwoord op je IT-vragen? Bel ons of vul het formulier in. 
                Gemiddelde reactietijd: 15 minuten.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                ref={formRef}
                initial={{ opacity: 0, x: -20 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Verstuur een Bericht</h2>
                  <p className="text-gray-600 mb-8">
                    Vul het formulier in en we nemen binnen 24 uur contact met je op. 
                    Voor urgente zaken kun je ons direct bellen.
                  </p>
                  
                  {/* HubSpot Form Container */}
                  <div id="hubspot-form-container" className="min-h-[400px]">
                    <div className="animate-pulse">
                      <div className="h-10 bg-gray-200 rounded mb-4"></div>
                      <div className="h-10 bg-gray-200 rounded mb-4"></div>
                      <div className="h-10 bg-gray-200 rounded mb-4"></div>
                      <div className="h-20 bg-gray-200 rounded mb-4"></div>
                      <div className="h-12 bg-gray-300 rounded w-32"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Information & Map */}
              <motion.div
                ref={infoRef}
                initial={{ opacity: 0, x: 20 }}
                animate={infoInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Direct Contact Card */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                  <div className="space-y-4">
                    <a href="tel:0203080465" className="flex items-center gap-3 hover:underline group">
                      <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm opacity-90">Bel ons direct</div>
                        <div className="text-xl font-semibold">020-30 80 465</div>
                      </div>
                    </a>
                    
                    <a href="mailto:info@workflo.nl" className="flex items-center gap-3 hover:underline group">
                      <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm opacity-90">Email ons</div>
                        <div className="text-xl font-semibold">info@workflo.nl</div>
                      </div>
                    </a>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-sm opacity-90 mb-2">Urgente IT-problemen?</p>
                    <p className="font-semibold">Gemiddelde reactietijd: 15 minuten</p>
                  </div>
                </div>
                
                {/* Office Info */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Kantooradres</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-gray-900 font-medium">Workflo Amsterdam</p>
                        <p className="text-gray-600">
                          Koivistokade 3<br />
                          1013AC Amsterdam<br />
                          Nederland
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-gray-900 font-medium">Openingstijden</p>
                        <p className="text-gray-600">
                          Ma-Vr: 9:00 - 17:00<br />
                          24/7 support voor contractklanten
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Button href="https://maps.google.com/maps?q=Koivistokade+3+Amsterdam" target="_blank" variant="outline" size="sm" className="w-full mt-4">
                    Route plannen
                  </Button>
                </div>
                
                {/* Quick Help */}
                <div className="bg-primary-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Snel Antwoord Nodig?</h3>
                  <p className="text-gray-700 mb-4">
                    Check onze IT Health Check om direct te zien of je huidige IT-partner goed presteert.
                  </p>
                  <Button href="/tevredenheidscheck" variant="outline" size="sm" className="w-full">
                    Start IT Health Check
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Kom Langs Voor Een Kop Koffie
            </h2>
            
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.603659021858!2d4.888571976608!3d52.38495507204196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c0c0000001%3A0xd7c8f4e8a1234567!2sKoivistokade%203%2C%201013%20AM%20Amsterdam%2C%20Nederland!5e0!3m2!1snl!2snl!4v1635789012345!5m2!1snl!2snl"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Workflo Kantoorlocatie"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">WhatsApp Business</h3>
                  <p className="text-gray-600 text-sm mb-3">Chat direct met ons team</p>
                  <a href="https://wa.me/31203080465" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Start WhatsApp →
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Plan een Meeting</h3>
                  <p className="text-gray-600 text-sm mb-3">Persoonlijk of online</p>
                  <a href="/schedule" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Kies een tijdslot →
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Support Portal</h3>
                  <p className="text-gray-600 text-sm mb-3">Voor bestaande klanten</p>
                  <a href="https://support.workflo.nl" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Login support →
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}