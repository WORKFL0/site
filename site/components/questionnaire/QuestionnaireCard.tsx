import { motion } from 'framer-motion'

const QuestionnaireCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {children}
      </div>
    </motion.div>
  )
}

export default QuestionnaireCard
