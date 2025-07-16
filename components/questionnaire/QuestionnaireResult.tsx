import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, GlobeAltIcon } from '@heroicons/react/outline';

interface QuestionnaireResultProps {
  type: 'satisfied' | 'contact';
  onRestart: () => void;
}

export default function QuestionnaireResult({ type, onRestart }: QuestionnaireResultProps) {
  if (type === 'satisfied') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-green-400 to-green-500 p-10 sm:p-12 lg:p-16 text-center text-white"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-6xl mb-6"
        >
          🎉
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
        >
          Helemaal goed geregeld!
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 mb-8"
        >
          <p className="text-lg sm:text-xl leading-relaxed">
            Fantastisch! Het lijkt erop dat jullie IT-dienstverlener uitstekend werk levert. 
            Jullie zijn goed verzorgd en kunnen met vertrouwen verder!
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            Blijf jullie huidige IT-partner trouw - dit is precies hoe IT-ondersteuning hoort te zijn.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant="outline"
            onClick={onRestart}
            className="!bg-white !text-green-600 hover:!bg-gray-100 !border-white"
          >
            Opnieuw beginnen
          </Button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-primary-400 to-primary-500 p-10 sm:p-12 lg:p-16 text-center text-white"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="text-6xl mb-6"
      >
        🤝
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
      >
        Tijd voor een gesprek!
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg sm:text-xl leading-relaxed mb-8"
      >
        Op basis van jouw antwoorden lijkt het erop dat er ruimte is voor verbetering 
        in jullie IT-ondersteuning. Wij kunnen helpen!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto"
      >
        <h3 className="text-2xl font-bold mb-6">Neem contact met ons op:</h3>
        
        <div className="space-y-4 text-left">
          <a
            href="tel:020-3080465"
            className="flex items-center space-x-3 hover:bg-white/10 p-3 rounded-lg transition-colors"
          >
            <PhoneIcon className="w-6 h-6 flex-shrink-0" />
            <div>
              <p className="font-semibold">Telefoon</p>
              <p className="text-lg">020-30 80 465</p>
            </div>
          </a>
          
          <a
            href="mailto:info@workflo.nl"
            className="flex items-center space-x-3 hover:bg-white/10 p-3 rounded-lg transition-colors"
          >
            <EnvelopeIcon className="w-6 h-6 flex-shrink-0" />
            <div>
              <p className="font-semibold">E-mail</p>
              <p className="text-lg">info@workflo.nl</p>
            </div>
          </a>
          
          <a
            href="https://workflo.it"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:bg-white/10 p-3 rounded-lg transition-colors"
          >
            <GlobeAltIcon className="w-6 h-6 flex-shrink-0" />
            <div>
              <p className="font-semibold">Website</p>
              <p className="text-lg">workflo.it</p>
            </div>
          </a>
          
          <div className="flex items-center space-x-3 p-3">
            <MapPinIcon className="w-6 h-6 flex-shrink-0" />
            <div>
              <p className="font-semibold">Adres</p>
              <p className="text-lg">Amsterdam</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg mb-8"
      >
        Wij bieden een gratis IT-scan aan om te kijken hoe we jullie kunnen helpen!
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Button
          variant="outline"
          onClick={onRestart}
          className="!bg-white !text-primary-600 hover:!bg-gray-100 !border-white"
        >
          Opnieuw beginnen
        </Button>
      </motion.div>
    </motion.div>
  );
}