"use client";

import SectionLayout from "@/src/common/SectionLayout";
import { motion } from "motion/react";
import Image from "next/image";

const Highlight = () => {
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
      className="flex flex-col items-center justify-center"
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
          className="w-[500px] h-[300px] relative flex"
        >
          <Image
            className="w-full h-full object-center"
            src="https://www.isaac-toast.co.kr/admin/data/banner/story4_2307071044599.png"
            alt=""
            fill
            quality={100}
          ></Image>
        </motion.div>
        <motion.div className="flex flex-col items-end gap-3">
          <motion.span variants={innerVariants} className="text-xl">
            우삼겹, 페퍼로니, 에그마요, 포테이토…
          </motion.span>
          <motion.span variants={innerVariants} className="text-xl  mb-7">
            익숙한 재료의 색다른 조합으로,
          </motion.span>
          <motion.span variants={innerVariants} className="text-xl">
            한 번 맛보면 누구나 기억하는
          </motion.span>
          <motion.span variants={innerVariants} className="text-xl mb-7">
            나만의 닭갈비가 완성됩니다.
          </motion.span>
          <motion.span variants={innerVariants} className="text-xl ">
            불향 가득한 철판 볶음밥부터
          </motion.span>
          <motion.span variants={innerVariants} className="text-xl mb-7">
            든든한 한 끼 덮밥까지,
          </motion.span>
          <motion.span variants={innerVariants} className="text-xl">
            철판정만의 노하우로 볶아낸 든든한 맛!
          </motion.span>
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
};

export default Highlight;
