import BrandSection from "@/src/components/MainPage/sections/BrandSection/BrandSection";
import HeroSliderSection from "@/src/components/MainPage/sections/HeroSliderSection/HeroSliderSection";
import MenuSection from "@/src/components/MainPage/sections/MenuSection/MenuSection";

export default function Home() {
  return (
    <>
      <HeroSliderSection></HeroSliderSection>
      <BrandSection />
      <MenuSection />
    </>
  );
}
