'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ChevronLeftIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const questions = [
  {
    id: 1,
    question: "Zijn jullie tevreden met de technische ondersteuning die jullie ontvangen?",
    options: ["Ja, dat zijn wij", "Nee, dat zijn we niet"],
    next: [2, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 2,
    question: "Reageert de ICT-dienstverlener binnen de afgesproken tijd op uw verzoeken?",
    options: ["Ja, dat doen ze", "Niet altijd"],
    next: [3, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 3,
    question: "Worden jullie problemen binnen de afgesproken termijn opgelost?",
    options: ["Meestal wel", "Niet altijd"],
    next: [4, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 4,
    question: "Communiceert de ICT-dienstverlener duidelijk over de status van jullie verzoeken?",
    options: ["Ja, over het algemeen wel", "Soms niet echt"],
    next: [5, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 5,
    question: "Zijn de oplossingen van de ICT-dienstverlener effectief?",
    options: ["Jazeker", "Nee, soms niet"],
    next: [6, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 6,
    question: "Voldoen de technici van de ICT-dienstverlener aan uw verwachtingen qua kennis en vaardigheden?",
    options: ["Over het algemeen wel", "Nee, soms niet"],
    next: [7, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 7,
    question: "Worden jullie ICT-problemen meestal in één keer opgelost?",
    options: ["Absoluut", "Niet altijd"],
    next: [8, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 8,
    question: "Vinden jullie de ICT-dienstverlener klantgericht?",
    options: ["Wij vinden van wel", "Niet altijd of tegen iedereen"],
    next: [9, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 9,
    question: "Zijn de kosten van de diensten van de ICT-dienstverlener redelijk?",
    options: ["Ja hoor", "Ze schieten de pan uit"],
    next: [10, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 10,
    question: "Begrijpt de ICT-dienstverlener jullie bedrijfsbehoeften?",
    options: ["Ze snappen er soms niks van", "Wij vinden van wel"],
    next: ["contact", 11],
    type: ["negative", "positive"]
  },
  {
    id: 11,
    question: "Ervaren jullie vaak herhalende problemen met jullie ICT-systemen?",
    options: ["Regelmatig", "Wel eens"],
    next: ["contact", 12],
    type: ["negative", "positive"]
  },
  {
    id: 12,
    question: "Biedt de ICT-dienstverlener proactieve aanbevelingen voor systeemverbeteringen?",
    options: ["Nee, dat doen ze niet", "Ja, dat doen ze"],
    next: ["contact", 13],
    type: ["negative", "positive"]
  },
  {
    id: 13,
    question: "Is de ICT-dienstverlener beschikbaar buiten normale werktijden als dat nodig is?",
    options: ["Wij krijgen ze nooit te pakken", "Altijd"],
    next: ["contact", 14],
    type: ["negative", "positive"]
  },
  {
    id: 14,
    question: "Voelen jullie dat jullie gegevens veilig zijn bij de ICT-dienstverlener?",
    options: ["Ja, heel veilig", "Daar twijfelen we weleens aan"],
    next: [15, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 15,
    question: "Hebben jullie vertrouwen in de ICT-dienstverlener om kritieke problemen aan te pakken?",
    options: ["Volle vertrouwen", "Soms twijfelen we daaraan"],
    next: [16, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 16,
    question: "Zijn de facturen van de ICT-dienstverlener duidelijk en transparant?",
    options: ["We klagen niet", "We snappen er soms niks van"],
    next: [17, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 17,
    question: "Past de ICT-dienstverlener zich goed aan veranderende eisen aan?",
    options: ["Heel goed zelfs", "Helemaal niet"],
    next: [18, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 18,
    question: "Zouden jullie de ICT-dienstverlener aanbevelen aan andere bedrijven?",
    options: ["100% Zeker", "We kunnen niemand anders"],
    next: [19, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 19,
    question: "Krijgen jullie regelmatig updates over lopende werkzaamheden?",
    options: ["Meer dan genoeg", "We krijgen nooit updates"],
    next: [20, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 20,
    question: "Is de ICT-dienstverlener in staat om complexe problemen op te lossen?",
    options: ["Ze zijn de beste", "Ze snappen het soms zelf ook niet"],
    next: [21, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 21,
    question: "Is de documentatie die de ICT-dienstverlener levert duidelijk en bruikbaar?",
    options: ["Heel duidelijk", "Documentatie?"],
    next: [22, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 22,
    question: "Is de ICT-dienstverlener proactief in het identificeren van potentiële problemen?",
    options: ["Ja, dat doen ze heel goed", "Nee, altijd achteraf"],
    next: [23, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 23,
    question: "Krijgen jullie regelmatig rapporten over de prestaties van jullie ICT-systemen?",
    options: ["Ja, hele goede", "Valt dat te meten?"],
    next: [24, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 24,
    question: "Is de ICT-dienstverlener transparant over de kosten van extra diensten?",
    options: ["Heel transparant", "Nee. Het zit allemaal in pakketten"],
    next: [25, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 25,
    question: "Voelen jullie je gewaardeerd als klant door de ICT-dienstverlener?",
    options: ["Ja. Heel erg!", "Niet echt"],
    next: [26, "contact"],
    type: ["positive", "negative"]
  },
  {
    id: 26,
    question: "Voelen jullie dat de ICT-dienstverlener jullie feedback serieus neemt?",
    options: ["Jazeker, dat doen ze heel goed", "Feedback?"],
    next: ["satisfied", "contact"],
    type: ["positive", "negative"]
  }
]

interface FlowchartQuestionnaireProps {
  onComplete?: (result: 'satisfied' | 'contact') => void
}

export default function FlowchartQuestionnaire({ onComplete }: FlowchartQuestionnaireProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showResult, setShowResult] = useState<'satisfied' | 'contact' | null>(null)
  const [history, setHistory] = useState<number[]>([])

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleAnswer = (optionIndex: number) => {
    const nextStep = currentQuestion.next[optionIndex]
    
    if (nextStep === 'contact' || nextStep === 'satisfied') {
      setShowResult(nextStep)
      onComplete?.(nextStep)
    } else {
      setHistory([...history, currentQuestionIndex])
      setCurrentQuestionIndex(nextStep - 1)
    }
  }

  const handleBack = () => {
    if (history.length > 0) {
      const newHistory = [...history]
      const previousIndex = newHistory.pop()!
      setHistory(newHistory)
      setCurrentQuestionIndex(previousIndex)
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setShowResult(null)
    setHistory([])
  }

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto p-8"
      >
        {showResult === 'satisfied' ? (
          <div className="text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-16 h-16 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Helemaal goed geregeld!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Fantastisch! Het lijkt erop dat jullie IT-dienstverlener uitstekend werk levert. 
              Jullie zijn goed verzorgd en kunnen met vertrouwen verder!
            </p>
            <p className="text-gray-600 mb-8">
              Blijf jullie huidige IT-partner trouw - dit is precies hoe IT-ondersteuning hoort te zijn.
            </p>
            <Button onClick={handleRestart} variant="outline">
              Opnieuw beginnen
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ExclamationTriangleIcon className="w-16 h-16 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tijd voor een gesprek!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Op basis van jouw antwoorden lijkt het erop dat er ruimte is voor verbetering 
              in jullie IT-ondersteuning. Wij kunnen helpen!
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">Neem contact met ons op:</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <span className="font-medium text-gray-700">Telefoon:</span>
                  <a href="tel:0203080465" className="text-primary-600 hover:text-primary-700">
                    020-30 80 465
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-medium text-gray-700">E-mail:</span>
                  <a href="mailto:info@workflo.nl" className="text-primary-600 hover:text-primary-700">
                    info@workflo.nl
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-medium text-gray-700">Website:</span>
                  <a href="https://workflo.it" className="text-primary-600 hover:text-primary-700">
                    workflo.it
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-medium text-gray-700">Adres:</span>
                  <span className="text-gray-600">Amsterdam</span>
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              Wij bieden een gratis IT-scan aan om te kijken hoe we jullie kunnen helpen!
            </p>
            
            <div className="flex gap-4 justify-center">
              <Button href="tel:0203080465">
                Bel direct
              </Button>
              <Button onClick={handleRestart} variant="outline">
                Opnieuw beginnen
              </Button>
            </div>
          </div>
        )}
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-primary-500 to-primary-600 h-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Vraag {currentQuestionIndex + 1} van {questions.length}
        </p>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(index)}
                className={`w-full p-6 text-left rounded-xl border-2 transition-all ${
                  currentQuestion.type[index] === 'positive'
                    ? 'border-gray-200 hover:border-green-500 hover:bg-green-50'
                    : 'border-gray-200 hover:border-red-500 hover:bg-red-50'
                }`}
              >
                <span className="text-lg font-medium text-gray-900">{option}</span>
              </motion.button>
            ))}
          </div>

          {/* Back button */}
          {history.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8"
            >
              <Button
                onClick={handleBack}
                variant="ghost"
                size="sm"
                className="text-gray-600"
              >
                <ChevronLeftIcon className="w-4 h-4 mr-2" />
                Vorige vraag
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}