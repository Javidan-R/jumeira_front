import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Company Info Section */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-8"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          About Jumeira House
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          At Jumeira House, we believe in delivering high-quality and luxurious furniture to enhance your living spaces. 
          Our products are designed with elegance, comfort, and functionality in mind.
        </motion.p>
      </motion.section>

      {/* History Section */}
      <motion.section
        className="bg-gray-100 p-8 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Our History</h2>
        <p className="text-gray-600">
          Founded in 2010, Jumeira House has grown to become a leading brand in the luxury furniture market. Our mission 
          is to provide quality products that are both beautiful and functional, designed to complement the lifestyle of 
          modern homes.
        </p>
      </motion.section>
    </div>
  );
};

export default AboutPage;
