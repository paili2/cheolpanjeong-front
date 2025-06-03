type categoryTabProps = {
  onMouseDown: () => void;
  mouseClick: boolean;
  text: string;
};

const CategoryTab = ({ onMouseDown, mouseClick, text }: categoryTabProps) => {
  return (
    <button
      onMouseDown={onMouseDown}
      className={`px-5 py-2 font-bold text-2xl hover:cursor-pointer  ${
        mouseClick
          ? "border-b-4 border-[#FF291E] text-[#FF291E] "
          : "border-transparent "
      }`}
    >
      {text}
    </button>
  );
};

export default CategoryTab;
