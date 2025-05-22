import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-16 flex items-center"
    >
      <div className="container-custom text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="heading-lg text-primary-800 mb-6">404</h1>
          <p className="text-2xl font-serif text-primary-700 mb-8">
            Página não encontrada
          </p>
          <p className="text-accent-700 mb-8">
            Parece que você se perdeu no caminho. A página que você está procurando não existe ou foi movida.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Voltar para o início</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;