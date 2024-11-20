import React from 'react';

interface RatingProps {
  value: number;
  max: number;
}

const Rating: React.FC<RatingProps> = ({ value, max }) => {
  const getStarClass = (index: number) => {
    if (index < value) {
      return 'text-yellow-500';
    }
    return 'text-gray-300';
  };

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: max }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={`w-5 h-5 ${getStarClass(index)} transition-all`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 17.75l-5.29 2.78a1 1 0 01-1.42-1.04l1-5.92-4.31-4.19a1 1 0 01.56-1.7l5.93-.86 2.64-5.35a1 1 0 011.8 0l2.64 5.35 5.93.86a1 1 0 01.56 1.7l-4.31 4.19 1 5.92a1 1 0 01-1.42 1.04L12 17.75z"
          />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
