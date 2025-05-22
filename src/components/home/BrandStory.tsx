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
                src="https://images.pexels.com/photos/6483581/pexels-photo-6483581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
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
              Nossa História
            </h2>
            <p className="text-accent-700 mb-4">
              A Aromas de Afeto nasceu do desejo de levar bem-estar e aconchego para os lares através de aromas cuidadosamente elaborados de forma artesanal.
            </p>
            <p className="text-accent-700 mb-6">
              Cada produto é pensado para despertar sensações, memórias afetivas e criar ambientes que acolhem. Trabalhamos com matérias-primas selecionadas e processos que respeitam o tempo de cada criação.
            </p>
            <blockquote className="border-l-4 border-primary-400 pl-4 italic text-primary-700 mb-8">
              "Acreditamos que os aromas têm o poder de transformar momentos cotidianos em experiências especiais."
            </blockquote>
            <Link to="/sobre" className="btn-secondary">
              Conheça mais sobre nós
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;