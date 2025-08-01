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
  robots: "index, follow",
  alternates: {
    canonical: "https://microbiano.com/contact",
    languages: {
      'en-AE': 'https://microbiano.com/contact',
      'x-default': 'https://microbiano.com/contact',
    },
  },
  openGraph: {
    title: "Contact Us | Microbiano - Expert Support for Microbiological Products",
    description: "Have questions or need assistance? Contact Microbiano to learn more about our microbiological products and services. Our dedicated team is ready to provide the support and information you need. Reach out to us today!",
    url: "https://microbiano.com/contact",
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
    title: "Contact Us | Microbiano - Expert Support for Microbiological Products",
    description: "Have questions or need assistance? Contact Microbiano to learn more about our microbiological products and services. Our dedicated team is ready to provide the support and information you need. Reach out to us today!",
    site: "@microbiano",
    images: ["https://microbiano.com/_next/static/media/hero.191acaeb.svg"]
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
