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
  canonical: "https://microbiano.com/about",
  robots: "index, follow",
  openGraph: {
    title: "Microbiano - Experts in Microbiological Products & Solutions",
    description: "Microbiano, based in KEZAD, Abu Dhabi, UAE, is a leading supplier of culture media, broth, and microbiological products. Committed to quality, we serve clients across Dubai, Sharjah, Ajman, Qatar, Saudi Arabia, Oman, Bahrain, and the GCC.",
    url: "https://microbiano.com/about",
    type: "website",
    siteName: "Microbiano",
  },
  twitter: {
    card: "summary_large_image",
    title: "Microbiano - Experts in Microbiological Products & Solutions",
    description: "Microbiano, based in KEZAD, Abu Dhabi, UAE, is a leading supplier of culture media, broth, and microbiological products. Committed to quality, we serve clients across Dubai, Sharjah, Ajman, Qatar, Saudi Arabia, Oman, Bahrain, and the GCC.",
    site: "@microbiano",
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
