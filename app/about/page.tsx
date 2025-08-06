'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-20">
        {/* Hero Section */}
        <section className="relative mb-16">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-black to-yellow-400"></div>
          <div className="container mx-auto px-4 pt-8">
            <h1 className="text-5xl font-bold text-center text-black mb-6">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-6">
              {t('about.hero.description')}
            </p>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-yellow-400">2015</p>
                <p className="text-sm text-gray-600">{t('about.founded')}</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-yellow-400">200+</p>
                <p className="text-sm text-gray-600">{t('about.clients')}</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-yellow-400">98%</p>
                <p className="text-sm text-gray-600">{t('about.retention')}</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-yellow-400">24/7</p>
                <p className="text-sm text-gray-600">{t('about.availability')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">{t('about.story.title')}</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <p className="text-lg text-gray-700 font-medium mb-3">
                  &ldquo;{t('about.story.quote')}&rdquo;
                </p>
                <p className="text-gray-600">
                  {t('about.story.description1')}
                </p>
              </div>
              
              <p className="text-gray-700 mb-6">
                {t('about.story.description2')}
              </p>
              
              <p className="text-gray-700 mb-6">
                {t('about.story.description3')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl mb-2">🏢</p>
                  <p className="font-bold text-black">{t('about.areas.zuidas')}</p>
                  <p className="text-sm text-gray-600">{t('about.areas.zuidas_description')}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl mb-2">🎨</p>
                  <p className="font-bold text-black">{t('about.areas.jordaan')}</p>
                  <p className="text-sm text-gray-600">{t('about.areas.jordaan_description')}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl mb-2">🚀</p>
                  <p className="font-bold text-black">{t('about.areas.noord')}</p>
                  <p className="text-sm text-gray-600">{t('about.areas.noord_description')}</p>
                </div>
              </div>
              
              <p className="text-gray-700">
                {t('about.story.description4')}
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">{t('about.team.title')}</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-40 h-40 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-black">F</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{t('team.florian.name')}</h3>
                <p className="text-gray-600 mb-3">{t('team.florian.role')}</p>
                <p className="text-gray-500 text-sm">
                  {t('about.team.florian.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-black">NH</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{t('team.namhoon.name')}</h3>
                <p className="text-gray-600 mb-3">{t('team.namhoon.role')}</p>
                <p className="text-gray-500 text-sm">
                  {t('about.team.namhoon.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-black">M</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{t('team.mas.name')}</h3>
                <p className="text-gray-600 mb-3">{t('team.mas.role')}</p>
                <p className="text-gray-500 text-sm">
                  {t('about.team.mas.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-black">M</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{t('team.marcello.name')}</h3>
                <p className="text-gray-600 mb-3">{t('team.marcello.role')}</p>
                <p className="text-gray-500 text-sm">
                  {t('about.team.marcello.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">{t('about.values.title')}</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{t('about.values.results.title')}</h3>
                <p className="text-gray-600">
                  {t('about.values.results.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{t('about.values.partnership.title')}</h3>
                <p className="text-gray-600">
                  {t('about.values.partnership.description')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{t('about.values.innovation.title')}</h3>
                <p className="text-gray-600">
                  {t('about.values.innovation.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `repeating-linear-gradient(45deg, #f2f400, #f2f400 10px, transparent 10px, transparent 20px)`
            }}></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4">{t('about.cta.title')}</h2>
            <p className="text-xl mb-8">{t('about.cta.description')}</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              {t('about.cta.button')}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}