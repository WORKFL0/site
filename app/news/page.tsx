import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NewsFeed from '@/components/NewsFeed'
import LinkedInPosts from '@/components/news/LinkedInPosts'

export const metadata: Metadata = {
  title: 'Nieuws & Updates - Workflo IT Services',
  description: 'Laatste nieuws, bedrijfsupdates, en industrie-inzichten van Workflo IT Services.',
}

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nieuws & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Blijf op de hoogte van het laatste nieuws over IT, cybersecurity, 
              en onze diensten. Volg onze updates en industrie-inzichten.
            </p>
          </div>

          {/* LinkedIn Posts Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Recente LinkedIn Updates
            </h2>
            <LinkedInPosts />
          </section>

          {/* RSS Feed Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Industrie Nieuws
            </h2>
            <NewsFeed maxItems={9} showDescription={true} />
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Mis nooit meer een update
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Abonneer je op onze nieuwsbrief en ontvang maandelijks de belangrijkste 
              IT-nieuwtjes en tips direct in je inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#newsletter"
                className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schrijf je in voor de nieuwsbrief
              </a>
              <a
                href="https://www.linkedin.com/company/workflo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
              >
                Volg ons op LinkedIn
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}