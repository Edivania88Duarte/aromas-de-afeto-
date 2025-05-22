import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/produtos" element={<ProductsPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;