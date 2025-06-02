import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-[250px] border py-10">
      <div className="w-full max-w-7xl mx-auto h-full grid grid-cols-3">
        <h1 className="text-5xl font-bold">철판정</h1>

        <div className="flex flex-col gap-1">
          <span>사업자등록번호 : 0000000</span>
          <span>대표: 김철판</span>
          <span>전화: 0507-1487-0959</span>
        </div>

        <div>
          <Link href="">
            <FaInstagram className="text-3xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
