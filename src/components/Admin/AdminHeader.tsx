import ShortcutButton from "@/src/common/components/ShortcutButton";
import Logo from "@/src/common/Logo";
import SectionLayout from "@/src/common/SectionLayout";
import Link from "next/link";

const AdminHeader = () => {
  return (
    <header className="fixed top-0 z-50 w-full h-[120px] bg-[#FF291E] shadow-sm  px-6">
      <SectionLayout
        height="h-full"
        paddingTop="0px"
        className="flex items-center justify-between"
      >
        <div className="text-2xl text-white flex justify-center items-center gap-3">
          <Logo /> <span>관리자 페이지</span>
        </div>

        <div className="flex items-center space-x-4">
          {/* <Link href={"/admin/login"}>
            <ShortcutButton
              className="border-none text-white"
              text="로그아웃"
            ></ShortcutButton>
          </Link> */}
        </div>
      </SectionLayout>
    </header>
  );
};

export default AdminHeader;
