'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuestionnaireCard from '@/components/questionnaire/QuestionnaireCard';
import QuestionnaireProgress from '@/components/questionnaire/QuestionnaireProgress';
import QuestionnaireResult from '@/components/questionnaire/QuestionnaireResult';
import { questions } from '@/lib/questionnaireData';

export default function TevredenheidscheckPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultType, setResultType] = useState<'satisfied' | 'contact'>('satisfied');
  const [questionHistory, setQuestionHistory] = useState<number[]>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    const nextStep = currentQuestion.next[optionIndex];
    
    // Add current question to history before moving to next
    setQuestionHistory([...questionHistory, currentQuestionIndex]);

    if (nextStep === 'contact') {
      setResultType('contact');
      setShowResult(true);
    } else if (nextStep === 'satisfied') {
      setResultType('satisfied');
      setShowResult(true);
    } else if (typeof nextStep === 'number') {
      // Continue to next question
      setCurrentQuestionIndex(nextStep - 1); // Convert to 0-based index
    }
  };

  const handleBack = () => {
    if (questionHistory.length > 0) {
      const newHistory = [...questionHistory];
      const previousQuestion = newHistory.pop();
      setQuestionHistory(newHistory);
      setCurrentQuestionIndex(previousQuestion!);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setQuestionHistory([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray-100 bg-grid opacity-50" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-400 to-primary-500 p-8 sm:p-10 text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              >
                🔍 IT-Dienstverlener Check
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl opacity-90"
              >
                Ontdek in 2 minuten of jouw IT-partner écht voor je zorgt
              </motion.p>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key="questionnaire"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 sm:p-10 lg:p-12"
                >
                  <QuestionnaireProgress progress={progress} />
                  <QuestionnaireCard
                    question={currentQuestion}
                    questionNumber={currentQuestionIndex + 1}
                    totalQuestions={questions.length}
                    onAnswer={handleAnswer}
                    onBack={handleBack}
                    canGoBack={questionHistory.length > 0}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <QuestionnaireResult
                    type={resultType}
                    onRestart={restartQuiz}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}