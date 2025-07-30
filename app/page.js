import Card from "./Components/home/Card";
import AboutUsSection from "./Components/common/AboutUsSection";
import Vision from "./Components/common/Vision";
import Banner from "./Components/common/Banner";
import SliderHero from "./Components/home/SliderHero";

export const metadata = {
  title: "Top Supplier of Culture Media & Microbiological Products",
  description: "Microbiano, located in KEZAD, Abu Dhabi, UAE, is a top supplier of premium culture media and microbiological products across Dubai, Sharjah, Ajman, Qatar, Saudi Arabia, Oman, Bahrain, and the GCC.",
  canonical: "https://microbiano.com/",
  robots: "index, follow",
  openGraph: {
    title: "Top Supplier of Culture Media & Microbiological Products",
    description: "Microbiano, located in KEZAD, Abu Dhabi, UAE, is a top supplier of premium culture media and microbiological products across Dubai, Sharjah, Ajman, Qatar, Saudi Arabia, Oman, Bahrain, and the GCC.",
    url: "https://microbiano.com/",
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
    title: "Top Supplier of Culture Media & Microbiological Products",
    description: "Microbiano, located in KEZAD, Abu Dhabi, UAE, is a top supplier of premium culture media and microbiological products across Dubai, Sharjah, Ajman, Qatar, Saudi Arabia, Oman, Bahrain, and the GCC.",
    site: "@microbiano",
    image: "https://microbiano.com/_next/static/media/hero.191acaeb.svg"
  },
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://microbiano.com/#website",
        "url": "https://microbiano.com/",
        "name": "Microbiano",
        "description": "Microbiano, located in KEZAD, Abu Dhabi, UAE, is a top supplier of premium culture media and microbiological products across Dubai, Sharjah, Ajman, Qatar, Saudi Arabia, Oman, Bahrain, and the GCC.",
        "inLanguage": "en-AE",
        "publisher": {
          "@id": "https://microbiano.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://microbiano.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://microbiano.com/#organization",
        "name": "Microbiano",
        "url": "https://microbiano.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://microbiano.com/_next/static/media/logo.4a12fe82.svg"
        },
        "sameAs": [],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AE"
        }
      }
    ]
  };

  return (
    <>
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData, null, 2)
          }}
        />
        <SliderHero />
        <Card />
        <AboutUsSection />
        <Vision />
        <Banner />
    </>
  );
}
