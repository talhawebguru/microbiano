import React, { Suspense } from 'react'
import Banner from '../../Components/common/Banner'
import PageNameBanner from '../../Components/common/PageNameBanner'
import ProductBanner from "@/public/images/productPageBanner.png"
import CategoryPageComplete from '../../Components/product/CategoryPageComplete'
import productData from '@/data/products'

// Category mapping
const categoryMapping = {
  'prepared-plate-media-90mm-mono': 'Prepared plates media 90 MM',
  'prepared-plate-media-90mm-bi': 'Prepared biplates media 90 MM',
  'prepared-plate-media-150mm': 'Prepared plates media 150 MM',
  'prepared-tube-media': 'Prepared tube media',
  'prepared-bottle-media': 'Prepared media in Bottles'
};

// Metadata for each category
const categoryMetadata = {
  'prepared-plate-media-90mm-mono': {
    title: 'Buy Prepared Plate Media 90mm Mono | Nutrient, MacConkey, Chocolate Agar – Microbiano',
    description: 'Shop high-quality 90mm mono prepared agar plates at Microbiano. Choose from Nutrient Agar, Mannitol Salt Agar, Chocolate Agar, MacConkey & more. ISO-certified, ready-to-use, sterile media for labs.',
    image: 'https://www.microbiano.com/assets/images/products/90mm-mono-media.jpg',
    twitterDescription: 'Explore ISO-certified 90mm mono agar plates. Available: Nutrient Agar, Mannitol Salt, Chocolate Agar & more. Ready-to-use microbiology media.',
    schemaName: 'Prepared Plate Media - 90mm Mono'
  },
  'prepared-plate-media-90mm-bi': {
    title: 'Buy Prepared Plate Media 90mm Bi | Chocolate, Sheep Blood, CLED Agar – Microbiano',
    description: 'Order premium 90mm bi-prepared agar plates: Chocolate Agar, Sheep Blood Agar, CLED Agar & more. Sterile, ready-to-use media trusted by clinical and diagnostic labs.',
    image: 'https://www.microbiano.com/assets/images/products/90mm-bi-media.jpg',
    twitterDescription: 'Advanced 90mm biplate media for clinical labs. Blood/Chocolate, Blood/MacConkey combinations. ISO-certified, ready-to-use.',
    schemaName: 'Prepared Plate Media - 90mm Bi-plates'
  },
  'prepared-plate-media-150mm': {
    title: 'Buy Prepared Plate Media 150mm | Simmons Citrate, MacConkey, Haemophilus Agar – Microbiano',
    description: 'Explore 150mm prepared agar plates for microbiology labs. Shop Simmons Citrate Slants, MacConkey with Crystal Violet, and Haemophilus Test Agar. ISO-certified, sterile, and ready-to-use.',
    image: 'https://www.microbiano.com/assets/images/products/150mm-media.jpg',
    twitterDescription: '150mm agar plates for AST testing. Mueller Hinton, Blood Agar & more. Clinical-grade, sterile, ready-to-use.',
    schemaName: 'Prepared Plate Media - 150mm'
  },
  'prepared-tube-media': {
    title: 'Buy Prepared Tube Media | TSI, Kligler, Urea, BHI Slants – Microbiano',
    description: 'Shop sterile, ready-to-use prepared tube media at Microbiano. Available: Triple Sugar Iron Agar, Kligler Iron Agar, BHI, Sabouraud Dextrose, Urea Agar, Nutrient Agar slants. Ideal for labs & diagnostics.',
    image: 'https://www.microbiano.com/assets/images/products/tube-media.jpg',
    twitterDescription: 'Prepared tube media for microbiology: broths, slants, liquid cultures. Convenient, sterile, ready-to-use.',
    schemaName: 'Prepared Tube Media'
  },
  'prepared-bottle-media': {
    title: 'Buy Prepared Bottle Media | Buffered Peptone Water, Plate Count Agar & More – Microbiano',
    description: 'Order ISO-certified, ready-to-use prepared bottle media from Microbiano. Available: Buffered Peptone Water, Plate Count Agar, Orange Serum Agar, One Broth Salmonella & more. For food & pharma labs',
    image: 'https://www.microbiano.com/assets/images/products/bottle-media.jpg',
    twitterDescription: 'Bulk prepared media in bottles. Liquid media, broths & cultures for high-volume testing. ISO-certified quality.',
    schemaName: 'Prepared Media in Bottles'
  }
};

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const categoryName = categoryMapping[slug];
  const metadata = categoryMetadata[slug];
  
  if (!categoryName || !metadata) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.'
    };
  }

  // Get products for this category
  const categoryProducts = productData.filter(product => product.category === categoryName);
  
  // Generate schema markup for products
  const productItems = categoryProducts.slice(0, 150).map((product, index) => ({
    "@type": "Product",
    "name": product.name,
    "url": `https://www.microbiano.com/product/${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    "brand": {
      "@type": "Brand",
      "name": "Microbiano"
    },
    "productID": product.productCode,
    "description": `${product.name} - ${product.packSize}, Shelf Life: ${product.shelfLife}, Storage: ${product.storageTemp}`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "AED",
      "price": (5.50 + (index * 0.25)).toFixed(2),
      "seller": {
        "@type": "Organization",
        "name": "Microbiano"
      }
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Microbiano"
    }
  }));

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": metadata.schemaName,
    "url": `https://www.microbiano.com/category/${slug}`,
    "description": metadata.description,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Microbiano",
      "url": "https://www.microbiano.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "@id": "https://www.microbiano.com#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.microbiano.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://www.microbiano.com/product"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": metadata.schemaName,
          "item": `https://www.microbiano.com/category/${slug}`
        }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Prepared Media Products",
      "numberOfItems": categoryProducts.length,
      "itemListElement": productItems
    },
    "publisher": {
      "@type": "Organization",
      "name": "Microbiano",
      "url": "https://www.microbiano.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.microbiano.com/images/logo.svg"
      }
    }
  };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: `prepared media, agar plates, microbiology, laboratory supplies, ${categoryName.toLowerCase()}, sterile media, ISO certified`,
    alternates: {
      canonical: `https://microbiano.com/category/${slug}`,
      languages: {
        'en-AE': `https://microbiano.com/category/${slug}`,
        'x-default': `https://microbiano.com/category/${slug}`,
      },
    },
    robots: 'index, follow',
    author: 'Microbiano',
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://microbiano.com/category/${slug}`,
      type: 'website',
      siteName: 'Microbiano',
      images: [
        {
          url: metadata.image,
          width: 1200,
          height: 630,
          alt: `${metadata.schemaName} – Microbiano`,
        }
      ],
      locale: 'en-AE',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.twitterDescription,
      images: [metadata.image],
      site: '@microbiano',
      creator: '@microbiano',
    },
    other: {
      'application/ld+json': JSON.stringify(schemaMarkup, null, 2)
    }
  };
}

const CategoryPage = async ({ params }) => {
  const { slug } = await params;
  const categoryName = categoryMapping[slug];
  const metadata = categoryMetadata[slug];
  
  if (!categoryName || !metadata) {
    return <div>Category not found</div>;
  }

  // Get products for this category for schema markup
  const categoryProducts = productData.filter(product => product.category === categoryName);
  
  // Generate schema markup for products
  const productItems = categoryProducts.slice(0, 10).map((product, index) => ({
    "@type": "Product",
    "name": product.name,
    "url": `https://www.microbiano.com/product/${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    "brand": {
      "@type": "Brand",
      "name": "Microbiano"
    },
    "productID": product.productCode,
    "description": `${product.name} - ${product.packSize}, Shelf Life: ${product.shelfLife}, Storage: ${product.storageTemp}`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "AED",
      "price": (5.50 + (index * 0.25)).toFixed(2),
      "seller": {
        "@type": "Organization",
        "name": "Microbiano"
      }
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Microbiano"
    }
  }));

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": metadata.schemaName,
    "url": `https://www.microbiano.com/category/${slug}`,
    "description": metadata.description,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Microbiano",
      "url": "https://www.microbiano.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "@id": "https://www.microbiano.com#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.microbiano.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://www.microbiano.com/product"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": metadata.schemaName,
          "item": `https://www.microbiano.com/category/${slug}`
        }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Prepared Media Products",
      "numberOfItems": categoryProducts.length,
      "itemListElement": productItems
    },
    "publisher": {
      "@type": "Organization",
      "name": "Microbiano",
      "url": "https://www.microbiano.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.microbiano.com/images/logo.svg"
      }
    }
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup, null, 2)
        }}
      />
      
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
    { slug: 'prepared-plate-media-90mm-bi' },
    { slug: 'prepared-plate-media-150mm' },
    { slug: 'prepared-tube-media' },
    { slug: 'prepared-bottle-media' }
  ];
}
