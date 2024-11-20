import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  onClick: () => void;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, onClick, description }) => {
  return (
    <motion.div
      className="relative group max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Image Section */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        whileHover={{ scale: 1.1 }}
      />

      {/* Overlay for Details */}
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300" />

      {/* Product Info */}
      <div className="p-4 relative z-10">
        <motion.h3
          className="text-xl font-semibold text-gray-900 mb-2"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {description || 'No description available'}
        </motion.p>

        <motion.p
          className="text-lg font-semibold text-blue-600"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {price}
        </motion.p>

        {/* Button Section */}
        <motion.button
          onClick={onClick}
          className="absolute bottom-4 left-4 right-4 py-2 px-6 bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors duration-300 hover:bg-blue-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
