import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Workflo - Amsterdam's Most Trusted IT Growth Partner",
  description: 'Stop worrying about IT problems. Start growing your business. Amsterdam SMEs trust Workflo to reduce IT costs by 35% while increasing productivity.',
  keywords: 'Amsterdam IT services, managed service provider, cloud services Amsterdam, cybersecurity Netherlands, IT support SME',
  openGraph: {
    title: "Workflo - Amsterdam's Most Trusted IT Growth Partner",
    description: 'Transform your IT from a cost center into a growth engine',
    url: 'https://workflo.it',
    siteName: 'Workflo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Workflo - Amsterdam's Most Trusted IT Growth Partner",
    description: 'Transform your IT from a cost center into a growth engine',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}