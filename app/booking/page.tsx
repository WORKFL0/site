'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import IframeLoader from '@/components/iframes/IframeLoader'
import { useLanguage } from '@/context/LanguageContext'

export default function BookingPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {language === 'en' 
                  ? 'Schedule a Meeting with Our IT Engineers' 
                  : 'Plan een Afspraak met Onze IT Engineers'}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {language === 'en' 
                  ? 'Book a consultation to discuss your IT needs and explore solutions tailored to your business.'
                  : 'Boek een consultatie om uw IT-behoeften te bespreken en oplossingen op maat te verkennen.'}
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {language === 'en' ? 'Free Consultation' : 'Gratis Consultatie'}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {language === 'en' ? 'No Obligations' : 'Geen Verplichtingen'}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {language === 'en' ? 'Expert Advice' : 'Deskundig Advies'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Calendar Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-900 mb-1">
                      {language === 'en' ? 'How to Book' : 'Hoe te Boeken'}
                    </h3>
                    <p className="text-blue-800">
                      {language === 'en' 
                        ? 'Select an available time slot in the calendar below. You will receive a confirmation email with meeting details and a link to join the video call.'
                        : 'Selecteer een beschikbaar tijdslot in de onderstaande kalender. U ontvangt een bevestigingsmail met vergaderdetails en een link om deel te nemen aan de videogesprek.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking Iframe */}
              <IframeLoader
                src="https://outlook.office.com/book/PlaneenafspraakmeteenITengineer@workflo.nl/"
                title={language === 'en' ? 'Book a Meeting' : 'Boek een Afspraak'}
                height="900px"
                loadingText={language === 'en' ? 'Loading booking calendar...' : 'Boekingskalender wordt geladen...'}
                errorText={language === 'en' ? 'Unable to load booking calendar' : 'Kan boekingskalender niet laden'}
                fallbackUrl="https://outlook.office.com/book/PlaneenafspraakmeteenITengineer@workflo.nl/"
                maxLoadTime={15000}
              />

              {/* Alternative Contact Options */}
              <div className="mt-12 bg-gray-100 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {language === 'en' ? 'Prefer Direct Contact?' : 'Liever Direct Contact?'}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-1">{language === 'en' ? 'Call Us' : 'Bel Ons'}</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {language === 'en' ? 'Mon-Fri 8:00-18:00' : 'Ma-Vr 8:00-18:00'}
                    </p>
                    <a href="tel:0203080465" className="text-yellow-600 hover:text-yellow-700 font-medium">
                      020-30 80 465
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-1">{language === 'en' ? 'Email Us' : 'Email Ons'}</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {language === 'en' ? 'Response within 4 hours' : 'Reactie binnen 4 uur'}
                    </p>
                    <a href="mailto:info@workflo.nl" className="text-yellow-600 hover:text-yellow-700 font-medium">
                      info@workflo.nl
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {language === 'en' ? 'Quick questions' : 'Snelle vragen'}
                    </p>
                    <a href="https://wa.me/31203080465" className="text-yellow-600 hover:text-yellow-700 font-medium">
                      {language === 'en' ? 'Start Chat' : 'Start Chat'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}