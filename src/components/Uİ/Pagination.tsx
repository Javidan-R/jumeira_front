import React from 'react';

interface PaginationProps {
  total: number;
  current: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ total, current, onPageChange }) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex items-center space-x-2">
      <button
        disabled={current === 1}
        onClick={() => onPageChange(current - 1)}
        className={`px-3 py-1 rounded ${
          current === 1 ? 'cursor-not-allowed text-gray-400' : 'hover:bg-blue-500 text-blue-500 hover:text-white'
        }`}
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded ${
            page === current ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white text-blue-500'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        disabled={current === total}
        onClick={() => onPageChange(current + 1)}
        className={`px-3 py-1 rounded ${
          current === total ? 'cursor-not-allowed text-gray-400' : 'hover:bg-blue-500 text-blue-500 hover:text-white'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
