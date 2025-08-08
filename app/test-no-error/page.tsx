'use client'

import { LanguageProvider } from '@/context/LanguageContext'
// import Header from '@/components/layout/Header' // REPLACED
import StaticHeader from '@/components/StaticHeader'
// import Footer from '@/components/layout/Footer' // REPLACED
import StaticFooter from '@/components/StaticFooter'

export default function TestNoErrorPage() {
  return (
    <LanguageProvider>
      <StaticHeader />
      <main className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Test Without Error Boundary</h1>
          <p>This page tests all main components without the error boundary wrapper.</p>
        </div>
      </main>
      <StaticFooter />
    </LanguageProvider>
  )
}