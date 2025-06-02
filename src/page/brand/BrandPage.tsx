import SectionLayout from "@/src/common/SectionLayout";
import Introduce from "./section/introduce/Introduce";
import Highlight from "./section/highlight/Highlight";
import BrandFeel from "./section/brandFeel/BrandFeel";
import Finale from "./section/finale/Finale";

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
