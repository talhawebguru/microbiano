import React from "react";
import ContactInformation from "../Components/contact/ContactInformation";
import PageNameBanner from "../Components/common/PageNameBanner";
import ProductPageBanner from "@/public/images/productPageBanner.png";
import TouchUs from "../Components/contact/TouchUs";

export const metadata = {
  title:
    "Contact Us | Microbiano - Expert Support for Microbiological Products",
  description:
    "Have questions or need assistance? Contact Microbiano to learn more about our microbiological products and services. Our dedicated team is ready to provide the support and information you need. Reach out to us today!",
  canonical: "https://microbiano.com/contact",
  robots: "index, follow",
  openGraph: {
    title: "Contact Us | Microbiano - Expert Support for Microbiological Products",
    description: "Have questions or need assistance? Contact Microbiano to learn more about our microbiological products and services. Our dedicated team is ready to provide the support and information you need. Reach out to us today!",
    url: "https://microbiano.com/contact",
    type: "website",
    siteName: "Microbiano",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Microbiano - Expert Support for Microbiological Products",
    description: "Have questions or need assistance? Contact Microbiano to learn more about our microbiological products and services. Our dedicated team is ready to provide the support and information you need. Reach out to us today!",
    site: "@microbiano",
  },
};

const page = () => {
  return (
    <>
      <PageNameBanner title="Contact Us" image={ProductPageBanner} />
      <TouchUs />
      <ContactInformation />
    </>
  );
};

export default page;
