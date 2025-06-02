import Image from "next/image";

type menuCardProps = { src: string; menuName: string };

const MenuCard = ({ src, menuName }: menuCardProps) => {
  return (
    <div className="w-[300px] h-[300px] border rounded-xl flex flex-col">
      <div className="w-full h-2/3 relative border-none rounded-t-xl">
        <Image
          className="object-cover border-none rounded-t-xl absolute"
          src={src}
          alt=""
          fill
          quality={100}
        ></Image>
      </div>
      <div className="h-1/3 flex flex-col justify-center items-center">
        <strong className="text-lg">{menuName}</strong>
        <span>5,000원</span>
      </div>
    </div>
  );
};

export default MenuCard;
