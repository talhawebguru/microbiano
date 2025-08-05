"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react"
import productData from "@/data/products";
import CategoryContent from "./CategoryContent";

const ProductData = ({selectedCategory, searchTerm, isSearching, showCategoryContent = true}) => {

  // Filter products based on category and search term
  const filteredProducts = productData.filter((product) => {
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesSearch = !searchTerm || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.productCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.packSize.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shelfLife.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.storageTemp.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Show all filtered products
  const displayedProducts = filteredProducts;

  return (
    <motion.div 
      className="overflow-hidden w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isSearching && (
        <div className="flex justify-center items-center py-4">
          <div className="text-gray-500">Searching...</div>
        </div>
      )}
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full w-full max-w-full bg-white overflow-hidden">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Product Name</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Product Code</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Pack Size</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Shelf Life</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Storage Temp</th>
            </tr>
          </thead>
          <tbody>
            {!isSearching && displayedProducts.length > 0 ? (
              displayedProducts.map((info, id) => (
                <motion.tr 
                  key={id} 
                  className="hover:bg-gray-50 transition-colors duration-150"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: id * 0.05 }}
                >
                  <td className="py-4 px-4 border-b text-sm text-gray-800">{info.name}</td>
                  <td className="py-4 px-4 border-b text-sm text-gray-600">{info.productCode}</td>
                  <td className="py-4 px-4 border-b text-sm text-gray-600">{info.packSize}</td>
                  <td className="py-4 px-4 border-b text-sm text-gray-600">{info.shelfLife}</td>
                  <td className="py-4 px-4 border-b text-sm text-gray-600">{info.storageTemp}</td>
                </motion.tr>
              ))
            ) : !isSearching && displayedProducts.length === 0 ? (
              <motion.tr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <td colSpan="5" className="py-8 px-4 text-center text-gray-500">
                  No products found matching your search criteria.
                </td>
              </motion.tr>
            ) : null}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {!isSearching && displayedProducts.length > 0 ? (
          displayedProducts.map((info, id) => (
            <motion.div 
              key={id} 
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: id * 0.05 }}
            >
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm leading-tight">{info.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-gray-500 font-medium">Product Code:</span>
                    <p className="text-gray-700 mt-1">{info.productCode}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Pack Size:</span>
                    <p className="text-gray-700 mt-1">{info.packSize}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Shelf Life:</span>
                    <p className="text-gray-700 mt-1">{info.shelfLife}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Storage:</span>
                    <p className="text-gray-700 mt-1">{info.storageTemp}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : !isSearching && displayedProducts.length === 0 ? (
          <motion.div
            className="bg-white border border-gray-200 rounded-lg p-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500">No products found matching your search criteria.</p>
          </motion.div>
        ) : null}
      </div>
         
      {/* Category Content Section - Only show when showCategoryContent is true */}
      {showCategoryContent && selectedCategory !== "All Products" && (
        <CategoryContent selectedCategory={selectedCategory} />
      )}

    </motion.div>
  );
};

export default ProductData;
