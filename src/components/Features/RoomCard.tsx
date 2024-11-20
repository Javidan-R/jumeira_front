import React from 'react';
import { motion } from 'framer-motion';

interface RoomCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ image, title, description, price }) => {
  return (
    <motion.div
      className="rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-semibold">${price}/night</span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
