import SectionLayout from "@/src/common/SectionLayout";
import ShortcutButton from "../../common/components/ShortcutButton";

const BrandStory = () => {
  return (
    <section>
      <SectionLayout className="flex flex-col justify-center items-center gap-5">
        <strong className="text-5xl">Enjoy Sweet Day</strong>
        <p>이삭토스트와 함께한 달콤한 기억이 있나요?</p>
        <p className="text-center">
          한 손에 담긴 든든한 한 끼, 한 입에 퍼지는 미소
          <br /> 오늘도 한 손에 담긴 따듯한 토스트로 마음을 전하고 나누며
          고객님을 맞이할 준비를 합니다. <br /> 어김없이 따듯한 토스트가
          기다리는 곳, 이삭토스트 입니다.
        </p>
        <ShortcutButton text={"브랜드 스토리"}></ShortcutButton>
      </SectionLayout>
    </section>
  );
};

export default BrandStory;
