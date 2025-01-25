import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import Plates from "@/public/images/plates.png";
import Tubes from "@/public/images/tubes.png";
import Bottles from "@/public/images/bottles.png";
import Link from "next/link";

const Card = () => {
  const cardData = [
    {
      id: 1,
      title: "Prepared Culture Media Plates",
      image: Plates,
      category: "Prepared plates media 90 MM",
    },
    {
      id: 2,
      title: "Prepared Culture Media Tubes",
      image: Tubes,
      category: "Prepared tube media",
    },
    {
      id: 3,
      title: "Prepared Culture Media Bottles",
      image: Bottles,
      category: "Prepared media in Bottles",
    },
  ];

  return (
    <>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] lg:px-10 px-5 mt-[54px] mb-[145px] grid xl:grid-cols-3 sm:grid-cols-2 gap-5 overflow-hidden">
        {cardData.map((info, id) => (
          <motion.div
            key={id}
            className="mt-10 lg:mt-0 xs:w-[100%]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.2 }}
          >
            <Link href={`/product?category=${encodeURIComponent(info.category)}`}>
              <div className="h-full flex xl:flex-nowrap sm:flex-wrap relative -z-10 bg-dog-food bg-cover bg-no-repeat bg-primary-new/40">
                <h2 className="text-secondary text-[28px] pb-2 font-normal font-arial mt-[176px] ml-4">
                  {info.title}
                </h2>
                <Image
                  src={info.image}
                  width={256}
                  height={208}
                  className="w-64 h-52 absolute -z-10 right-0 bottom-0 bg-blend-normal"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Card;