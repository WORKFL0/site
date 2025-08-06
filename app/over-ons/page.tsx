'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function OverOnsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const { scrollYProgress } = useScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 hero-gradient text-white overflow-hidden" ref={heroRef}>
          {/* Animated Background Pattern */}
          <motion.div 
            className="absolute inset-0 opacity-10"
            style={{ y: yRange }}
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 35px,
                #f2f400 35px,
                #f2f400 70px
              )`
            }}></div>
          </motion.div>
          
          {/* Warning Tape at Top */}
          <div className="absolute top-0 left-0 right-0 h-8 warning-tape"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-5xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                The Amsterdam IT Team That Actually 
                <br />
                <span className="text-yellow-400">Cares About Your Business Success</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We started Workflo because we were tired of seeing Amsterdam businesses held back by 
                their technology. Too many great companies were choosing between growth and IT costs, 
                or worse, losing customers because their systems couldn&apos;t handle success.
              </motion.p>
              
              {/* Professional Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-yellow-400 font-bold">✓</span>
                <span className="text-white font-medium">Trusted by 100+ Amsterdam Businesses Since 2015</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gray-50" ref={storyRef}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Story
              </motion.h2>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="grid md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Left Column - Story Content */}
                <div className="space-y-6">
                  <motion.div 
                    className="bg-white rounded-xl p-8 shadow-lg hover-lift"
                    initial={{ opacity: 0, x: -30 }}
                    animate={storyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-black">🇳🇱</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Dutch Direct</h3>
                    <p className="text-gray-600">
                      Founded in Amsterdam, we understand Dutch business culture. We know that directness 
                      and reliability matter more than flashy presentations. That's why we focus on 
                      delivering results, not just services.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white rounded-xl p-8 shadow-lg hover-lift"
                    initial={{ opacity: 0, x: -30 }}
                    animate={storyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl text-yellow-400">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Business First</h3>
                    <p className="text-gray-600">
                      Our team combines deep technical expertise with business acumen. We don't just 
                      fix your IT – we align your technology with your business goals. When you succeed, 
                      we succeed.
                    </p>
                  </motion.div>
                </div>
                
                {/* Right Column - Amsterdam Focus */}
                <motion.div 
                  className="bg-black text-white rounded-2xl p-8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={storyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="relative">
                    {/* Mini warning tape decoration */}
                    <div className="absolute top-0 right-0 w-24 h-3 warning-tape-thin rounded"></div>
                    
                    <h3 className="text-2xl font-bold mb-6 text-yellow-400">Amsterdam Expertise</h3>
                    <p className="text-gray-300 mb-6">
                      From the historic Centrum to the innovative Zuidas business district, Workflo supports 
                      Amsterdam businesses across all sectors.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="text-yellow-400 font-semibold">Jordaan</span>
                        <p className="text-gray-300">Creative Agencies</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="text-yellow-400 font-semibold">Noord</span>
                        <p className="text-gray-300">Tech Startups</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="text-yellow-400 font-semibold">Zuidas</span>
                        <p className="text-gray-300">Financial District</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <span className="text-yellow-400 font-semibold">Centrum</span>
                        <p className="text-gray-300">Retail & Hospitality</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white" ref={teamRef}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Meet Our Team
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                The experts behind Amsterdam's most trusted IT solutions
              </motion.p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Florian",
                  role: "Founder & CEO",
                  description: "With over 15 years in IT management, Florian leads our vision of making enterprise-grade IT accessible to Amsterdam SMEs.",
                  initial: "F",
                  bg: "bg-yellow-400",
                  expertise: "Strategic IT Leadership"
                },
                {
                  name: "Nam-Hoon",
                  role: "Technical Director",
                  description: "Our infrastructure wizard ensures your systems are secure, scalable, and always available when you need them.",
                  initial: "NH",
                  bg: "bg-gray-800",
                  expertise: "Cloud Infrastructure"
                },
                {
                  name: "Mas",
                  role: "Operations Manager",
                  description: "Mas ensures every client receives exceptional service and that our team delivers on every promise we make.",
                  initial: "M",
                  bg: "bg-yellow-400",
                  expertise: "Service Excellence"
                },
                {
                  name: "Marcello",
                  role: "Solutions Architect",
                  description: "Marcello designs innovative solutions that transform business challenges into competitive advantages.",
                  initial: "M",
                  bg: "bg-gray-800",
                  expertise: "System Architecture"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gray-50 rounded-xl overflow-hidden hover-lift"
                  initial={{ opacity: 0, y: 50 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Team member card */}
                  <div className="p-6">
                    <div className={`w-24 h-24 ${member.bg} rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <span className={`text-2xl font-bold ${member.bg.includes('yellow') ? 'text-black' : 'text-yellow-400'}`}>
                        {member.initial}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-yellow-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500 font-medium mb-3">{member.expertise}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                  
                  {/* Subtle accent border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-900 text-white" ref={valuesRef}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Values
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                The principles that guide everything we do for Amsterdam businesses
              </motion.p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: "🎯",
                  title: "Results-Driven",
                  description: "We measure our success by your business outcomes, not billable hours.",
                  stat: "€500K+ saved",
                  detail: "for clients in 2024"
                },
                {
                  icon: "🤝",
                  title: "True Partnership",
                  description: "Your IT team, not just another vendor. We're invested in your growth.",
                  stat: "4 min avg",
                  detail: "phone response time"
                },
                {
                  icon: "⚡",
                  title: "Proactive Innovation",
                  description: "Staying ahead of problems and opportunities so you can focus on business.",
                  stat: "500+ threats",
                  detail: "prevented since 2015"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gray-800 border border-gray-700 rounded-xl p-8 text-center overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.03,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-3 warning-tape-thin opacity-50"></div>
                  
                  <div className="w-24 h-24 bg-yellow-400 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="text-4xl">{value.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {value.description}
                  </p>
                  
                  <div className="bg-black/30 border border-gray-600 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400">{value.stat}</div>
                    <div className="text-sm text-gray-400">{value.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 hero-gradient">
          {/* Subtle animated background */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `repeating-linear-gradient(45deg, #f2f400, #f2f400 10px, transparent 10px, transparent 20px)`
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience IT That Just Works?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Join 100+ Amsterdam businesses who trust Workflo with their technology
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm text-white rounded-2xl p-8 max-w-2xl mx-auto mb-12 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Free IT Assessment</h3>
                <p className="text-lg mb-6">
                  Discover exactly how much your current IT setup is costing your business
                </p>
                <ul className="text-left max-w-md mx-auto mb-8 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>Security vulnerabilities analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>Hidden cost identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>Performance optimization opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>Scalability roadmap</span>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href="/tevredenheidscheck" 
                      className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg inline-block"
                    >
                      Start Your Free Assessment
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href="tel:020-3080465" 
                      className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg inline-block"
                    >
                      Call: 020-3080465
                    </a>
                  </motion.div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm">
                No obligations • 30-minute consultation • Immediate insights
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}