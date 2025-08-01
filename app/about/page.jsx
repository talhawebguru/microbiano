import React from "react";
import PageNameBanner from "../Components/common/PageNameBanner";
import Banner from "../Components/common/Banner";
import AboutUsSection from "../Components/common/AboutUsSection";
import Vision from "../Components/common/Vision";
import ProductPageBanner from "@/public/images/productPageBanner.png";

export const metadata = {
  title: "Microbiano - Experts in Microbiological Products & Solutions",
  description:
    "Microbiano, based in KEZAD, Abu Dhabi, UAE, is a leading supplier of culture media, broth, and microbiological products. Committed to quality, we serve clients across Dubai, Sharjah, Ajman, Qatar, Saudi Arabia, Oman, Bahrain, and the GCC.",
  robots: "index, follow",
  alternates: {
    canonical: "https://microbiano.com/about",
    languages: {
      'en-AE': 'https://microbiano.com/about',
      'x-default': 'https://microbiano.com/about',
    },
  },
  openGraph: {
    title: "Microbiano - Experts in Microbiological Products & Solutions",
    description: "Microbiano, based in KEZAD, Abu Dhabi, UAE, is a leading supplier of culture media, broth, and microbiological products. Committed to quality, we serve clients across Dubai, Sharjah, Ajman, Qatar, Saudi Arabia, Oman, Bahrain, and the GCC.",
    url: "https://microbiano.com/about",
    type: "website",
    locale: "en-AE",
    siteName: "Microbiano",
    images: [
      {
        url: "https://microbiano.com/_next/static/media/hero.191acaeb.svg",
        width: 1200,
        height: 630,
        alt: "Microbiano Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Microbiano - Experts in Microbiological Products & Solutions",
    description: "Microbiano, based in KEZAD, Abu Dhabi, UAE, is a leading supplier of culture media, broth, and microbiological products. Committed to quality, we serve clients across Dubai, Sharjah, Ajman, Qatar, Saudi Arabia, Oman, Bahrain, and the GCC.",
    site: "@microbiano",
    images: ["https://microbiano.com/_next/static/media/hero.191acaeb.svg"]
  },
};

const page = () => {
  return (
    <>
      <PageNameBanner title="About Us" image={ProductPageBanner} />
      <AboutUsSection />
      <Vision />
      <Banner />
    </>
  );
};

export default page;
