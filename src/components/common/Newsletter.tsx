import React from 'react';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="container-custom flex flex-col items-center text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-3xl font-bold mb-4"
        >
          🌿 Receba afeto no seu e-mail
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="text-lg text-gray-700 mb-6 max-w-xl"
        >
          Assine a newsletter gratuita e receba conteúdos cheios de aroma, afeto e poesia diretamente na sua caixa de entrada. 💌
        </motion.p>

        <motion.a 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }} 
          href="https://aromasdeafeto.substack.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
        >
          Quero me inscrever 💛
        </motion.a>
      </div>
    </section>
  );
};

export default Newsletter;
