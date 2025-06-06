"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Checker = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <FaCheck
      onClick={() => setIsChecked((prev) => !prev)}
      className={`font-bold text-lg ${
        isChecked ? "text-[#FF291E]" : "text-gray-500"
      }`}
    />
  );
};

export default Checker;
