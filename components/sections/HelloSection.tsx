'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/context/LanguageContext'

// Apple-inspired Hello greetings in multiple languages
const helloGreetings = [
  { text: 'Hello', lang: 'English' },
  { text: 'Hallo', lang: 'Nederlands' },
  { text: 'Bonjour', lang: 'Français' },
  { text: 'Hola', lang: 'Español' },
  { text: 'Ciao', lang: 'Italiano' },
  { text: 'Olá', lang: 'Português' },
  { text: 'Hej', lang: 'Svenska' },
  { text: 'Hei', lang: 'Norsk' },
  { text: 'Merhaba', lang: 'Türkçe' },
  { text: 'こんにちは', lang: '日本語' },
  { text: '你好', lang: '中文' },
  { text: 'مرحبا', lang: 'العربية' },
  { text: 'Привет', lang: 'Русский' },
  { text: 'Γεια σας', lang: 'Ελληνικά' }
]

export default function HelloSection() {
  const { t } = useLanguage()
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
      
      // Start cycling through greetings after initial animation
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentGreeting((prev) => (prev + 1) % helloGreetings.length)
        }, 2000) // Change every 2 seconds
        
        return () => clearInterval(interval)
      }, 2000) // Start cycling after 2 seconds
      
      return () => clearTimeout(timer)
    }
  }, [inView])

  return (
    <section 
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Subtle background pattern inspired by Apple */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #f2f400 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #f2f400 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-yellow-400/10 blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-black/5 blur-2xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Main Hello Display */}
          <div className="mb-16">
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              {/* Main Hello Text */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentGreeting}
                  className="text-6xl md:text-8xl lg:text-9xl font-light text-gray-900 mb-4 tracking-tight"
                  style={{
                    fontFamily: 'system-ui, -apple-system, "SF Pro Display", sans-serif',
                    fontWeight: '200'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                >
                  {helloGreetings[currentGreeting].text}
                </motion.h1>
              </AnimatePresence>
              
              {/* Language indicator */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${currentGreeting}-lang`}
                  className="text-lg md:text-xl text-gray-500 font-medium tracking-wide"
                  style={{
                    fontFamily: 'system-ui, -apple-system, "SF Pro Text", sans-serif'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                >
                  {helloGreetings[currentGreeting].lang}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Welcome Message */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8 leading-relaxed">
              Welcome to the future of IT services in Amsterdam
            </h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Where technology meets simplicity, and your business dreams become reality.
            </motion.p>
          </motion.div>

          {/* Subtle feature highlights in Apple style */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {[
              {
                title: 'Designed for Amsterdam',
                subtitle: 'Local expertise, global standards',
                icon: '📍'
              },
              {
                title: 'Simply Powerful',
                subtitle: 'Complex technology, simple experience',
                icon: '⚡'
              },
              {
                title: 'Always There',
                subtitle: '24/7 support when you need it most',
                icon: '🛡️'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.7 + (index * 0.1),
                  ease: "easeOut"
                }}
                whileHover={{ y: -8 }}
              >
                <div className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 transition-all duration-300 group-hover:bg-white/80 group-hover:shadow-xl group-hover:border-yellow-400/20">
                  {/* Subtle hover accent */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-light">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Subtle call-to-action */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <p className="text-gray-500 text-sm font-light tracking-wide">
              Ready to begin your IT transformation journey?
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated progress dots */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        {helloGreetings.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentGreeting 
                ? 'bg-yellow-400 scale-125' 
                : 'bg-gray-300'
            }`}
            animate={{
              scale: index === currentGreeting ? 1.25 : 1,
              backgroundColor: index === currentGreeting ? '#f2f400' : '#d1d5db'
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </section>
  )
}