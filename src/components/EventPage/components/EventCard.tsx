import Image from "next/image";

const EventCard = () => {
  return (
    <div className="w-full h-fit relative border-none rounded-4xl flex flex-col gap-3">
      <div className="w-full h-[400px] relative border-none rounded-4xl">
        <Image
          className="w-full h-full object-cover border-none rounded-4xl"
          src="https://www.isaac-toast.co.kr/admin/data/bbs/event/S2406100934074_1.jpg"
          alt=""
          fill
          quality={100}
        ></Image>
      </div>
      <strong>[프로모션] 우리가 함께한 따듯한 봄, 1차 오픈!</strong>
      <div className="flex items-center gap-3">
        <span className="border-none bg-black text-white text-sm px-5 py-2 rounded-4xl">
          종료
        </span>
        <p className="text-xs text-gray-500">2025-04-04 ~ 2025-04-30</p>
      </div>
    </div>
  );
};

export default EventCard;
