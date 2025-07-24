"use client";
import Head from 'next/head';
import productData from '@/data/products';

const CategoryMetadata = ({ category, slug }) => {
  // Get products for this category
  const categoryProducts = productData.filter(product => product.category === category);
  
  // Define metadata for each category
  const categoryMetadata = {
    'Prepared plates media 90 MM': {
      title: 'Prepared Plate Media - 90mm Mono | Nutrient, MacConkey, Chocolate Agar',
      description: 'Shop sterile, ready-to-use 90mm mono agar plates: Nutrient Agar, Mannitol Salt Agar, Chocolate Agar & more. Ideal for labs, pharma & food testing.',
      image: 'https://www.microbiano.com/assets/images/products/90mm-mono-media.jpg',
      twitterDescription: 'Explore ISO-certified 90mm mono agar plates. Available: Nutrient Agar, Mannitol Salt, Chocolate Agar & more. Ready-to-use microbiology media.',
      schemaName: 'Prepared Plate Media - 90mm Mono'
    },
    'Prepared bioplates media 90 MM': {
      title: 'Prepared Bioplates Media - 90mm | Blood Agar, Chocolate Combinations',
      description: 'Premium 90mm biplate media combining multiple agars: Blood/Chocolate, Blood/MacConkey, CLED combinations. Perfect for clinical microbiology labs.',
      image: 'https://www.microbiano.com/assets/images/products/90mm-bio-media.jpg',
      twitterDescription: 'Advanced 90mm biplate media for clinical labs. Blood/Chocolate, Blood/MacConkey combinations. ISO-certified, ready-to-use.',
      schemaName: 'Prepared Bioplates Media - 90mm'
    },
    'Prepared plates media 150 MM': {
      title: 'Prepared Plate Media - 150mm | Mueller Hinton, Blood Agar for AST',
      description: 'Large 150mm prepared agar plates for antimicrobial susceptibility testing. Mueller Hinton, Blood Agar, and specialized media for clinical testing.',
      image: 'https://www.microbiano.com/assets/images/products/150mm-media.jpg',
      twitterDescription: '150mm agar plates for AST testing. Mueller Hinton, Blood Agar & more. Clinical-grade, sterile, ready-to-use.',
      schemaName: 'Prepared Plate Media - 150mm'
    },
    'Prepared tube media': {
      title: 'Prepared Tube Media | Broths, Slants & Liquid Media for Microbiology',
      description: 'Complete range of prepared tube media: enrichment broths, slant media, and liquid cultures. Ready-to-use microbiological media in convenient tubes.',
      image: 'https://www.microbiano.com/assets/images/products/tube-media.jpg',
      twitterDescription: 'Prepared tube media for microbiology: broths, slants, liquid cultures. Convenient, sterile, ready-to-use.',
      schemaName: 'Prepared Tube Media'
    },
    'Prepared media in Bottles': {
      title: 'Prepared Media in Bottles | Bulk Liquid Media & Broths',
      description: 'Bulk prepared media in bottles for high-volume testing. Liquid media, enrichment broths, and culture media in convenient bottle formats.',
      image: 'https://www.microbiano.com/assets/images/products/bottle-media.jpg',
      twitterDescription: 'Bulk prepared media in bottles. Liquid media, broths & cultures for high-volume testing. ISO-certified quality.',
      schemaName: 'Prepared Media in Bottles'
    }
  };

  const metadata = categoryMetadata[category];
  if (!metadata) return null;

  // Generate schema markup for products
  const generateProductSchema = () => {
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

    return {
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
  };

  const schemaMarkup = generateProductSchema();

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={`prepared media, agar plates, microbiology, laboratory supplies, ${category.toLowerCase()}, sterile media, ISO certified`} />
      <link rel="canonical" href={`https://www.microbiano.com/category/${slug}`} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={`https://www.microbiano.com/category/${slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Microbiano" />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:image:alt" content={`${metadata.schemaName} – Microbiano`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.twitterDescription} />
      <meta name="twitter:image" content={metadata.image} />
      <meta name="twitter:site" content="@microbiano" />
      <meta name="twitter:creator" content="@microbiano" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Microbiano" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup, null, 2)
        }}
      />
    </Head>
  );
};

export default CategoryMetadata;
