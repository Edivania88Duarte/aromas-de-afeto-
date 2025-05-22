import React from 'react';
import { motion } from 'framer-motion';

import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BrandValues from '../components/home/BrandValues';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/common/Newsletter';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedProducts />
      <BrandValues />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </motion.div>
  );
};

export default HomePage;