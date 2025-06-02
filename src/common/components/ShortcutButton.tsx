import { FaArrowRightLong } from "react-icons/fa6";

type shortcutButton = {
  text: string;
};

const ShortcutButton = ({ text }: shortcutButton) => {
  return (
    <button className="border rounded-4xl px-5 py-2 flex items-center justify-center gap-3 hover:bg-[#FF291E] hover:cursor-pointer hover:border-transparent transition-all duration-200">
      {text}
      <FaArrowRightLong />
    </button>
  );
};

export default ShortcutButton;
