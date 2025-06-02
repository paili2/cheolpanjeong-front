import { ReactNode } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type shortcutButton = {
  onMouseDown?: () => void;
  hoverBg: string;
  className?: string;
  text: string;
  children?: ReactNode;
};

const ShortcutButton = ({
  onMouseDown,
  hoverBg,
  className,
  text,
  children,
}: shortcutButton) => {
  return (
    <button
      onMouseDown={onMouseDown}
      className={`border rounded-4xl px-5 py-2 flex items-center justify-center gap-3 hover:bg-${hoverBg} ${className} hover:text-white hover:cursor-pointer hover:border-transparent transition-all duration-200`}
    >
      {text}
      {children}
    </button>
  );
};

export default ShortcutButton;
