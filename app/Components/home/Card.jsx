import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import Dog from "@/public/images/dog.png";

const Card = () => {
  const cardData = [
    {
      id: 1,
      title: "Culture Media and Microbiological",
      image: Dog,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      id: 2,
      title: "Clinical, Veterinary",
      image: Dog,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      id: 3,
      title: "Food, Water & Environmental",
      image: Dog,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      id: 4,
      title: "Pharmaceutical & Industrial",
      image: Dog,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
  ];

  return (
    <>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] lg:px-10 px-5 mt-[54px] mb-[145px] grid xl:grid-cols-4 sm:grid-cols-2 gap-5 overflow-hidden">
        {cardData.map((info, id) => (
          <motion.div
            key={id}
            className="mt-10 lg:mt-0 xs:w-[100%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.2 }}
          >
            <div className="h-full flex xl:flex-nowrap sm:flex-wrap relative -z-10 bg-dog-food bg-cover bg-no-repeat bg-[#f5e9f0]">
              <h2 className="text-[#5f1654] text-[28px] font-normal font-arial mt-[176px] ml-4">
                {info.title}
              </h2>
              <Image
                src={info.image}
                width={256}
                height={208}
                className="w-64 h-52 absolute -z-10 right-0 bottom-0"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Card;
