import SectionLayout from "@/src/common/SectionLayout";
import Introduce from "./sections/IntroduceSection/Introduce";
import Highlight from "./sections/HighlightSection/Highlight";
import BrandFeel from "./sections/BrandFeelSection/BrandFeel";
import Finale from "./sections/FinaleSection/Finale";

const BrandPage = () => {
  return (
    <section className="w-full h-full pt-[120px]">
      <Introduce></Introduce>
      <div className="h-fit flex flex-col gap-15 items-center justify-center">
        <Highlight></Highlight>
        <BrandFeel></BrandFeel>
      </div>
      <Finale></Finale>
    </section>
  );
};

export default BrandPage;
