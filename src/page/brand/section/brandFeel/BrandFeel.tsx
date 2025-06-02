"use client";

import SectionLayout from "@/src/common/SectionLayout";
import Image from "next/image";
import { easeIn, easeInOut, easeOut, motion } from "motion/react";

const BrandFeel = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.7,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const innerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <SectionLayout
      paddingTop="pt-0"
      height="h-fit"
      className="flex flex-col items-center justify-center pb-[200px]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex items-center justify-center gap-15"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-[300px] h-[300px] relative flex"
        >
          <Image
            className="w-full h-full object-center"
            src="https://www.isaac-toast.co.kr/admin/data/banner/story7_2307050957075.jpg"
            alt=""
            fill
            quality={100}
          ></Image>
        </motion.div>
        <motion.div className="flex flex-col items-end gap-3">
          <motion.span variants={innerVariants} className="text-xl">
            🚩 오늘도 당신의 하루에 정(情) 한 스푼,
          </motion.span>
          <motion.span variants={innerVariants} className="text-xl  mb-7">
            철판 위의 따뜻한 이야기,
          </motion.span>
          <motion.span variants={innerVariants} className="text-xl">
            철판정에서 시작됩니다.
          </motion.span>
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
};

export default BrandFeel;
