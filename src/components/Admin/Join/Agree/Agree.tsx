import SectionLayout from "@/src/common/SectionLayout";
import Checker from "./components/Checker";
import TermsAgreement from "./components/TermsAgreement";

const Agree = () => {
  return (
    <section className="w-full h-[100%]">
      <SectionLayout
        maxWidth={"max-w-xl"}
        className="bg-gray-300 px-10 flex flex-col gap-3"
      >
        <div className="flex items-center gap-3">
          <Checker />
          <h3 className="font-bold text-lg">전체 동의하기</h3>
        </div>
        <p className="text-sm">
          실명 인증된 아이디로 가입, 위치기반서비스 이용약관(선택), 이벤트・혜택
          정보 수신(선택) 동의를 포함합니다.
        </p>
        <TermsAgreement
          title="이용약관"
          description="dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
        />
        <button className="w-full bg-[#FF291E] py-4 border-none rounded-lg text-white font-bold">
          다음
        </button>
      </SectionLayout>
    </section>
  );
};

export default Agree;
