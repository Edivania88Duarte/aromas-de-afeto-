import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="bg-primary-100 py-16">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md text-primary-800 mb-4">Receba um carinho por e-mail</h2>
            <p className="text-accent-700 mb-8">
              Inscreva-se para receber dicas de bem-estar, novidades sobre nossos produtos e promoções exclusivas.
            </p>
            
            {isSubmitted ? (
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                <p className="text-primary-700 font-medium">
                  Obrigado por se inscrever! Em breve você receberá nossas novidades.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  required
                  className="input-field flex-grow"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary whitespace-nowrap"
                >
                  {isLoading ? 'Enviando...' : 'Inscrever-se'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;