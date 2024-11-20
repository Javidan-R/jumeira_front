import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface ImageCarouselProps {
  images: string[];
  autoplay?: boolean;
  loop?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  effect?: 'slide' | 'fade';
  height?: string;
  fallbackImage?: string;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoplay = false,
  loop = true,
  navigation = false,
  pagination = false,
  effect = 'slide',
  height = 'h-64',
  fallbackImage = '/path/to/fallback-image.jpg',
  className = '',
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <Swiper
        loop={loop}
        autoplay={autoplay ? { delay: 3000 } : undefined}
        navigation={navigation}
        pagination={pagination ? { clickable: true } : undefined}
        effect={effect}
        className="overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement; // Type assertion here
                  target.src = fallbackImage;
                }}
                className={`${height} w-full object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out`}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
