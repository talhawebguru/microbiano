import Card from "./Components/home/Card";
import AboutUsSection from "./Components/common/AboutUsSection";
import Vision from "./Components/common/Vision";
import Banner from "./Components/common/Banner";
import SliderHero from "./Components/home/SliderHero";
// import ProductSection from "./Components/home/ProductSection";

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
