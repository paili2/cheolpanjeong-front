import SectionLayout from "@/src/common/SectionLayout";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const AuthPage = () => {
  return (
    <section className="w-full h-[100%]">
      <SectionLayout
        maxWidth={"max-w-xl"}
        className="bg-gray-100 px-10 flex flex-col"
      >
        <div className="w-full border rounded-t-lg flex items-center gap-3 p-3">
          <FaUser />
          <div className="w-full">
            <input
              className="outline-none w-full"
              type="text"
              placeholder="아이디"
            />
          </div>
        </div>
        <div className="w-full border-l-1 border-r-1 flex items-center gap-3 p-3">
          <FaLock />
          <div className="w-full">
            <input
              className="outline-none w-full"
              type="text"
              placeholder="비밀번호"
            />
          </div>
        </div>
        <div className="w-full border rounded-b-lg flex items-center gap-3 p-3">
          <IoMdMail />
          <div className="w-full">
            <input
              className="outline-none w-full"
              type="text"
              placeholder="[선택] 이메일주소 (비밀번호 찾기 등 본인 확인용)"
            />
          </div>
        </div>
      </SectionLayout>
    </section>
  );
};

export default AuthPage;
