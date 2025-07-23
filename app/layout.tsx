import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { LanguageProvider } from '@/contexts/LanguageContext'
import CookieBanner from '@/components/ui/CookieBanner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Workflo - Amsterdam's Meest Vertrouwde IT Groeipartner",
  description: 'Stop met je zorgen maken over IT-problemen. Begin met groeien. Amsterdamse MKB\'ers vertrouwen op Workflo om IT-kosten met 35% te verlagen terwijl de productiviteit toeneemt.',
  keywords: 'Amsterdam IT diensten, managed service provider, cloud diensten Amsterdam, cybersecurity Nederland, IT support MKB',
  openGraph: {
    title: "Workflo - Amsterdam's Meest Vertrouwde IT Groeipartner",
    description: 'Transformeer je IT van een kostenpost naar een groeimachine',
    url: 'https://workflo.it',
    siteName: 'Workflo',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Workflo - Amsterdam's Meest Vertrouwde IT Groeipartner",
    description: 'Transformeer je IT van een kostenpost naar een groeimachine',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://workflo.it'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <CookieBanner />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}