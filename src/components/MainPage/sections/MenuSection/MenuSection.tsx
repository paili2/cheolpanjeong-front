"use client";

import SectionLayout from "@/src/common/SectionLayout";

import { useState } from "react";

import ShortcutButton from "@/src/common/components/ShortcutButton";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import CategoryButton from "./components/CategoryButton";
import MenuCard from "./components/MenuCard";
import { menu } from "@/src/components/MenuPage/constants/menu.constants";
import { category } from "@/src/components/MenuPage/constants/category.constants";

const MenuSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section>
      <SectionLayout className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-5xl">Menu</h1>
        <ul className="flex gap-5">
          {category.map((v, i) => {
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
          {menu.slice(0, 4).map((v, i) => (
            <MenuCard key={i} menuName={v.menuName} src={v.src}></MenuCard>
          ))}
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

export default MenuSection;
