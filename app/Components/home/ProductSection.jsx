import React from "react";
import * as motion from "motion/react-client"
import ProductData from "../product/ProductData";
import MobileDropDown from "../common/MobileDropDown";
import categoryList from "@/data/CategoryList";
import Link from "next/link";

const ProductSection = () => {
  return (
    <>
      <div className="xl:px-[90px] 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 lg:px-10 px-5">
        <motion.div
          className="flex justify-between items-center xs:gap-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[#18130f] text-[42px] font-normal font-arial text-center xl:text-left 2xl:text-center">
            Microbiological Products for Every Need
          </h2>
          <MobileDropDown />
        </motion.div>
        <motion.div
          className="md:flex flex-wrap font-arial justify-start xl:justify-normal gap-3 mt-7 hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categoryList.map((info, id) => (
            <motion.div
              className="px-[15px] py-2.5 rounded-lg border border-black justify-center items-center gap-2.5 inline-flex"
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
            >
              <div>{info.name}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="grid gap-6 mt-14 xl:gap-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ProductData
            selectedCategory="All Products"
            searchTerm=""
            showCategoryContent={false}
          />
        </motion.div>

        <motion.div
          className="w-[164px] mt-10 h-12 border border-[#9e1f66] text-[#9e1f66] text-base font-normal font-arial flex justify-center items-center mx-auto xs:mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/product">View all Products </Link>
        </motion.div>
      </div>
    </>
  );
};

export default ProductSection;
