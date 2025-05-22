import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Home, Sparkles } from 'lucide-react';

const BrandValues: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-10 h-10 text-primary-600" />,
      title: 'Feito com Afeto',
      description: 'Cada produto é elaborado manualmente com carinho e atenção aos detalhes.'
    },
    {
      icon: <Leaf className="w-10 h-10 text-primary-600" />,
      title: 'Ingredientes Selecionados',
      description: 'Utilizamos matérias-primas de qualidade para criar aromas que enriquecem os sentidos.'
    },
    {
      icon: <Home className="w-10 h-10 text-primary-600" />,
      title: 'Aconchego para o Lar',
      description: 'Transformamos ambientes em refúgios de bem-estar e tranquilidade.'
    },
    {
      icon: <Sparkles className="w-10 h-10 text-primary-600" />,
      title: 'Experiência Sensorial',
      description: 'Promovemos experiências que conectam emoções, memórias e sensações.'
    }
  ];

  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-md text-primary-800 mb-4">
            Nossos Valores
          </h2>
          <p className="text-accent-700 max-w-2xl mx-auto">
            Acreditamos que aromas têm o poder de transformar ambientes e criar conexões emocionais profundas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="font-serif text-xl text-primary-800 mb-3">
                {value.title}
              </h3>
              <p className="text-accent-700">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;