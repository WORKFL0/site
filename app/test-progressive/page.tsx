'use client'

import { useState } from 'react'

export default function TestProgressive() {
  const [step, setStep] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const loadNextComponent = async () => {
    try {
      switch(step) {
        case 0:
          const { LanguageProvider } = await import('@/context/LanguageContext')
          setStep(1)
          break
        case 1:
          const HydrationProvider = (await import('@/components/HydrationProvider')).default
          setStep(2)
          break
        case 2:
          const Header = (await import('@/components/layout/Header')).default
          setStep(3)
          break
        case 3:
          const Footer = (await import('@/components/layout/Footer')).default
          setStep(4)
          break
        case 4:
          const NewsFeed = (await import('@/components/NewsFeed')).default
          setStep(5)
          break
        case 5:
          const PricingCalculator = (await import('@/components/PricingCalculator')).default
          setStep(6)
          break
        default:
          break
      }
    } catch (err: any) {
      setError(`Failed at step ${step}: ${err.message}`)
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h1>Progressive Component Loading Test</h1>
      <p>Current step: {step}</p>
      
      <button 
        onClick={loadNextComponent}
        style={{
          padding: '10px 20px',
          background: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Load Next Component
      </button>

      <div style={{ marginTop: '20px' }}>
        <h3>Components loaded:</h3>
        <ul>
          {step >= 1 && <li>✅ LanguageContext</li>}
          {step >= 2 && <li>✅ HydrationProvider</li>}
          {step >= 3 && <li>✅ Header</li>}
          {step >= 4 && <li>✅ Footer</li>}
          {step >= 5 && <li>✅ NewsFeed</li>}
          {step >= 6 && <li>✅ PricingCalculator</li>}
        </ul>
      </div>

      {error && (
        <div style={{ color: 'red', marginTop: '20px', padding: '10px', background: '#fee', borderRadius: '5px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {step === 6 && !error && (
        <div style={{ color: 'green', marginTop: '20px', padding: '10px', background: '#efe', borderRadius: '5px' }}>
          <strong>Success!</strong> All components loaded successfully.
        </div>
      )}
    </div>
  )
}