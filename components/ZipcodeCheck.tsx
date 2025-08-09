'use client'

import { useState } from 'react'

interface Provider {
  name: string
  available: boolean
  speed: string
  type: string
}

export default function ZipcodeCheck() {
  const [zipcode, setZipcode] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [checking, setChecking] = useState(false)
  const [results, setResults] = useState<Provider[] | null>(null)
  const [error, setError] = useState('')

  const validateZipcode = (code: string) => {
    // Dutch zipcode format: 1234 AB
    const zipcodeRegex = /^[1-9][0-9]{3}\s?[A-Z]{2}$/i
    return zipcodeRegex.test(code)
  }

  const checkAvailability = async () => {
    setError('')
    
    // Format zipcode properly
    const formattedZipcode = zipcode.replace(/\s/g, '').toUpperCase()
    
    if (!validateZipcode(formattedZipcode)) {
      setError('Voer een geldige postcode in (bijvoorbeeld: 1013 AC)')
      return
    }

    if (!houseNumber || isNaN(Number(houseNumber))) {
      setError('Voer een geldig huisnummer in')
      return
    }

    setChecking(true)

    // Simulate API call - In production, this would call your actual provider API
    setTimeout(() => {
      // For Amsterdam area (1xxx postcodes), show good availability
      const isAmsterdam = formattedZipcode.startsWith('1')
      
      const mockResults: Provider[] = [
        {
          name: 'Glasvezel (Fiber)',
          available: isAmsterdam,
          speed: '1000 Mbps',
          type: 'Fiber Optic'
        },
        {
          name: 'Kabel Internet',
          available: true,
          speed: '500 Mbps',
          type: 'Cable'
        },
        {
          name: 'DSL',
          available: true,
          speed: '100 Mbps',
          type: 'DSL'
        },
        {
          name: '5G Business',
          available: isAmsterdam,
          speed: '300 Mbps',
          type: '5G'
        }
      ]

      setResults(mockResults)
      setChecking(false)
    }, 1500)
  }

  const resetForm = () => {
    setZipcode('')
    setHouseNumber('')
    setResults(null)
    setError('')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6">
          <h2 className="text-2xl font-bold text-black">
            Check Internet Beschikbaarheid
          </h2>
          <p className="text-black/80 mt-2">
            Ontdek welke internetverbindingen beschikbaar zijn op uw adres
          </p>
        </div>

        <div className="p-6">
          {!results ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postcode
                </label>
                <input
                  type="text"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  placeholder="1013 AC"
                  maxLength={7}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Huisnummer
                </label>
                <input
                  type="text"
                  value={houseNumber}
                  onChange={(e) => setHouseNumber(e.target.value)}
                  placeholder="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <button
                onClick={checkAvailability}
                disabled={checking}
                className="w-full py-3 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {checking ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Controleren...
                  </span>
                ) : (
                  'Check Beschikbaarheid'
                )}
              </button>

              <div className="text-center text-sm text-gray-500">
                <p>Wij werken samen met alle grote providers in Nederland</p>
              </div>
            </div>
          ) : (
            <div className="animate-fadeInUp">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Beschikbare verbindingen voor:
                </h3>
                <p className="text-gray-600">
                  {zipcode} {houseNumber}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {results.map((provider, index) => (
                  <div
                    key={provider.name}
                    className={`p-4 rounded-lg border-2 ${
                      provider.available
                        ? 'border-green-200 bg-green-50'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {provider.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Tot {provider.speed} • {provider.type}
                        </p>
                      </div>
                      <div>
                        {provider.available ? (
                          <div className="flex items-center gap-2 text-green-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">Beschikbaar</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-gray-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm">Niet beschikbaar</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <button
                  onClick={resetForm}
                  className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Nieuw Adres Controleren
                </button>

                <a
                  href="/contact"
                  className="block w-full py-3 bg-yellow-400 text-black rounded-lg font-bold text-center hover:bg-yellow-500 transition-colors"
                >
                  Gratis Adviesgesprek Aanvragen
                </a>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> Wij regelen de complete overstap voor u, inclusief opzegging bij uw huidige provider!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Inline CSS animations */}
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
        
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}