import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "As velas da Aromas de Afeto transformaram meus momentos de autocuidado. O aroma é delicado e persistente, criando uma atmosfera de tranquilidade em casa.",
    author: "Mariana Silva",
    role: "Cliente desde 2024"
  },
  {
    quote: "Comprei o home spray de maçã com canela e me apaixonei! O cheirinho aconchegante toma conta do escritório todo e dura por muito tempo.",
    author: "Carolina Mendes",
    role: "Cliente desde 2025"
  },
  {
    quote: "Os produtos são feitos com tanto carinho que isso transparece na qualidade. Os ambientes são completamente transformados com as fragrâncias.",
    author: "Edivania Duarte",
    role: "Cliente desde 2024"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-primary-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-md text-primary-800 mb-4">
            O que dizem sobre nós
          </h2>
          <p className="text-accent-700 max-w-2xl mx-auto">
            Histórias de pessoas que transformaram seus ambientes com nossos aromas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="mb-6 text-primary-400">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11L7 16H9.5C10.3284 16 11 16.6716 11 17.5V19.5C11 20.3284 10.3284 21 9.5 21H7.5C6.67157 21 6 20.3284 6 19.5V17.5L9 13M19 11L16 16H18.5C19.3284 16 20 16.6716 20 17.5V19.5C20 20.3284 19.3284 21 18.5 21H16.5C15.6716 21 15 20.3284 15 19.5V17.5L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-accent-700 italic mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-medium text-primary-800">
                  {testimonial.author}
                </p>
                <p className="text-sm text-accent-600">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;