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
    title: "Microbiano - Premium Microbiological Media & Laboratory Solutions",
    description: "Leading supplier of high-quality microbiological culture media, agar plates, and laboratory solutions in UAE. ISO-certified products for clinical, pharmaceutical, and research applications.",
    url: "https://microbiano.com/",
    type: "website",
    siteName: "Microbiano",
  },
  twitter: {
    card: "summary_large_image",
    title: "Microbiano - Premium Microbiological Media & Laboratory Solutions",
    description: "Leading supplier of high-quality microbiological culture media, agar plates, and laboratory solutions in UAE. ISO-certified products for clinical, pharmaceutical, and research applications.",
    site: "@microbiano",
  },
};

export default function Home() {
  return (
    <>
        <SliderHero />
        <Card />
        {/* <ProductSection/> */}
        <AboutUsSection />
        <Vision />
        <Banner />
    </>
  );
}
