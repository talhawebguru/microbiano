import React, { Suspense } from 'react'
import Banner from '../Components/common/Banner'
import PageNameBanner from '../Components/common/PageNameBanner'
import ProductBanner from "@/public/images/productPageBanner.png"
import ProductComplete from '../Components/product/ProductComplete'

export const metadata = {
  title: "All Products | Microbiano - Complete Range of Microbiological Media",
  description: "Explore Microbiano's complete range of microbiological products including prepared agar plates, tube media, bottle media, and laboratory solutions. ISO-certified quality for all your lab needs.",
  canonical: "https://microbiano.com/product",
  robots: "index, follow",
  openGraph: {
    title: "All Products | Microbiano - Complete Range of Microbiological Media",
    description: "Explore Microbiano's complete range of microbiological products including prepared agar plates, tube media, bottle media, and laboratory solutions. ISO-certified quality for all your lab needs.",
    url: "https://microbiano.com/product",
    type: "website",
    siteName: "Microbiano",
    image: [
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
    title: "All Products | Microbiano - Complete Range of Microbiological Media",
    description: "Explore Microbiano's complete range of microbiological products including prepared agar plates, tube media, bottle media, and laboratory solutions. ISO-certified quality for all your lab needs.",
    site: "@microbiano",
    image: "https://microbiano.com/_next/static/media/hero.191acaeb.svg"
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