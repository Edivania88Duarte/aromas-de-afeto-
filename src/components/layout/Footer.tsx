import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-2xl text-primary-800 mb-4">Aromas de Afeto</h3>
            <p className="text-accent-700 mb-4 max-w-xs">
              Aromas artesanais feitos com carinho para transformar sua casa em um refúgio de bem-estar e aconchego.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/aromas.deafeto/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5585997790523"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 hover:text-primary-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:contatoaromasdeafeto@gmail.com"
                className="text-primary-700 hover:text-primary-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl text-primary-800 mb-4">Navegue</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-accent-700 hover:text-primary-600 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-accent-700 hover:text-primary-600 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-accent-700 hover:text-primary-600 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-accent-700 hover:text-primary-600 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl text-primary-800 mb-4">Contato</h4>
            <p className="text-accent-700 mb-2">
              <a 
                href="mailto:contatoaromasdeafeto@gmail.com"
                className="hover:text-primary-600 transition-colors"
              >
                contatoaromasdeafeto@gmail.com
              </a>
            </p>
            <p className="text-accent-700">
              <a 
                href="https://wa.me/5585997790523"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 transition-colors"
              >
                +55 85 99779-0523
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-200 pt-8 text-center">
          <p className="text-accent-600 text-sm">
            &copy; {currentYear} Aromas de Afeto. Todos os direitos reservados.
          </p>
          <p className="text-accent-500 text-xs mt-2 flex items-center justify-center">
            Feito com <Heart size={14} className="mx-1 text-primary-600" /> para espalhar afeto e bem-estar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;