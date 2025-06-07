import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setFormStatus('submitting');
    
    try {
      await emailjs.sendForm(
        'service_keb6coh', // Service ID from EmailJS
        'template_gfe3p39', // New Template ID from EmailJS
        formRef.current,
        '4RnmXYHQyzf1EybHU' // Public Key from EmailJS
      );
      
      setFormStatus('success');
      formRef.current.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      setFormStatus('error');
      console.error('Error sending email:', error);
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="font-serif text-2xl text-primary-800 mb-6">Entre em contato</h3>
      
      {formStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6"
        >
          Mensagem enviada com sucesso! Em breve entraremos em contato.
        </motion.div>
      )}
      
      {formStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6"
        >
          Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
        </motion.div>
      )}
      
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="user_name" className="block text-accent-700 mb-2">Nome</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="input-field"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="user_email" className="block text-accent-700 mb-2">E-mail</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="input-field"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="user_phone" className="block text-accent-700 mb-2">Telefone (opcional)</label>
          <input
            type="tel"
            id="user_phone"
            name="user_phone"
            className="input-field"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-accent-700 mb-2">Mensagem</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="input-field resize-none"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={formStatus === 'submitting'}
          className="btn-primary w-full"
        >
          {formStatus === 'submitting' ? 'Enviando...' : 'Enviar mensagem'}
        </button>
        
        <p className="text-xs text-accent-500 mt-4 text-center">
          Ao enviar este formulário, você concorda em receber respostas por e-mail.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;