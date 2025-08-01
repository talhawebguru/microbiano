import React, { Suspense } from 'react'
import Banner from '../Components/common/Banner'
import PageNameBanner from '../Components/common/PageNameBanner'
import ProductBanner from "@/public/images/productPageBanner.png"
import ProductComplete from '../Components/product/ProductComplete'

export const metadata = {
  title: "Our Products | Microbiano - Comprehensive Microbiological Solutions",
  description:
    "Explore our extensive range of microbiological products designed to meet your laboratory and research needs. From culture media to specialized testing solutions, discover quality products that ensure accurate and reliable results.",
  keywords:
    "microbiological products, laboratory supplies, culture media, testing solutions, microbiology equipment",
  alternates: {
    canonical: "https://microbiano.com/product",
    languages: {
      'en-AE': 'https://microbiano.com/product',
      'x-default': 'https://microbiano.com/product',
    },
  },
  robots: "index, follow",
  openGraph: {
    title: "Our Products | Microbiano - Comprehensive Microbiological Solutions",
    description: "Explore our extensive range of microbiological products designed to meet your laboratory and research needs. From culture media to specialized testing solutions, discover quality products that ensure accurate and reliable results.",
    url: "https://microbiano.com/product",
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
    title: "Our Products | Microbiano - Comprehensive Microbiological Solutions",
    description: "Explore our extensive range of microbiological products designed to meet your laboratory and research needs. From culture media to specialized testing solutions, discover quality products that ensure accurate and reliable results.",
    site: "@microbiano",
    images: ["https://microbiano.com/_next/static/media/hero.191acaeb.svg"]
  },
};

const page = () => {
  return (
    <>
      <PageNameBanner title='All Products' image={ProductBanner}/>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductComplete/>
      </Suspense>
      <Banner/>
    </>
  )
}

export default page