import React, { Suspense } from 'react'
import Banner from '../../Components/common/Banner'
import PageNameBanner from '../../Components/common/PageNameBanner'
import ProductBanner from "@/public/images/productPageBanner.png"
import CategoryPageComplete from '../../Components/product/CategoryPageComplete'

// Category mapping
const categoryMapping = {
  'prepared-plate-media-90mm-mono': 'Prepared plates media 90 MM',
  'prepared-plate-media-90mm-bio': 'Prepared bioplates media 90 MM',
  'prepared-plate-media-150mm': 'Prepared plates media 150 MM',
  'prepared-tube-media': 'Prepared tube media',
  'prepared-bottle-media': 'Prepared media in Bottles'
};

const CategoryPage = ({ params }) => {
  const { slug } = params;
  const categoryName = categoryMapping[slug];
  
  if (!categoryName) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <PageNameBanner title={categoryName} image={ProductBanner}/>
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryPageComplete selectedCategory={categoryName} />
      </Suspense>
      <Banner/>
    </>
  )
}

export default CategoryPage

// Generate static params for better SEO
export async function generateStaticParams() {
  return [
    { slug: 'prepared-plate-media-90mm-mono' },
    { slug: 'prepared-plate-media-90mm-bio' },
    { slug: 'prepared-plate-media-150mm' },
    { slug: 'prepared-tube-media' },
    { slug: 'prepared-bottle-media' }
  ];
}
