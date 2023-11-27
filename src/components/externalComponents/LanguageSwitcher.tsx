// Dropdown.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

 
interface DropdownProps {
 lngs: string[];
}

const LanguageSwitcher: React.FC<DropdownProps> = ({ lngs }) => {
    const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedItem(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-gray-50"
      >
        {selectedItem ? selectedItem : 'En'}
        <svg
          className={`ml-2 -mr-1 h-5 w-5 transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 0 1 .707.293l6 6a1 1 0 0 1-1.414 1.414L10 5.414 4.707 10.707a1 1 0 1 1-1.414-1.414l6-6A1 1 0 0 1 10 3z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-1 w-20 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="py-1">
            {lngs.map((item) => (
              <button
              type="button"
                key={item}
                // href="#/"
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#555555]"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
