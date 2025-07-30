import React from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client"

const PageNameBanner = (props) => {
  return (
    <>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto xl:mx-[90px] lg:mx-10 h-56 lg:mt-11 mt-6 relative xs:overflow-hidden xs:mt-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute -z-10 w-full h-full"
        >
          <Image src={props.image} alt={props.title || "Banner Image"} className="w-full h-full object-cover object-right inset-0" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-5xl xs:text-[32px] font-normal font-nohemi absolute bottom-9 left-9"
        >
          {props.title}
        </motion.h1>
      </div>
    </>
  );
};

export default PageNameBanner;