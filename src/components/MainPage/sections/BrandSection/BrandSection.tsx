import SectionLayout from "@/src/common/SectionLayout";

import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import ShortcutButton from "@/src/common/components/ShortcutButton";

const BrandSection = () => {
  return (
    <section>
      <SectionLayout className="flex flex-col justify-center items-center gap-5">
        <strong className="text-5xl text-white">
          “철판 위에 정(情)을 볶습니다”
        </strong>
        <p className="text-white text-3xl"></p>
        <p className="text-center text-lg text-white"></p>

        <strong className="text-3xl">SIZZLING JOY CHEOLPANJEONG</strong>
        <p>오늘도 따듯하고 든든한, 철판정</p>
        <p className="text-center">
          매콤달콤 우삼겹닭갈비와 바삭한 철판볶음밥의 불 맛이,
          <br /> 오늘도 철판 위에서 특별한 추억을 선물합니다 :)
        </p>
        <Link href={"/brand"}>
          <ShortcutButton text={"브랜드 스토리"}>
            <FaArrowRightLong />
          </ShortcutButton>
        </Link>
      </SectionLayout>
    </section>
  );
};

export default BrandSection;
