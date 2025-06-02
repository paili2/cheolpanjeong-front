"use client";

import SectionLayout from "@/src/common/SectionLayout";
import CategoryButton from "./subComponents/CategoryButton";
import { useState } from "react";
import MenuCard from "./subComponents/MenuCard";
import ShortcutButton from "@/src/common/components/ShortcutButton";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const menu = [
    { name: "전체" },
    { name: "닭갈비" },
    { name: "볶음밥" },
    { name: "덮밥/사이드" },
    { name: "음료" },
  ];

  return (
    <section>
      <SectionLayout className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-5xl">Menu</h1>
        <ul className="flex gap-5">
          {menu.map((v, i) => {
            return (
              <CategoryButton
                key={i}
                text={v.name}
                mouseClick={activeIndex === i}
                mouseHandle={() => setActiveIndex(i)}
              ></CategoryButton>
            );
          })}
        </ul>
        <div className="grid grid-cols-4 gap-4">
          <MenuCard
            menuName={"계란후라이 딥치즈"}
            src="https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg"
          ></MenuCard>
          <MenuCard
            menuName={"퀸즈랜드 립아이"}
            src="https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg"
          ></MenuCard>
          <MenuCard
            menuName={"리얼 양념치킨"}
            src="https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg"
          ></MenuCard>
          <MenuCard
            menuName={"소이 크런치 치킨"}
            src="https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg"
          ></MenuCard>
        </div>
        <Link href={"/menu"}>
          <ShortcutButton hoverBg="[#FF291E]" text={"더보기"}>
            <FaArrowRightLong />
          </ShortcutButton>
        </Link>
      </SectionLayout>
    </section>
  );
};

export default Menu;
