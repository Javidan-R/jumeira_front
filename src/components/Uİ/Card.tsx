import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, onClick }) => {
  return (
    <div
      className="rounded shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
