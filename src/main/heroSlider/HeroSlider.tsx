"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import Image from "next/image";
import SliderImage from "./subComponents/SliderImage";

const HeroSlider = () => {
  return (
    <section className="w-full h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderImage src="https://www.outback.co.kr/upload/mainVisual/20250314/20250314110259429046.png"></SliderImage>
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage src="https://www.outback.co.kr/upload/mainVisual/20240714/20240714215424274322.png"></SliderImage>
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage src="https://www.outback.co.kr/upload/mainVisual/20250314/20250314110653975050.png"></SliderImage>
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage src="https://www.outback.co.kr/upload/mainVisual/20250314/20250314110005847042.png"></SliderImage>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
