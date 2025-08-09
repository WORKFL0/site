'use client'

// import Header from '@/components/layout/Header' // REPLACED
import StaticHeader from '@/components/StaticHeader'
// import Footer from '@/components/layout/Footer' // REPLACED
import StaticFooter from '@/components/StaticFooter'
import ITHealthCheckSafe from '@/components/questionnaire/ITHealthCheckSafe'
import { ShieldCheckIcon, ChartBarIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

export default function ITHealthCheckPage() {
  return (
    <>
      <StaticHeader />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            {/* Introduction Section */}
            <div className="text-center mb-12 animate-fadeInUp">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                IT Health Check
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Ontdek de gezondheid van uw IT-infrastructuur met onze professionele assessment. 
                Krijg direct inzicht in verbeterpunten en aanbevelingen.
              </p>
              
              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white rounded-lg p-6 shadow-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <ShieldCheckIcon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Security Analyse</h3>
                  <p className="text-sm text-gray-600">
                    Evalueer uw beveiligingsniveau en ontdek kwetsbaarheden
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  <ChartBarIcon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Performance Score</h3>
                  <p className="text-sm text-gray-600">
                    Krijg een duidelijke score voor uw IT-prestaties
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  <ClipboardDocumentCheckIcon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Actieplan</h3>
                  <p className="text-sm text-gray-600">
                    Ontvang concrete aanbevelingen voor verbetering
                  </p>
                </div>
              </div>
            </div>

            {/* Questionnaire */}
            <div className="max-w-4xl mx-auto animate-scaleIn" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 text-center text-white">
                  <div className="animate-fadeIn" style={{ animationDelay: '0.7s' }}>
                    <p className="text-lg opacity-90">
                      15 vragen • 5 minuten • Direct resultaat
                    </p>
                    <p className="text-sm mt-2 opacity-80">
                      Geen verborgen kleuren die antwoorden weggeven
                    </p>
                  </div>
                </div>

                {/* Questionnaire Content */}
                <div className="p-8 sm:p-10 lg:p-12">
                  <ITHealthCheckSafe />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 text-center max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <p className="text-gray-600 mb-4">
                Deze IT Health Check is ontwikkeld door Workflo IT Services op basis van 
                industrie best practices en onze jarenlange ervaring in IT-beheer.
              </p>
              <p className="text-sm text-gray-500">
                Uw antwoorden worden niet opgeslagen. Voor een uitgebreide IT-audit, 
                neem contact met ons op voor een persoonlijk adviesgesprek.
              </p>
            </div>
          </div>
        </div>
      </main>
      <StaticFooter />
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  )
}