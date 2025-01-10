import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import Doctor from "@/public/images/doctor.png";
import Vector from "@/public/images/Vector1.svg";

const AboutUsSection = () => {
  return (
    <>
      <div className="bg-[#f5e9f0]/80  2xl:px-0  xl:px-[90px] lg:px-10 px-5 lg:h-[568px] xl:mt-[182px] sm:mt-[50px] ">
        <div className="2xl:max-w-[1440px] 2xl:mx-auto flex sm:flex-wrap lg:flex-nowrap sm:justify-center lg:justify-normal gap-[93px] 2xl:gap-[350px]">
          <motion.div
            className="lg:relative lg:-top-9 sm:mt-5 lg:mt-0  xs:hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={Doctor} />
          </motion.div>
          <motion.div
            className="xs:mt-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-secondary text-[42px] font-normal font-arial lg:mt-[102px] ">
              About Us
            </h2>
            <div>
              <Image src={Vector} />
            </div>
            <div>
              <motion.p
                className="w-[489px] xs:w-full text-[#151515] text-base font-normal font-secondary leading-normal mt-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Here at Microbiano, we are dedicated to providing high-quality microbiological products from our cutting-edge, fully automated manufacturing facilities in KEZAD, Abu Dhabi. We specialize in producing and supplying various microbiological pre-poured culture media (PPM), pre-poured tubed media, and bottled media designed to meet the highest industry standards. Our operations strictly follow industry compliance regulations, ensuring the delivery of reliable, premium products to laboratories and industries worldwide.
              </motion.p>
            </div>
            <motion.div
              className="mt-[42px] mb-10 lg:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="text-white text-base font-normal font-arial w-[134px] h-12 bg-secondary">
                Enquire now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
