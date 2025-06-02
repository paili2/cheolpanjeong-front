import BrandStory from "@/src/main/brand/BrandStrory";
import HeroSlider from "@/src/main/heroSlider/HeroSlider";
import Menu from "@/src/main/menu/Menu";

export default function Home() {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <BrandStory></BrandStory>
      <Menu></Menu>
    </div>
  );
}
