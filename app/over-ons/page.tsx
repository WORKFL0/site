'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      <main className="py-20">
        {/* Hero Section */}
        <section className="relative mb-16">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-black to-yellow-400"></div>
          <div className="container mx-auto px-4 pt-8">
            <h1 className="text-5xl font-bold text-center text-black mb-6">
              The Amsterdam IT Team That Actually Cares About Your Business Success
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              We started Workflo because we were tired of seeing Amsterdam businesses held back by 
              their technology. Too many great companies were choosing between growth and IT costs, 
              or worse, losing customers because their systems couldn&apos;t handle success.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Story</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-6">
                Founded in Amsterdam, we understand Dutch business culture. We know that directness 
                and reliability matter more than flashy presentations. That&apos;s why we focus on 
                delivering results, not just services.
              </p>
              <p className="text-gray-700 mb-6">
                Our team combines deep technical expertise with business acumen. We don&apos;t just 
                fix your IT – we align your technology with your business goals. When you succeed, 
                we succeed.
              </p>
              <p className="text-gray-700">
                From the historic Centrum to the innovative Zuidas business district, Workflo supports 
                Amsterdam businesses across all sectors. Whether you&apos;re a creative agency in the 
                Jordaan, a tech startup in Noord, or an established firm in the financial district, 
                we understand the unique challenges facing Amsterdam entrepreneurs.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Meet Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-40 h-40 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-black">F</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Florian</h3>
                <p className="text-gray-600 mb-3">Founder & CEO</p>
                <p className="text-gray-500 text-sm">
                  With over 15 years in IT management, Florian leads our vision of making 
                  enterprise-grade IT accessible to Amsterdam SMEs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-black">NH</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Nam-Hoon</h3>
                <p className="text-gray-600 mb-3">Technical Director</p>
                <p className="text-gray-500 text-sm">
                  Our infrastructure wizard ensures your systems are secure, scalable, and 
                  always available when you need them.
                </p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-black">M</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Mas</h3>
                <p className="text-gray-600 mb-3">Operations Manager</p>
                <p className="text-gray-500 text-sm">
                  Mas ensures every client receives exceptional service and that our team 
                  delivers on every promise we make.
                </p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-black">M</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Marcello</h3>
                <p className="text-gray-600 mb-3">Solutions Architect</p>
                <p className="text-gray-500 text-sm">
                  Marcello designs innovative solutions that transform business challenges 
                  into competitive advantages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Results-Driven</h3>
                <p className="text-gray-600">
                  We measure our success by your business outcomes, not billable hours.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">True Partnership</h3>
                <p className="text-gray-600">
                  Your IT team, not just another vendor. We&apos;re invested in your growth.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Proactive Innovation</h3>
                <p className="text-gray-600">
                  Staying ahead of problems and opportunities so you can focus on business.
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
            <h2 className="text-4xl font-bold mb-4">Ready to Experience IT That Just Works?</h2>
            <p className="text-xl mb-8">Join 100+ Amsterdam businesses who trust Workflo</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Start Your Free IT Assessment
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}