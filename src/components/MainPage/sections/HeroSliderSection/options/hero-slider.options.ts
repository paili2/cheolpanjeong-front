import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const swiperOption = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  modules: [Autoplay, Pagination, Navigation],
};
