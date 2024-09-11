import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Sponsoree5() {
  const partnerSlider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    roundLengths: true,
    navigation: {
      nextEl: ".sponsor-prev1",
      prevEl: ".sponsor-next1",
    },

    breakpoints: {
      380: {
        slidesPerView: 2,
      },
      530: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
      1400: {
        slidesPerView: 7,
      },
    },
  };
  return (
    <>
      <div className="sponsor-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center position-relative">
            <Swiper
              {...partnerSlider}
              className="swiper sponsor-slider swiper-fix wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src="assets/images/bg/sponsor1.png" alt="image" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src="assets/images/bg/sponsor2.png" alt="image" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src="assets/images/bg/sponsor3.png" alt="image" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src="assets/images/bg/sponsor5.png" alt="image" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src="assets/images/bg/sponsor6.png" alt="image" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src="assets/images/bg/sponsor4.png" alt="image" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src="assets/images/bg/sponsor3.png" alt="image" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <a href="#" className="single-sponsor ">
                    <img src="assets/images/bg/sponsor5.png" alt="image" />
                  </a>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsoree5;
