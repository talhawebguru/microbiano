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
      className="overflow-x-auto overflow-hidden w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isSearching && (
        <div className="flex justify-center items-center py-4">
          <div className="text-gray-500">Searching...</div>
        </div>
      )}
      <table className="min-w-full w-full max-w-full bg-white overflow-hidden">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Product Name</th>
            <th className="py-2 px-4 border-b text-left">Product Code</th>
            <th className="py-2 px-4 border-b text-left">Pack Size</th>
            <th className="py-2 px-4 border-b text-left">Shelf Life</th>
            <th className="py-2 px-4 border-b text-left">Storage Temp</th>
          </tr>
        </thead>
        <tbody>
          {!isSearching && displayedProducts.length > 0 ? (
            displayedProducts.map((info, id) => (
              <motion.tr 
                key={id} 
                className="hover:bg-gray-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: id * 0.05 }}
              >
                <td className="py-4 px-4 border-b">{info.name}</td>
                <td className="py-4 px-4 border-b">{info.productCode}</td>
                <td className="py-4 px-4 border-b">{info.packSize}</td>
                <td className="py-4 px-4 border-b">{info.shelfLife}</td>
                <td className="py-4 px-4 border-b">{info.storageTemp}</td>
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
         
      {/* Category Content Section - Only show when showCategoryContent is true */}
      {showCategoryContent && selectedCategory !== "All Products" && (
        <CategoryContent selectedCategory={selectedCategory} />
      )}

    </motion.div>
  );
};

export default ProductData;
