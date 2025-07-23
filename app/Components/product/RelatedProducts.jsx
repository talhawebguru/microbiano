import React from 'react'
import ProductData from './ProductData'

const RelatedProducts = () => {
  return (
    <>
        <div className='xl:px-[90px] lg:px-[40px] px-5 mt-16 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0'>
            <h2 className='text-[#271F19] text-2xl font-normal font-primary leading-[28.88px]'>Related products</h2>
            <div className='grid gap-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-14'>
            <ProductData selectedCategory="All Products"/>
            </div>
        </div>
    </>
  )
}

export default RelatedProducts