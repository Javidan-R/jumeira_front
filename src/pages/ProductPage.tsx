import React from 'react';
import { motion } from 'framer-motion';
// import ImageCarousel from '../components/Features/ImageCarousel';
import Button from '../components/Uİ/Button';
import Rating from '../components/Uİ/Rating';

const ProductPage: React.FC = () => {
  const product = {
    images: ['/images/product1.jpg', '/images/product2.jpg', '/images/product3.jpg'],
    title: 'Luxurious Sofa',
    price: '$799',
    description: 'This luxurious sofa brings elegance and comfort to your living room.',
    rating: 4,
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Product Image Carousel */}
      <motion.div
        className="w-full md:w-1/2 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* <ImageCarousel images={product.images} autoplay loop pagination /> */}
      </motion.div>

      {/* Product Details */}
      <div className="md:w-1/2">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          {product.title}
        </motion.h1>
        <motion.p
          className="text-xl font-semibold text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {product.price}
        </motion.p>
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Rating value={product.rating} max={5}  />
        </motion.div>
        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {product.description}
        </motion.p>
        <Button text="Add to Cart" onClick={() => alert('Product added to cart')} />
      </div>
    </div>
  );
};

export default ProductPage;
