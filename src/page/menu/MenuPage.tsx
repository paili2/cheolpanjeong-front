"use client";

import SectionLayout from "@/src/common/SectionLayout";
import MenuCard from "@/src/main/menu/subComponents/MenuCard";
import CategoryTab from "./subcomponents/CategoryTab";
import { useState } from "react";

const MenuPage = () => {
  const [index, setIndex] = useState<number | null>(null);
  const menu = [
    {
      menuName: "퀸즈랜드 립아이",
      src: "https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg",
    },
    {
      menuName: "달링 포인트 스트립",
      src: "https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg",
    },
    {
      menuName: "소이 크런치 치킨",
      src: "https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg",
    },
    {
      menuName: "리얼 양념치킨",
      src: "https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg",
    },
    {
      menuName: "계란후라이 스페셜",
      src: "https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg",
    },
    {
      menuName: "계란후라이 딥치즈",
      src: "https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg",
    },
    {
      menuName: "퀸즈랜드 립아이",
      src: "https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg",
    },
    {
      menuName: "달링 포인트 스트립",
      src: "https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg",
    },
    {
      menuName: "소이 크런치 치킨",
      src: "https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg",
    },
    {
      menuName: "리얼 양념치킨",
      src: "https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg",
    },
    {
      menuName: "계란후라이 스페셜",
      src: "https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg",
    },
    {
      menuName: "계란후라이 딥치즈",
      src: "https://www.outback.co.kr/upload/product/20240415/20240415012246748189.jpeg",
    },
  ];

  const category = [
    { name: "닭갈비" },
    { name: "볶음밥" },
    { name: "덮밥/사이드" },
    { name: "음료" },
  ];

  return (
    <section>
      <SectionLayout
        height="h-fit"
        paddingTop="pt-[200px]"
        className="flex flex-col gap-15 items-center justify-center"
      >
        <h1 className="text-7xl font-bold">메뉴</h1>
        <div className="flex gap-7">
          {category.map((v, i) => {
            if (i === index) {
              console.log("하이");
            }
            return (
              <CategoryTab
                key={i}
                onMouseDown={() => setIndex(i)}
                mouseClick={i === index}
                text={v.name}
              ></CategoryTab>
            );
          })}
        </div>

        <div className="grid grid-cols-4 gap-4">
          {menu.map((v, i) => {
            return (
              <MenuCard key={i} src={v.src} menuName={v.menuName}></MenuCard>
            );
          })}
        </div>
      </SectionLayout>
    </section>
  );
};

export default MenuPage;
