import React, { Suspense } from 'react'
import Banner from '../Components/common/Banner'
import PageNameBanner from '../Components/common/PageNameBanner'
import ProductBanner from "@/public/images/productPageBanner.png"
import ProductComplete from '../Components/product/ProductComplete'

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