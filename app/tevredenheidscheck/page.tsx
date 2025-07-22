'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FlowchartQuestionnaire from '@/components/questionnaire/FlowchartQuestionnaire'
import { motion } from 'framer-motion'

export default function TevredenheidscheckPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Header with Workflo branding colors */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 sm:p-10 text-center text-white">
                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                  >
                    IT-Dienstverlener Check
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg sm:text-xl opacity-90"
                  >
                    Ontdek in 2 minuten of jouw IT-partner écht voor je zorgt
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 text-sm"
                  >
                    Eerlijk advies • Geen verplichtingen • Direct resultaat
                  </motion.div>
                </div>

                {/* Questionnaire Content */}
                <div className="p-8 sm:p-10 lg:p-12">
                  <FlowchartQuestionnaire />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}