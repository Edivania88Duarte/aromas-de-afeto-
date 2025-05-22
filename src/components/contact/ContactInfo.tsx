import React from 'react';
import { Mail, MessageCircle, Instagram } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-primary-600" />,
      title: 'E-mail',
      description: 'contatoaromasdeafeto@gmail.com',
      action: 'mailto:contatoaromasdeafeto@gmail.com',
      actionText: 'Enviar e-mail'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary-600" />,
      title: 'WhatsApp',
      description: '+55 85 99779-0523',
      action: 'https://wa.me/5585997790523',
      actionText: 'Iniciar conversa'
    },
    {
      icon: <Instagram className="w-6 h-6 text-primary-600" />,
      title: 'Instagram',
      description: '@aromas.deafeto',
      action: 'https://www.instagram.com/aromas.deafeto/',
      actionText: 'Seguir'
    }
  ];

  return (
    <div>
      <h3 className="font-serif text-2xl text-primary-800 mb-6">Informações de Contato</h3>
      <p className="text-accent-700 mb-8">
        Estamos sempre disponíveis para ajudar, tirar dúvidas e ouvir suas sugestões.
        Entre em contato através de qualquer um dos nossos canais.
      </p>
      
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex gap-4">
            <div className="bg-primary-100 p-3 rounded-full">
              {method.icon}
            </div>
            <div>
              <h4 className="font-medium text-primary-800 mb-1">{method.title}</h4>
              <p className="text-accent-700 mb-2">{method.description}</p>
              <a 
                href={method.action}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-800 transition-colors text-sm font-medium"
              >
                {method.actionText} →
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-primary-50 rounded-lg border border-primary-100">
        <h4 className="font-serif text-xl text-primary-800 mb-3">Horário de Atendimento</h4>
        <p className="text-accent-700">
          Respondemos mensagens de segunda a sexta, das 9h às 18h.
          Nos finais de semana, podemos demorar um pouco mais, mas sempre retornamos!
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;