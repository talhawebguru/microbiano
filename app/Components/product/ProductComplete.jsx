"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ArrowDown from "@/public/images/arrow-down.svg";
import CategoryList from "./CategoryList";
import ProductData from "./ProductData";

const ProductComplete = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, []); // Runs only on the client side after the initial render

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 md:justify-between justify-center xl:px-[90px] lg:px-[40px] px-5 gap-5">
        <div className="md:w-[43%] lg:w-[30%] xl:w-[350px] w-full mt-14">
          <div className="md:hidden">{/* <MobileProductDrop /> */}</div>
          <div className="xl:w-[350px] pb-3 bg-white shadow md:block hidden">
            <form className="flex mb-3">
              <input
                type="text"
                className="w-full xl:w-[350px] h-14 px-[16px] py-4 bg-white shadow justify-start items-start gap-2.5 inline-flex text-[#bdbab8] text-[13px] font-normal font-primary leading-tight"
                placeholder="Search"
              />
            </form>
            <div className="flex items-center content-center justify-between pt-6 mx-4">
              <h2 className="text-divi-gray text-2xl font-normal font-nohemi leading-[28.80px]">
                Categories
              </h2>
              <div>
                <Image src={ArrowDown} alt="Arrow Down" />
              </div>
            </div>
            <div className="w-full h-[0px] border border-[#eae9e8] mt-6"></div>
            {/* Categories List Call */}
            <CategoryList
              onCategorySelect={handleCategorySelect}
              selectedCategory={selectedCategory}
            />
          </div>
          <div className="flex justify-center items-center mt-10">
            <a href="/Microbiano.pdf" target="_blank" download>
              <button className="bg-secondary px-3 py-4 text-white rounded-md">
                Download Catalog PDF
              </button>
            </a>
          </div>
        </div>
        <div className="xl:w-[70%] md:w-[50%] lg:w-[65%] w-full">
          <div className="grid gap-6 xl:gap-10 justify-center pt-14 grid-cols-1">
            <ProductData
              initialLimit={21}
              mobileLimit={8}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComplete;
