"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { motion } from "motion/react";
import SearchIcon from "@/public/images/search-normal.svg";
import ProductData from "./ProductData";
import CategoryList from "./CategoryList";
import { useRouter } from 'next/navigation';

const CategoryPageComplete = ({ selectedCategory }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);

  // Category URL mapping
  const categoryUrlMapping = {
    'Prepared plates media 90 MM': 'prepared-plate-media-90mm-mono',
    'Prepared bioplates media 90 MM': 'prepared-plate-media-90mm-bio',
    'Prepared plates media 150 MM': 'prepared-plate-media-150mm',
    'Prepared tube media': 'prepared-tube-media',
    'Prepared media in Bottles': 'prepared-bottle-media'
  };

  // Debouncing search term
  useEffect(() => {
    if (searchTerm) {
      setIsSearching(true);
    }

    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleCategorySelect = (category) => {
    if (category === "All Products") {
      router.push("/product");
    } else {
      const slug = categoryUrlMapping[category];
      if (slug) {
        router.push(`/category/${slug}`);
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 md:justify-between justify-center xl:px-[90px] lg:px-[40px] px-5 gap-5">
        <div className="md:w-[43%] lg:w-[30%] xl:w-[350px] w-full mt-14">
          <div className="md:hidden">{/* Mobile dropdown can be added here */}</div>
          <div className="xl:w-[350px] pb-3 bg-white shadow md:block hidden">
            <form className="flex mb-3 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full xl:w-[350px] h-14 px-[16px] py-4 pr-12 bg-white shadow justify-start items-start gap-2.5 inline-flex text-neutral-light-gray placeholder:text-[#bdbab8] text-[13px] font-normal font-primary leading-tight border border-none focus:border-secondary active:border-secondary focus:ring-2 focus:ring-secondary/30 focus:outline-none transition-all duration-200"
                placeholder="Search products..."
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Image src={SearchIcon} alt="Search" width={20} height={20} />
              </div>
            </form>
            <div
              className="flex items-center content-center justify-between pt-6 mx-4 cursor-pointer"
              onClick={toggleCategories}
            >
              <h2 className="text-divi-gray text-2xl font-normal font-nohemi leading-[28.80px]">
                Categories
              </h2>
              <div className="text-divi-gray hover:text-secondary transition-colors duration-200">
                {isCategoriesOpen ? (
                  <IoChevronUp size={24} />
                ) : (
                  <IoChevronDown size={24} />
                )}
              </div>
            </div>
            <div className="w-full h-[0px] border border-[#eae9e8] mt-6"></div>
            {isCategoriesOpen && (
              <CategoryList
                onCategorySelect={handleCategorySelect}
                selectedCategory={selectedCategory}
              />
            )}
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
              selectedCategory={selectedCategory}
              searchTerm={debouncedSearchTerm}
              isSearching={isSearching}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPageComplete;
