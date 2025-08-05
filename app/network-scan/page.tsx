'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function NetworkScanPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    networkSize: '',
    currentIssues: '',
    scanType: 'basic'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-2xl font-bold text-green-800 mb-4">Aanvraag ontvangen!</h2>
                <p className="text-green-700 mb-6">
                  Bedankt voor uw interesse in onze Network Security Scan. Wij nemen binnen 24 uur contact met u op om de details te bespreken en de scan in te plannen.
                </p>
                <div className="space-y-2 text-sm text-green-600">
                  <p>📧 U ontvangt een bevestiging per e-mail</p>
                  <p>📞 Wij bellen u voor de planning</p>
                  <p>🔍 De scan wordt uitgevoerd op een afgesproken moment</p>
                  <p>📊 U ontvangt een uitgebreid rapport met aanbevelingen</p>
                </div>
                <div className="mt-8">
                  <button 
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        companyName: '',
                        contactName: '',
                        email: '',
                        phone: '',
                        networkSize: '',
                        currentIssues: '',
                        scanType: 'basic'
                      })
                    }}
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
                  >
                    Nieuwe aanvraag
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Gratis Network Security Scan
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ontdek kwetsbaarheden in uw netwerk voordat cybercriminelen dat doen
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 inline-block">
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold text-yellow-800">Waarom een Network Scan?</div>
                    <div className="text-yellow-700 text-sm">90% van de cyberaanvallen begint via netwerkzwakheden</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Wat krijgt u?</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Kwetsbaarheden Identificatie</h3>
                <p className="text-gray-600 text-sm">
                  Alle openstaande poorten, verouderde software en zwakke wachtwoorden in kaart
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Uitgebreid Rapport</h3>
                <p className="text-gray-600 text-sm">
                  Gedetailleerd overzicht met prioritering en impact assessment per gevonden issue
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Actiepunten</h3>
                <p className="text-gray-600 text-sm">
                  Concrete aanbevelingen om uw netwerkbeveiliging direct te verbeteren
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Vraag uw gratis Network Scan aan</h2>
                <p className="text-gray-600">
                  Vul onderstaand formulier in en wij nemen binnen 24 uur contact met u op
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      Bedrijfsnaam *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                      Contactpersoon *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="networkSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Aantal werkstations/gebruikers
                  </label>
                  <select
                    id="networkSize"
                    name="networkSize"
                    value={formData.networkSize}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Selecteer...</option>
                    <option value="1-10">1-10 gebruikers</option>
                    <option value="11-25">11-25 gebruikers</option>
                    <option value="26-50">26-50 gebruikers</option>
                    <option value="51-100">51-100 gebruikers</option>
                    <option value="100+">Meer dan 100 gebruikers</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label htmlFor="scanType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type scan
                  </label>
                  <select
                    id="scanType"
                    name="scanType"
                    value={formData.scanType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="basic">Basis Scan (extern)</option>
                    <option value="comprehensive">Uitgebreide Scan (extern + intern)</option>
                    <option value="compliance">Compliance Scan (GDPR/NEN 7510)</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label htmlFor="currentIssues" className="block text-sm font-medium text-gray-700 mb-2">
                    Huidige IT-uitdagingen (optioneel)
                  </label>
                  <textarea
                    id="currentIssues"
                    name="currentIssues"
                    value={formData.currentIssues}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Beschrijf eventuele huidige problemen of zorgen over uw netwerkbeveiliging..."
                  />
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Verzenden...
                      </span>
                    ) : (
                      'Vraag gratis Network Scan aan'
                    )}
                  </button>
                </div>

                <div className="mt-4 text-center text-sm text-gray-500">
                  Door dit formulier in te vullen gaat u akkoord met onze{' '}
                  <a href="/privacy" className="text-yellow-600 hover:text-yellow-700">privacyverklaring</a>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Waarom kiezen voor Workflo?</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">200+</div>
                <p className="text-gray-300">Bedrijven vertrouwen ons</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
                <p className="text-gray-300">Jaar ervaring in cybersecurity</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <p className="text-gray-300">Monitoring en support</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <p className="text-gray-300">GDPR compliant</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}