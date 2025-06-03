import SectionLayout from "@/src/common/SectionLayout";

const Introduce = () => {
  return (
    <div className="w-full h-screen bg-[url('https://www.isaac-toast.co.kr/admin/data/banner/story1_2501171037505.jpg')] bg-no-repeat bg-cover bg-center">
      <SectionLayout
        paddingTop="pt-0"
        className="flex flex-col gap-15 items-center justify-center"
      >
        <strong className="text-5xl text-white">철판에 정을 담다 :)</strong>
        <strong className="text-7xl text-white">
          “철판 위에 정(情)을 볶습니다”
        </strong>
        <p className="text-white text-3xl">[철판정 퓨전 닭갈비 & 철판볶음밥]</p>
        <p className="text-center text-lg text-white">
          식상한 닭갈비는 이제 그만! <br />
          철판정은 전통 닭갈비에 창의적인 토핑을 더해, <br /> 누구나 맛있게 즐길
          수 있는 퓨전 철판 요리를 선보입니다.
        </p>
      </SectionLayout>
    </div>
  );
};

export default Introduce;
