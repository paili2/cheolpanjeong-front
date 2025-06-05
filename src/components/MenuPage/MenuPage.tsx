"use client";

import SectionLayout from "@/src/common/SectionLayout";
import MenuCard from "@/src/components/MainPage/sections/MenuSection/components/MenuCard";
import CategoryTab from "./components/CategoryTab";
import { useState } from "react";
import { menu } from "./constants/menu.constants";
import { category } from "./constants/category.constants";

const MenuPage = () => {
  const [index, setIndex] = useState<number | null>(0);

  return (
    <section>
      <SectionLayout
        height="h-fit"
        paddingTop="pt-[200px]"
        className="flex flex-col gap-15 items-center justify-center pb-[100px]"
      >
        <h2 className="text-5xl font-bold">메뉴</h2>
        <div className="flex gap-20">
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
        <div className="grid grid-cols-4 gap-10">
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
