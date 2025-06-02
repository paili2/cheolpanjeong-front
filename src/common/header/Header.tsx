"use client";

import { motion, useScroll, useTransform } from "motion/react";
import MenuButton from "./subComponents/MenuButton";
import Link from "next/link";

const Header = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 1], [1, 0]);
  return (
    <motion.header
      style={{ opacity }}
      className="fixed top-0 w-full h-[120px] py-3 bg-black z-50"
    >
      <nav className="w-full max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-5xl font-bold">철판정</h1>
        </Link>
        <ul className="flex gap-10">
          <MenuButton link={"/brand"} menu={"BRAND"}></MenuButton>
          <MenuButton link={"/menu"} menu={"MENU"}></MenuButton>
          <MenuButton link={"/notice"} menu={"NOTICE"}></MenuButton>
          <MenuButton link={"/event"} menu={"EVENT"}></MenuButton>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
