import SectionLayout from "@/src/common/SectionLayout";

const Finale = () => {
  return (
    <section className="w-full h-full bg-[#FFE68C]">
      <SectionLayout
        paddingTop="0"
        height="h-fit"
        className="flex flex-col justify-center items-center py-[200px] gap-10"
      >
        <h3 className="text-5xl text-white font-bold">
          🐔 닭갈비, 이제 철판정으로!
        </h3>
        <p className="font-bold text-white">
          퓨전 토핑 + 철판 볶음밥 + 덮밥 = 든든한 행복 레시피 💥
        </p>
      </SectionLayout>
    </section>
  );
};

export default Finale;
