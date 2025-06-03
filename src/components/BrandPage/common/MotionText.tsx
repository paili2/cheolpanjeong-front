import { motion, Variants } from "motion/react";

type MotionTextProps = { variants: Variants; text: string };
const MotionText = ({ variants, text }: MotionTextProps) => {
  return (
    <motion.span className="text-lg" variants={variants}>
      {text}
    </motion.span>
  );
};

export default MotionText;
