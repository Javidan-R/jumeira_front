import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="flex justify-between items-center p-4 bg-gray-800 text-white"
    >
      <div className="text-2xl font-semibold">HotelX</div>
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/rooms" className="hover:text-blue-400">Rooms</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-gray-800 p-4 rounded-lg space-y-2">
          <Link to="/" className="block text-white">Home</Link>
          <Link to="/rooms" className="block text-white">Rooms</Link>
          <Link to="/contact" className="block text-white">Contact</Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
