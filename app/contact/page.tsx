'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '@/components/ui/Button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HubSpotForm from '@/components/forms/HubSpotFormClient'
import { useLanguage } from '@/context/LanguageContext'
import { debugHubSpot } from '@/utils/hubspot-debug'

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
  const { t } = useLanguage()
  const [useComponentForm] = useState(true) // Set to true to use the component-based approach
  const [showDebug, setShowDebug] = useState(false)
  
  // Enable debug mode with keyboard shortcut (Ctrl/Cmd + Shift + D)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        setShowDebug(prev => !prev)
        setTimeout(() => debugHubSpot(), 100)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  useEffect(() => {
    // Skip if using component form
    if (useComponentForm) return;
    
    let retryCount = 0;
    const maxRetries = 3;
    let retryTimeout: NodeJS.Timeout;
    let formCreated = false;

    const createHubSpotForm = () => {
      // Check if container exists
      const container = document.getElementById('hubspot-form-container');
      if (!container) {
        console.error('HubSpot form container not found');
        return false;
      }

      // Check if HubSpot object exists
      if (!window.hbspt || !window.hbspt.forms) {
        console.error('HubSpot forms API not available');
        return false;
      }

      try {
        // Clear any existing content in the container
        container.innerHTML = '';
        
        // Create the form
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "26510736",
          formId: "acf3fe0b-c542-4fc2-aa14-f3cb2fc356c0",
          target: "#hubspot-form-container",
          onFormReady: (form: any) => {
            console.log('HubSpot form ready', form);
            formCreated = true;
            
            // Add custom styles
            const styleId = 'hubspot-custom-styles';
            if (!document.getElementById(styleId)) {
              const style = document.createElement('style');
              style.id = styleId;
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
              `;
              document.head.appendChild(style);
            }
          },
          onFormSubmit: () => {
            console.log('Form submitted successfully');
          },
          onFormSubmitted: () => {
            console.log('Form submission completed');
          }
        });
        
        return true;
      } catch (error) {
        console.error('Error creating HubSpot form:', error);
        return false;
      }
    };

    const loadHubSpotScript = () => {
      // Check if script is already loaded
      const existingScript = document.querySelector('script[src*="hsforms.net"]');
      
      if (existingScript) {
        // Script already exists, try to create form
        if (window.hbspt && window.hbspt.forms) {
          createHubSpotForm();
        } else {
          // Wait for script to fully load
          const checkInterval = setInterval(() => {
            if (window.hbspt && window.hbspt.forms) {
              clearInterval(checkInterval);
              createHubSpotForm();
            }
          }, 100);
          
          // Clear interval after 5 seconds to prevent infinite loop
          setTimeout(() => clearInterval(checkInterval), 5000);
        }
        return;
      }

      // Create and load the script
      const script = document.createElement('script');
      script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.charset = 'utf-8';
      
      script.onload = () => {
        console.log('HubSpot script loaded');
        
        // Wait a bit for the HubSpot object to be fully initialized
        const waitForHubSpot = () => {
          if (window.hbspt && window.hbspt.forms) {
            const success = createHubSpotForm();
            
            if (!success && retryCount < maxRetries) {
              retryCount++;
              console.log(`Retrying form creation (${retryCount}/${maxRetries})...`);
              retryTimeout = setTimeout(waitForHubSpot, 1000);
            }
          } else if (retryCount < maxRetries) {
            retryCount++;
            console.log(`Waiting for HubSpot API (${retryCount}/${maxRetries})...`);
            retryTimeout = setTimeout(waitForHubSpot, 1000);
          } else {
            console.error('Failed to load HubSpot forms after maximum retries');
            // Show fallback content
            const container = document.getElementById('hubspot-form-container');
            if (container) {
              container.innerHTML = `
                <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p class="text-red-600 mb-3">Het contactformulier kon niet worden geladen.</p>
                  <p class="text-sm text-gray-600 mb-3">U kunt ons bereiken via:</p>
                  <a href="tel:0203080465" class="block text-primary-600 hover:underline mb-2">📞 020-30 80 465</a>
                  <a href="mailto:info@workflo.nl" class="block text-primary-600 hover:underline">✉️ info@workflo.nl</a>
                </div>
              `;
            }
          }
        };
        
        // Start the initialization check
        setTimeout(waitForHubSpot, 100);
      };
      
      script.onerror = (error) => {
        console.error('Failed to load HubSpot script:', error);
        
        // Show fallback content
        const container = document.getElementById('hubspot-form-container');
        if (container) {
          container.innerHTML = `
            <div class="bg-red-50 border border-red-200 rounded-lg p-4">
              <p class="text-red-600 mb-3">Het contactformulier kon niet worden geladen.</p>
              <p class="text-sm text-gray-600 mb-3">U kunt ons bereiken via:</p>
              <a href="tel:0203080465" class="block text-primary-600 hover:underline mb-2">📞 020-30 80 465</a>
              <a href="mailto:info@workflo.nl" class="block text-primary-600 hover:underline">✉️ info@workflo.nl</a>
            </div>
          `;
        }
      };
      
      document.body.appendChild(script);
    };

    // Start loading after a small delay to ensure DOM is ready
    const loadTimeout = setTimeout(loadHubSpotScript, 100);

    return () => {
      // Cleanup
      clearTimeout(loadTimeout);
      clearTimeout(retryTimeout);
      
      // Only remove script if form wasn't created successfully
      if (!formCreated) {
        const hubspotScript = document.querySelector('script[src*="hsforms.net"]');
        if (hubspotScript) {
          hubspotScript.remove();
        }
      }
    };
  }, [useComponentForm])

  return (
    <>
      <Header />
      
      {/* Debug Panel */}
      {showDebug && (
        <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg shadow-xl z-50 max-w-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold">HubSpot Debug</h3>
            <button 
              onClick={() => setShowDebug(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <div className="text-xs space-y-1">
            <div>Mode: {useComponentForm ? 'Component' : 'Direct'}</div>
            <div>Portal: 26510736</div>
            <div>Form: acf3fe0b-c542-4fc2-aa14-f3cb2fc356c0</div>
            <div>Region: eu1</div>
            <button 
              onClick={() => debugHubSpot()} 
              className="mt-2 px-2 py-1 bg-blue-500 rounded text-xs"
            >
              Run Debug Check
            </button>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-700 text-xs">
            Press Ctrl/Cmd + Shift + D to toggle
          </div>
        </div>
      )}
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
                {t('contact.hero.title')}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600">
                {t('contact.hero.description')}
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.form.title')}</h2>
                  <p className="text-gray-600 mb-8">
                    {t('contact.form.description')}
                  </p>
                  
                  {/* HubSpot Form Container */}
                  {useComponentForm ? (
                    <HubSpotForm
                      region="eu1"
                      portalId="26510736"
                      formId="acf3fe0b-c542-4fc2-aa14-f3cb2fc356c0"
                      onFormReady={() => console.log('Contact form ready')}
                      onFormSubmit={() => console.log('Contact form submitted')}
                      onFormSubmitted={() => console.log('Contact form submission completed')}
                    />
                  ) : (
                    <div id="hubspot-form-container" className="min-h-[400px]">
                      <div className="animate-pulse">
                        <div className="h-10 bg-gray-200 rounded mb-4"></div>
                        <div className="h-10 bg-gray-200 rounded mb-4"></div>
                        <div className="h-10 bg-gray-200 rounded mb-4"></div>
                        <div className="h-20 bg-gray-200 rounded mb-4"></div>
                        <div className="h-12 bg-gray-300 rounded w-32"></div>
                      </div>
                    </div>
                  )}
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
                <div className="bg-black rounded-2xl p-6 text-white relative overflow-hidden">
                  {/* Danger Tape Stripe */}
                  <div className="absolute top-0 left-0 right-0 h-3" style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      #f2f400,
                      #f2f400 15px,
                      #000000 15px,
                      #000000 30px
                    )`
                  }}></div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">{t('contact.direct.title')}</h3>
                    <div className="space-y-4">
                      <a href="tel:0203080465" className="flex items-center gap-3 hover:underline group">
                        <div className="p-3 bg-yellow-400/20 rounded-lg group-hover:bg-yellow-400/30 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm opacity-90">{t('contact.direct.call')}</div>
                        <div className="text-xl font-semibold">020-30 80 465</div>
                      </div>
                    </a>
                      
                      <a href="mailto:info@workflo.nl" className="flex items-center gap-3 hover:underline group">
                        <div className="p-3 bg-yellow-400/20 rounded-lg group-hover:bg-yellow-400/30 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm opacity-90">{t('contact.direct.email')}</div>
                          <div className="text-xl font-semibold">info@workflo.nl</div>
                        </div>
                      </a>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-sm opacity-90 mb-2">{t('contact.direct.urgent')}</p>
                      <p className="font-semibold">{t('contact.direct.response_time')}</p>
                    </div>
                  </div>
                </div>
                
                {/* Office Info with Building Photo */}
                <div className="bg-gray-50 rounded-2xl p-6 relative overflow-hidden">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">{t('contact.office.title')}</h3>
                  
                  {/* Building Photo */}
                  <div className="mb-6 relative z-10">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <Image 
                        src="/images/building.jpg" 
                        alt="Workflo kantoorpand Amsterdam"
                        width={400}
                        height={192}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white px-3 py-1 rounded-lg flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Ons kantoor</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Address Information */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-400 shadow-sm mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-yellow-100 rounded-lg">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.office.name')}</h4>
                        <div className="text-gray-700 space-y-1">
                          <div className="font-medium">Koivistokade 3</div>
                          <div>1013AC Amsterdam</div>
                          <div>Nederland</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-gray-900 font-medium">{t('contact.office.hours.title')}</p>
                        <p className="text-gray-600">
                          {t('contact.office.hours.weekdays')}<br />
                          {t('contact.office.hours.support')}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Button href="https://maps.google.com/maps?q=Koivistokade+3+Amsterdam" target="_blank" variant="outline" size="sm" className="w-full mt-6 relative z-10">
                    {t('contact.route')}
                  </Button>
                </div>
                
                {/* Quick Help */}
                <div className="bg-primary-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('contact.quick_help.title')}</h3>
                  <p className="text-gray-700 mb-4">
                    {t('contact.quick_help.description')}
                  </p>
                  <Button href="/tevredenheidscheck" variant="outline" size="sm" className="w-full">
                    {t('contact.quick_help.button')}
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
              {t('contact.map.title')}
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
                  <h3 className="font-semibold text-gray-900 mb-1">{t('contact.whatsapp.title')}</h3>
                  <p className="text-gray-600 text-sm mb-3">{t('contact.whatsapp.description')}</p>
                  <a href="https://wa.me/31203080465" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    {t('contact.whatsapp.cta')}
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
                  <h3 className="font-semibold text-gray-900 mb-1">{t('contact.schedule.title')}</h3>
                  <p className="text-gray-600 text-sm mb-3">{t('contact.schedule.description')}</p>
                  <a href="/schedule" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    {t('contact.schedule.cta')}
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
                  <h3 className="font-semibold text-gray-900 mb-1">{t('contact.support.title')}</h3>
                  <p className="text-gray-600 text-sm mb-3">{t('contact.support.description')}</p>
                  <a href="https://support.workflo.nl" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    {t('contact.support.cta')}
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