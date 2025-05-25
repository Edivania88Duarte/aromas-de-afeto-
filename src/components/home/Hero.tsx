import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-hero bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/80 to-primary-50/95"></div>
      
      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="heading-lg text-primary-800 mb-6">
              Transforme sua casa em um refúgio de afeto
            </h1>
            <p className="text-lg text-accent-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Aromas artesanais criados com carinho para despertar sensações, 
              memórias afetivas e transformar qualquer ambiente em um espaço de aconchego.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/produtos" className="btn-primary">
                Conheça nossos produtos
              </Link>
              <Link to="/sobre" className="btn-secondary">
                Nossa história
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-primary-100 p-8 max-w-md mx-auto overflow-hidden">
              <img 
                src="assets/chaBranco2.png" 
                alt="Vela aromática Aromas de Afeto" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:right-0 bg-white p-4 rounded-lg shadow-md max-w-xs"
            >
              <p className="font-serif text-primary-700 italic">
                "Aromas que despertam memórias e criam momentos de aconchego"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;