import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const DirectorsBoard = () => {
  const { t } = useTranslation();
  
  const executives = [
    {
      title: t('directorsBoard.cio.title', 'CIO'),
      name: t('directorsBoard.cio.name', 'Joseph Jimenez'),
      role: t('directorsBoard.cio.role', 'Chief Information Officer'),
      image: '/us_CIO.jpg',
      path: '/CIO',
      description: t('directorsBoard.cio.description', 'Leader in digital transformation and technological strategy')
    },
    {
      title: t('directorsBoard.executives.ceo.title', 'CEO'),
      name: t('directorsBoard.executives.ceo.name', 'Jane Smith'),
      role: t('directorsBoard.executives.ceo.role', 'Chief Executive Officer'),
      image: '/executives/ceo.jpg',
      path: '/CEO',
      description: t('directorsBoard.executives.ceo.description', 'Strategic vision and business leadership')
    },
    {
      title: t('directorsBoard.executives.cto.title', 'CTO'),
      name: t('directorsBoard.executives.cto.name', 'Mike Johnson'),
      role: t('directorsBoard.executives.cto.role', 'Chief Technology Officer'),
      image: '/executives/cto.jpg',
      path: '/CTO',
      description: t('directorsBoard.executives.cto.description', 'Technological innovation and product development')
    },
    {
      title: t('directorsBoard.executives.cfo.title', 'CFO'),
      name: t('directorsBoard.executives.cfo.name', 'Sarah Wilson'),
      role: t('directorsBoard.executives.cfo.role', 'Chief Financial Officer'),
      image: '/executives/cfo.jpg',
      path: '/CFO',
      description: t('directorsBoard.executives.cfo.description', 'Financial management and strategic planning')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            {t('directorsBoard.title')}
          </h1>
          <p className="text-xl text-gray-300">
            {t('directorsBoard.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {executives.map((executive, index) => (
            <motion.div
              key={executive.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={executive.path} className="block">
                <div className="bg-slate-800/50 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={executive.image}
                      alt={executive.name}
                      className="w-full rounded-t-lg shadow-xl object-cover"
                      onError={(e) => {
                        e.target.src = '/executives/placeholder.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0"></div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gold mb-2">
                      {executive.title}
                    </h2>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {executive.name}
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">
                      {executive.role}
                    </p>
                    <p className="text-gray-400">
                      {executive.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DirectorsBoard;