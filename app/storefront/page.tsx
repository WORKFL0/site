'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import IframeLoader from '@/components/iframes/IframeLoader'
import { useLanguage } from '@/context/LanguageContext'

export default function StorefrontPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-medium mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {language === 'en' ? 'WorkFlo IT Store' : 'WorkFlo IT Winkel'}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {language === 'en' 
                  ? 'Enterprise IT Solutions & Software' 
                  : 'Enterprise IT Oplossingen & Software'}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {language === 'en' 
                  ? 'Browse and purchase enterprise-grade software, cloud solutions, and IT services directly from our certified partner storefront.'
                  : 'Bekijk en koop enterprise-grade software, cloud-oplossingen en IT-diensten rechtstreeks vanuit onze gecertificeerde partner storefront.'}
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {language === 'en' ? 'Certified Partner' : 'Gecertificeerd Partner'}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {language === 'en' ? 'Secure Transactions' : 'Veilige Transacties'}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  {language === 'en' ? 'Enterprise Pricing' : 'Enterprise Prijzen'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Storefront Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Categories Preview */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {language === 'en' ? 'Popular Categories' : 'Populaire Categorieën'}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-yellow-50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900">Microsoft 365</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {language === 'en' ? 'Cloud productivity' : 'Cloud productiviteit'}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-yellow-50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900">Security</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {language === 'en' ? 'Endpoint protection' : 'Endpoint bescherming'}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-yellow-50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900">Backup</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {language === 'en' ? 'Data protection' : 'Data bescherming'}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-yellow-50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-gray-900">Infrastructure</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {language === 'en' ? 'Cloud & servers' : 'Cloud & servers'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Storefront Iframe */}
              <IframeLoader
                src="https://app.pax8.com/public/storefronts/workfloit"
                title={language === 'en' ? 'WorkFlo IT Store' : 'WorkFlo IT Winkel'}
                height="1200px"
                loadingText={language === 'en' ? 'Loading storefront...' : 'Winkel wordt geladen...'}
                errorText={language === 'en' ? 'Unable to load storefront' : 'Kan winkel niet laden'}
                fallbackUrl="https://app.pax8.com/public/storefronts/workfloit"
                maxLoadTime={20000}
                className="shadow-xl"
              />

              {/* Additional Information */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {language === 'en' ? 'Volume Discounts' : 'Volume Kortingen'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? 'Get better pricing on bulk purchases and enterprise agreements. Contact us for custom quotes.'
                      : 'Krijg betere prijzen bij bulkaankopen en enterprise-overeenkomsten. Neem contact op voor aangepaste offertes.'}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {language === 'en' ? 'Expert Support' : 'Expert Ondersteuning'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? 'Our team helps you select the right solutions and provides ongoing support after purchase.'
                      : 'Ons team helpt u de juiste oplossingen te selecteren en biedt voortdurende ondersteuning na aankoop.'}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {language === 'en' ? 'Licensed & Compliant' : 'Gelicenseerd & Compliant'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? 'All software is genuine and properly licensed. We ensure compliance with vendor agreements.'
                      : 'Alle software is origineel en correct gelicenseerd. We zorgen voor naleving van leveranciersovereenkomsten.'}
                  </p>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-black mb-4">
                  {language === 'en' ? 'Need Help Choosing?' : 'Hulp Nodig Bij Kiezen?'}
                </h3>
                <p className="text-black/80 mb-6 max-w-2xl mx-auto">
                  {language === 'en' 
                    ? 'Our IT consultants can help you select the right solutions for your business needs and budget.'
                    : 'Onze IT-consultants kunnen u helpen de juiste oplossingen te selecteren voor uw bedrijfsbehoeften en budget.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
                  >
                    {language === 'en' ? 'Schedule Consultation' : 'Plan Consultatie'}
                  </a>
                  <a 
                    href="tel:0203080465" 
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    {language === 'en' ? 'Call: 020-30 80 465' : 'Bel: 020-30 80 465'}
                  </a>
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