import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { products } from '../../data/products';
import { formatPrice } from '../../utils/format';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-md text-primary-800 mb-4">
            Nossos Aromas
          </h2>
          <p className="text-accent-700 max-w-2xl mx-auto">
            Aromas artesanais cuidadosamente elaborados para transformar ambientes e despertar sensações que acolhem a alma.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="product-card bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-primary-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-accent-600 text-sm mb-3">
                  {product.category}
                </p>
                <p className="text-accent-700 mb-4">
                  {product.shortDescription}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-primary-700">
                     {typeof product.price === 'number'
                      ? formatPrice(product.price)
                      : product.price}                    
                  </span>
                  <a 
                    href={`https://wa.me/5585997790523?text=Olá! Gostaria de saber mais sobre o produto: ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-800 transition-colors flex items-center gap-1"
                  >
                    <span>Comprar</span> 
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/produtos" className="btn-secondary inline-flex items-center gap-2">
            <span>Ver todos os produtos</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;