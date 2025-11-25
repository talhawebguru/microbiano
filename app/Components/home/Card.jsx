import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
import Plates from "@/public/images/ii1.jpg";
import Tubes from "@/public/images/ii3.jpg";
import Bottles from "@/public/images/ii2.jpg";
import Link from "next/link";

const Card = () => {
  // Function to create SEO-friendly URL slug
  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  const cardData = [
    {
      id: 1,
      title: "Prepared Culture Media Plates",
      image: Plates,
      category: "Prepared plates media 90 MM",
      url: "prepared-plate-media-90mm-mono"
    },
    {
      id: 2,
      title: "Prepared Culture Media Tubes",
      image: Tubes,
      category: "Prepared tube media",
      url: "prepared-tube-media"
    },
    {
      id: 3,
      title: "Prepared Culture Media Bottles",
      image: Bottles,
      category: "Prepared media in Bottles",
      url: "prepared-bottle-media"
    },
  ];

  return (
    <>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] lg:px-10 px-5 mt-[54px] mb-[145px] grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
        {cardData.map((info, id) => (
          <motion.div
            key={id}
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: id * 0.15 }}
          >
            <Link href={`/category/${info.url}`} className="group block h-full">
              <div className="relative h-[220px] sm:h-[240px] lg:h-[260px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {/* Full-card image */}
                <Image
                  src={info.image}
                  alt={info.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className={
                    id === 1
                      ? "object-cover object-bottom scale-100 group-hover:scale-105 transition-transform duration-500" // Tubes: move view down
                      : "object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500" // Plates & bottles: full-width cover
                  }
                  priority={id === 0}
                />

                {/* Brand-colored overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/35" />
                <div className="absolute inset-0 bg-primary-new/35 mix-blend-soft-light" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center px-5 sm:px-6 lg:px-7 py-6">
                  {/* Small label */}
                  <p className="text-[11px] sm:text-xs tracking-[0.16em] font-semibold text-primary-new uppercase mb-2 font-secondary">
                    Microbiological Media
                  </p>
                  {/* Title */}
                  <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-normal font-nohemi leading-snug mb-3 transition-colors duration-300">
                    {info.title}
                  </h2>
                  {/* Body text */}
                  <p className="hidden sm:block text-[13px] text-light-gray max-w-[90%] font-primary">
                    High-quality, ready-to-use prepared culture media for reliable and accurate results.
                  </p>

                  {/* CTA */}
                  <div className="mt-4 inline-flex items-center max-w-fit font-medium text-sm font-primary">
                    <span className="text-primary-new">Explore products</span>
                    <span className="ml-2 inline-flex transform group-hover:translate-x-1 transition-transform duration-300 text-primary-new">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Card;