import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Portfolio2() {
  const protfolio2slider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 20,
    autoplay: true,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".portfolio-prev2",
      prevEl: ".portfolio-next2",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
        navigation: false,
      },
      480: {
        slidesPerView: 1,
        navigation: false,
      },
      768: {
        slidesPerView: 2,
        navigation: false,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <>
      <div className="portfolio-section pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title2 primary1">
                <span>-Portfolio-</span>
                <div>
                  <h3>Look Our Recent Work</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row position-relative justify-content-center">
            <Swiper
              {...protfolio2slider}
              className="swiper portfolio-slider2 swiper-fix"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div
                    className="portfolio-item1 style-2 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <div className="portfolio-img">
                      <img alt="image" src="assets/images/bg/portfolio21.png" />
                    </div>
                    <div className="portfolio-content">
                      <span>App Design</span>
                      <h4>
                        <Link href="/project-details">
                          Pocket-Sized Notebooks Hold
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="portfolio-item1 style-2 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.4s"
                  >
                    <div className="portfolio-img">
                      <img alt="image" src="assets/images/bg/portfolio22.png" />
                    </div>
                    <div className="portfolio-content">
                      <span>Mockup</span>
                      <h4>
                        <Link href="/project-details">
                          A4 Size Flyer Mockup Design
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="portfolio-item1 style-2 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.6s"
                  >
                    <div className="portfolio-img">
                      <img alt="image" src="assets/images/bg/portfolio23.png" />
                    </div>
                    <div className="portfolio-content">
                      <span>Ui Illustration</span>
                      <h4>
                        <Link href="/project-details">
                          Ui/Ux Illustration Design..
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="portfolio-item1 style-2 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.8s"
                  >
                    <div className="portfolio-img">
                      <img alt="image" src="assets/images/bg/portfolio24.png" />
                    </div>
                    <div className="portfolio-content">
                      <span>App Design</span>
                      <h4>
                        <Link href="/project-details">
                          Pocket-Sized Notebooks Hold
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-bottom d-flex justify-content-between align-items-center">
              <div className="swiper-pagination style-2 d-lg-block d-none" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio2;
