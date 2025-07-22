'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { questions } from '@/lib/questionnaireData'
import QuestionnaireCard from './QuestionnaireCard'
import QuestionnaireProgress from './QuestionnaireProgress'
import QuestionnaireResult from './QuestionnaireResult'
import Button from '../ui/Button'

const FlowchartQuestionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [isPositiveResult, setIsPositiveResult] = useState(false)

  const handleAnswer = (next: number | string) => {
    if (typeof next === 'string') {
      setIsPositiveResult(next === 'satisfied')
      setShowResult(true)
    } else {
      setCurrentQuestionIndex(next - 1)
    }
  }

  const restart = () => {
    setCurrentQuestionIndex(0)
    setShowResult(false)
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <AnimatePresence mode="wait">
      {!showResult ? (
        <QuestionnaireCard key={currentQuestionIndex}>
          <QuestionnaireProgress
            current={currentQuestionIndex + 1}
            total={questions.length}
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {currentQuestion.question}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(currentQuestion.next[index])}
                  variant={currentQuestion.type[index] === 'positive' ? 'primary' : 'danger'}
                  size="lg"
                  className="w-full text-center"
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </QuestionnaireCard>
      ) : (
        <QuestionnaireCard key="result">
          <QuestionnaireResult isPositive={isPositiveResult} onRestart={restart} />
        </QuestionnaireCard>
      )}
    </AnimatePresence>
  )
}

export default FlowchartQuestionnaire
