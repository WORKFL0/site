'use client'

import dynamic from 'next/dynamic'

// Dynamically import HubSpotForm with no SSR
const HubSpotForm = dynamic(
  () => import('./HubSpotForm'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
      </div>
    )
  }
)

export default HubSpotForm