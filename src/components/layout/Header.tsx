import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const menuItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="font-serif text-2xl md:text-3xl text-primary-800">
              Aromas de Afeto
            </span>
          </motion.div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary-700 border-b-2 border-primary-400'
                      : 'text-accent-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-10 text-accent-800"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { x: 0 } : { x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed inset-0 bg-white md:hidden flex flex-col justify-center items-center"
        >
          <nav>
            <ul className="flex flex-col space-y-6 text-center">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-xl font-serif ${
                      location.pathname === item.path
                        ? 'text-primary-700'
                        : 'text-accent-700'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;