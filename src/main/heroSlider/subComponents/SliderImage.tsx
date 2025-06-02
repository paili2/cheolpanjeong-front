import Image from "next/image";
type sliderImageProps = { src: string };

const SliderImage = ({ src }: sliderImageProps) => {
  return (
    <div className="w-[500px] h-[500px]">
      <Image
        className="w-full h-full object-cover"
        src={src}
        alt=""
        fill
        quality={100}
      ></Image>
    </div>
  );
};

export default SliderImage;
