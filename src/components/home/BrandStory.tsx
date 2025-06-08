import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BrandStory: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden">
              <img 
                src="assets/quadro.png" 
                alt="Processo artesanal de criação de velas" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-lg -z-10"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md text-primary-800 mb-6">
              Quem é a Aromas de Afeto?
            </h2>
            <p className="text-accent-700 mb-4">
              Uma marca cearense, criada por uma jovem empreendedora e que surgiu com grande interesse de levar amor e aconchego em forma de fragrâncias.
            </p>
            <p className="text-accent-700 mb-6">
              Cada produto da Aromas de Afeto é produzido artesanalmente, com muito cuidado, dedicação e responsabilidade, sendo cada um deles inspirado em momentos especiais da minha vida que me geraram memórias olfativas únicas.
            </p>        
            <blockquote className="border-l-4 border-primary-400 pl-4 italic text-primary-700 mb-8">
              A Aromas de afeto tem o poder acolher, confortar e transformar cada ambiente com delicadeza e significado através das suas fragrâncias.
            </blockquote>
            <Link to="/sobre" className="btn-secondary">
              Conheça mais
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;