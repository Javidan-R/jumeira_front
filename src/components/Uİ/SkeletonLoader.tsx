import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-48 bg-gray-300 rounded-md"></div>
      <div className="h-6 bg-gray-300 w-3/4 rounded-md"></div>
      <div className="h-4 bg-gray-300 w-1/2 rounded-md"></div>
    </div>
  );
};

export default Skeleton;
