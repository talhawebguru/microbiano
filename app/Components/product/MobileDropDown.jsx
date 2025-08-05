"use client";
import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import categoryList from "@/data/CategoryList";

const MobileDropDown = ({ onCategorySelect, selectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
    setIsOpen(false); // Close dropdown after selection
  };

  // Find the selected category display name
  const selectedCategoryDisplay = categoryList.find(
    (cat) => cat.name === selectedCategory
  )?.name || "All Products";

  return (
    <div className="relative w-full my-4">
      {/* Dropdown Header */}
      <div
        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-200"
        onClick={toggleDropdown}
      >
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 font-medium">Category</span>
          <span className="text-sm font-medium text-gray-800 mt-1 truncate">
            {selectedCategoryDisplay}
          </span>
        </div>
        <div className="text-gray-600 transition-transform duration-200">
          {isOpen ? <IoChevronUp size={20} /> : <IoChevronDown size={20} />}
        </div>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {categoryList.map((category) => (
            <div
              key={category.id}
              className={`px-4 py-3 cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 ${
                selectedCategory === category.name
                  ? "bg-secondary/10 text-secondary font-medium"
                  : "text-gray-700"
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm">{category.name}</span>
                {selectedCategory === category.name && (
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileDropDown;
