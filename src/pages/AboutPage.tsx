import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { brandInfo } from '../data/brandInfo';
import Newsletter from '../components/common/Newsletter';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      
      <section className="pt-32 pb-16 bg-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture bg-cover bg-center opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg text-primary-800 mb-6">
              Nossa História
            </h1>
            <p className="text-lg text-accent-700">
              Conheça a jornada por trás da Aromas de Afeto e nossa missão de transformar 
              ambientes em refúgios de bem-estar através de aromas artesanais.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-md text-primary-800 mb-6">
                Como tudo começou
              </h2>
              <div className="space-y-4 text-accent-700">
                <p>
                  {brandInfo.story.split('.').slice(0, 2).join('.')+'.'}
                </p>
                <p>
                  {brandInfo.story.split('.').slice(2, 4).join('.')+'.'}
                </p>
                <p>
                  {brandInfo.story.split('.').slice(4).join('.')}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="assets/owner.png" 
                  alt="Processo artesanal de criação" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary-100 rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-md text-primary-800 mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="text-accent-700 max-w-2xl mx-auto">
              O que nos guia e nos inspira a criar produtos que tocam os sentidos e despertam emoções.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="font-serif text-xl text-primary-800 mb-4">Missão</h3>
              <p className="text-accent-700">{brandInfo.mission}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="font-serif text-xl text-primary-800 mb-4">Visão</h3>
              <p className="text-accent-700">{brandInfo.vision}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="font-serif text-xl text-primary-800 mb-4">Propósito</h3>
              <p className="text-accent-700">{brandInfo.purpose}</p>
              <p className="text-accent-600 italic mt-4">{brandInfo.slogans[0]}</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 bg-white p-8 rounded-lg shadow-sm"
          >
            <h3 className="font-serif text-xl text-primary-800 mb-4">Valores</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {brandInfo.values.map((value, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span className="text-accent-700">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Emotional Palette */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-md text-primary-800 mb-4">
              Nossa Paleta Emocional
            </h2>
            <p className="text-accent-700 max-w-2xl mx-auto">
              As sensações e emoções que buscamos despertar através de nossos produtos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandInfo.emotionalPalette.map((emotion, index) => {
              const [title, description] = emotion.split(': ');
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-50 p-8 rounded-lg border border-primary-100"
                >
                  <h3 className="font-serif text-xl text-primary-800 mb-3">{title}</h3>
                  <p className="text-accent-700 italic">"{description}"</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-md text-primary-800 mb-6">
                Transforme sua casa em um refúgio sensorial
              </h2>
              <p className="text-accent-700 mb-8">
                Descubra nossos produtos artesanais criados para despertar sensações 
                e transformar ambientes em espaços de bem-estar e aconchego.
              </p>
              <Link to="/produtos" className="btn-primary inline-flex items-center gap-2">
                <span>Conhecer produtos</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Newsletter />
    </motion.div>
  );
};

export default AboutPage;