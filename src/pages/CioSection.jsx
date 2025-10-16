import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CioSection = () => {
  const { t } = useTranslation();
  return (
    <div id="cio-section" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-16">
        {/* Back to Board link temporarily hidden
        <Link
          to="/directors-board"
          className="inline-flex items-center text-gold hover:text-gold/80 mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {t('directorsBoard.cio.backToBoard')}
        </Link>
        */}

        {/* Hero Section with Photo */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/us_CIO.jpg"
              alt={`${t('directorsBoard.cio.role')} - ${t('directorsBoard.cio.name')}`}
              className="rounded-lg shadow-xl w-full"
              onError={(e) => {
                e.target.src = '/placeholder.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              {t('directorsBoard.cio.name')}
            </h1>
            <h2 className="text-2xl text-gray-300 mb-6">
              {t('directorsBoard.cio.role')}
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('directorsBoard.cio.bio')}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gold/20 text-gold rounded-full text-sm">
                Digital Transformation
              </span>
              <span className="px-4 py-2 bg-gold/20 text-gold rounded-full text-sm">
                Technology Innovation
              </span>
              <span className="px-4 py-2 bg-gold/20 text-gold rounded-full text-sm">
                Strategic Leadership
              </span>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Chief Information Officer
          </h1>
          <p className="text-xl text-gray-300">
            Transformando la tecnología en ventaja competitiva
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-gold mb-4">
              {t('directorsBoard.cio.responsibilities')}
            </h2>
            <ul className="space-y-3 text-gray-300">
              {t('directorsBoard.cio.responsibilitiesList', { returnObjects: true }).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-gold mb-4">
              {t('directorsBoard.cio.focusAreas')}
            </h2>
            <ul className="space-y-3 text-gray-300">
              {t('directorsBoard.cio.focusAreasList', { returnObjects: true }).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-slate-800/50 p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-gold mb-4">
            {t('directorsBoard.cio.strategicObjectives')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-gray-300">
              <h3 className="font-semibold mb-2 text-gold">
                {t('directorsBoard.cio.efficiency.title')}
              </h3>
              <p>{t('directorsBoard.cio.efficiency.description')}</p>
            </div>
            <div className="text-gray-300">
              <h3 className="font-semibold mb-2 text-gold">
                {t('directorsBoard.cio.transformation.title')}
              </h3>
              <p>{t('directorsBoard.cio.transformation.description')}</p>
            </div>
            <div className="text-gray-300">
              <h3 className="font-semibold mb-2 text-gold">
                {t('directorsBoard.cio.security.title')}
              </h3>
              <p>{t('directorsBoard.cio.security.description')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CioSection;