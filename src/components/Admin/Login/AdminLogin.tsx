import ShortcutButton from "@/src/common/components/ShortcutButton";
import SectionLayout from "@/src/common/SectionLayout";
import Link from "next/link";

const AdminLogin = () => {
  return (
    <section className="h-screen">
      <SectionLayout
        paddingTop="0"
        className="flex flex-col justify-center items-center gap-10"
      >
        <div className="flex flex-col justify-center items-center gap-20">
          <h2 className="text-5xl font-bold">관리자 로그인</h2>
          <form
            className="h-fit flex justify-center items-center gap-5"
            action=""
          >
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 justify-center items-center">
                <label className="w-16 font-bold text-end" htmlFor="">
                  아이디
                </label>
                <div className="w-[200px] border rounded-sm px-2 py-1">
                  <input className="w-full outline-0" type="text" />
                </div>
              </div>
              <div className="flex gap-5 justify-center items-center">
                <label className="w-16 font-bold text-end" htmlFor="">
                  비밀번호
                </label>
                <div className="w-[200px] border rounded-sm px-2 py-1">
                  <input className="w-full outline-0" type="text" />
                </div>
              </div>
            </div>
            <button className="h-full font-bold border rounded-lg px-7 cursor-pointer hover:bg-[#FF291E] hover:border-transparent hover:text-white">
              로그인
            </button>
          </form>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <Link href={"/admin/login"}>
            <span className="text-gray-600 hover:text-black">아이디 찾기</span>
          </Link>
          <Link href={"/admin/login"}>
            <span className="text-gray-600 hover:text-black">
              비밀번호 찾기
            </span>
          </Link>
          <Link href={"/admin/login"}>
            <span className="text-gray-600 hover:text-black">회원가입</span>
          </Link>
        </div>
      </SectionLayout>
    </section>
  );
};

export default AdminLogin;
