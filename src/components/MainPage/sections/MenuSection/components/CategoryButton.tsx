import { useState } from "react";

type categoryButton = {
  text: string;
  mouseClick: boolean;
  mouseHandle: () => void;
};

const CategoryButton = ({ mouseClick, mouseHandle, text }: categoryButton) => {
  return (
    <button
      onMouseDown={mouseHandle}
      className={`${
        mouseClick
          ? "border-none bg-[#FF291E] rounded-4xl"
          : "hover:border-transparent"
      } px-5 py-2 flex items-center justify-center gap-3 text-gray-200 hover:text-white hover:cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default CategoryButton;
