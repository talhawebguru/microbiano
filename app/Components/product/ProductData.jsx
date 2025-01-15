"use client";
import React, { useState, useEffect } from "react";
import productData from "@/data/products";

const ProductData = ({selectedCategory}) => {


  const filteredProducts =
    selectedCategory === "All Products"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  const displayedProducts = filteredProducts;

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full w-full max-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Product Code</th>
            <th className="py-2 px-4 border-b">Pack Size</th>
            <th className="py-2 px-4 border-b">Shelf Life</th>
            <th className="py-2 px-4 border-b">Storage Temp</th>
          </tr>
        </thead>
        <tbody>
          {displayedProducts.map((info, id) => (
            <tr key={id} className="">
              <td className="py-4 px-4 border-b text-center">{info.name}</td>
              <td className="py-4 px-4 border-b text-center">{info.productCode}</td>
              <td className="py-4 px-4 border-b text-center">{info.packSize}</td>
              <td className="py-4 px-4 border-b text-center">{info.shelfLife}</td>
              <td className="py-4 px-4 border-b text-center">{info.storageTemp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductData;
