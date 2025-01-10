import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import BannerImg from "@/public/images/BannerCut.png";
import Link from "next/link";
import ZLine from "@/public/images/Vector1.svg";

const Banner = () => {
  return (
    <>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0  xl:px-[90px] lg:px-10 px-5 sm:h-[493px] relative mt-24 flex items-center overflow-hidden">
        <div className="flex items-center ">
          <motion.div
            className="absolute hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8,delay:0.6 }}
          >
            <Image src={BannerImg} alt="Banner Image" className=" mt-5 " />
          </motion.div>
          <motion.div
            className="w-full bg-secondary mt-8 p-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="border border-white py-10 2xl:pl-[40%] xl:pl-[50%] lg:pl-[54%] sm:pl-10 xs:pl-3 ">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="2xl:w-[95%] xl:w-[90%]  text-white text-[42px] font-normal font-arial xs:w-[90%]">
                  Save Up to 10% on Quality Microbiological Products
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Image src={ZLine} alt="Z Line Image" className="sm:ml-36" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <p className="md:w-[79%] mt-2 text-white text-base font-normal font-secondary leading-normal">
                  Take advantage of up to 10% off on our top-tier
                  microbiological products and enhance your laboratory's
                  efficiency. Order now to secure your discount and advance your
                  research with our reliable, high-quality solutions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <button className="text-secondary  text-base font-normal font-arial w-[134px] h-12 bg-white mt-7">
                  Shop Now
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
