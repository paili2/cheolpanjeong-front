import ShortcutButton from "@/src/common/components/ShortcutButton";
import SectionLayout from "@/src/common/SectionLayout";
import Link from "next/link";

const AdminMain = () => {
  return (
    <section className="h-[100%]">
      <SectionLayout
        paddingTop="pt-0"
        className="flex flex-col items-center justify-center gap-5"
      >
        <h2 className="text-5xl text-center leading-normal">
          철판정 관리자 페이지
        </h2>
        <div className="flex gap-5">
          <Link href={"/admin/join/agree"}>
            <ShortcutButton text="회원가입"></ShortcutButton>
          </Link>
          <Link href={"/admin/login"}>
            <ShortcutButton text="로그인"></ShortcutButton>
          </Link>
        </div>
      </SectionLayout>
    </section>
  );
};

export default AdminMain;
