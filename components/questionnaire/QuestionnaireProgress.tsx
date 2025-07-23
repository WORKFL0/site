import { motion } from 'framer-motion';

interface QuestionnaireProgressProps {
  progress: number;
}

export default function QuestionnaireProgress({ progress }: QuestionnaireProgressProps) {
  return (
    <div className="mb-10">
      <div className="bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}