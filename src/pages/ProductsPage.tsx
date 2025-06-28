import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { products, Product } from '../data/products';
import Newsletter from '../components/common/Newsletter';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory && selectedCategory !== 'Todos'
    ? products.filter(p => p.category === selectedCategory)
    : products;

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
              Nossos Produtos
            </h1>
            <p className="text-lg text-accent-700">
              Aromas artesanais criados para transformar ambientes e despertar sensações que acolhem a alma.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === 'Todos' ? null : category)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    (category === 'Todos' && !selectedCategory) || category === selectedCategory
                      ? 'bg-primary-600 text-white'
                      : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </motion.div>
  );
};

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
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
        
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-20'}`}>
          <p className="text-accent-700 mb-4">
            {isExpanded ? product.longDescription : product.shortDescription}
          </p>
          
          {isExpanded && (
            <>
              {product.ingredients && (
                <div className="mb-4">
                  <h4 className="font-medium text-primary-700 mb-2">Composição</h4>
                  <ul className="text-accent-700 text-sm">
                    {product.ingredients.map((ingredient, i) => (
                      <li key={i} className="flex items-center gap-2 mb-1">
                        <span className="text-primary-600">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* {product.highlights && (
                <div className="mb-4">
                  <h4 className="font-medium text-primary-700 mb-2">Destaques</h4>
                  <ul className="text-accent-700 text-sm">
                    {product.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 mb-1">
                        <span className="text-primary-600">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}
            </>
          )}
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary-600 hover:text-primary-800 transition-colors text-sm font-medium mb-4"
        >
          {isExpanded ? 'Mostrar menos' : 'Saiba mais'}
        </button>
        
        <div className="flex items-center justify-between pt-3 border-t border-primary-100">
          <span className="font-medium text-primary-700">
             {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
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
  );
};

export default ProductsPage;