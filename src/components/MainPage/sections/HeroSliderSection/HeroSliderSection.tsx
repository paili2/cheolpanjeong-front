"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import SliderImage from "./components/SliderImage";
import { swiperOption } from "./options/hero-slider.options";
import { sliderImage } from "./constants/hero-slider.constants";

const HeroSliderSection = () => {
  return (
    <section className="w-full h-screen">
      <Swiper {...swiperOption} className="mySwiper">
        {sliderImage.map((img, i) => (
          <SwiperSlide>
            <SliderImage key={i} src={img}></SliderImage>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSliderSection;
