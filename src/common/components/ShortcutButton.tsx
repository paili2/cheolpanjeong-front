import { ReactNode } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type shortcutButton = {
  onMouseDown?: () => void;
  rounded?: string;
  className?: string;
  text: string;
  children?: ReactNode;
};

const ShortcutButton = ({
  onMouseDown,
  rounded = "4xl",
  className,
  text,
  children,
}: shortcutButton) => {
  return (
    <button
      onMouseDown={onMouseDown}
      className={`border rounded-${rounded} px-5 py-2 flex items-center justify-center gap-3 hover:bg-[#FF291E]
      } ${className} hover:text-white hover:cursor-pointer hover:border-transparent transition-all duration-200`}
    >
      {text}
      {children}
    </button>
  );
};

export default ShortcutButton;
