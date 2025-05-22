import React from 'react';
import { motion } from 'framer-motion';

import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Newsletter from '../components/common/Newsletter';

const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture bg-cover bg-center opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg text-primary-800 mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg text-accent-700">
              Estamos aqui para ajudar, tirar dúvidas e ouvir suas sugestões.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactInfo />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-md text-primary-800 mb-4">Siga-nos no Instagram</h2>
            <p className="text-accent-700 max-w-2xl mx-auto">
              Acompanhe nosso dia a dia, dicas de bem-estar e lançamentos.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square bg-primary-100 rounded-lg overflow-hidden"
              >
                <a 
                  href="https://www.instagram.com/aromas.deafeto/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full hover:opacity-90 transition-opacity"
                >
                  <img 
                    src={`https://images.pexels.com/photos/4207${790 + i}/pexels-photo-4207${790 + i}.jpeg?auto=compress&cs=tinysrgb&w=600`} 
                    alt={`Aromas de Afeto Instagram ${i}`}
                    className="w-full h-full object-cover"
                  />
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://www.instagram.com/aromas.deafeto/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-700 hover:text-primary-900 transition-colors font-medium"
            >
              @aromas.deafeto
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
    </motion.div>
  );
};

export default ContactPage;