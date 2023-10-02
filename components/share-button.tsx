import React, { useState } from 'react';
import { motion } from 'framer-motion';

const shareButton = ({ text, icon, href, onClick }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const variants = {
    open: { opacity: 1, y: 0, display: 'block' },
    closed: { opacity: 0, y: -10, display: 'none' },
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block group">
      <button
        className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
        onClick={onClick}
        href={href}
      >
        {icon}
        <span>{text}</span>
      </button>
      {text === 'Share' && (
        <motion.div
          initial="closed"
          animate={isDropdownOpen ? 'open' : 'closed'}
          variants={variants}
          className="absolute right-0 mt-2 origin-top-right bg-white border border-gray-200 rounded-lg shadow-lg"
        >
          <a href="#0" className="block px-4 py-2 text-gray-700">
            WhatsApp Share
          </a>
          <a href="#0" className="block px-4 py-2 text-gray-700">
            Facebook Share
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default shareButton;
