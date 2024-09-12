import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Portfolio1() {
  const portfolioSlide = {
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
      nextEl: ".portfolio-prev1",
      prevEl: ".portfolio-next1",
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
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <>
      <div className="portfolio-section pt-120 pb-120">
        <img
          src="assets/images/bg/section-bg1.png"
          alt="image"
          className="img-fluid section-bg-top"
        />
        <img
          src="assets/images/bg/section-bg-bttm.png"
          alt="image"
          className="img-fluid section-bg-bottom"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-title primary5">
                <span>-Portfolio-</span>
                <h3>Best Work Showcase</h3>
                <p className="para">
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="row position-relative justify-content-center">
            <Swiper
              {...portfolioSlide}
              className="swiper portfolio-slider1 swiper-fix"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div
                    className="portfolio-item1 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <div className="portfolio-img">
                      <img alt="image" src="assets/images/bg/portfolio11.png" />
                    </div>
                    <div className="portfolio-content">
                      <span>Website development</span>
                      <h4>
                        <Link href="https://www.copilottravel.com/">Copiot Travel</Link>
                      </h4>
                      <>
                        <Link href="https://www.copilottravel.com/" className="text-btn">
                          Live Preview
                        </Link>
                        <svg
                          width={18}
                          height={10}
                          viewBox="0 0 18 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z" />
                          <path d="M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z" />
                        </svg>
                      </>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="portfolio-item1 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.4s"
                  >
                    <div className="portfolio-img">
                      <img alt="image" src="assets/images/bg/portfolio12.png" />
                    </div>
                    <div className="portfolio-content">
                      <span>Website development</span>
                      <h4>
                        <Link href="https://simoconnect.com/">SimoConnect</Link>
                      </h4>
                      <>
                        <Link href="https://simoconnect.com/" className="text-btn">
                          Live Preview
                        </Link>
                        <svg
                          width={18}
                          height={10}
                          viewBox="0 0 18 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z" />
                          <path d="M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z" />
                        </svg>
                      </>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="portfolio-item1 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.6s"
                  >
                    <div className="portfolio-img">
                      <img alt="image" src="assets/images/bg/portfolio13.png" />
                    </div>
                    <div className="portfolio-content">
                      <span>Website development</span>
                      <h4>
                        <Link href="https://www.integratedtravelcomponent.com/">
                          Integrated Travel Component
                        </Link>
                      </h4>
                      <>
                        <Link href="https://www.integratedtravelcomponent.com/" className="text-btn">
                          Live Preview
                        </Link>
                        <svg
                          width={18}
                          height={10}
                          viewBox="0 0 18 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z" />
                          <path d="M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z" />
                        </svg>
                      </>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-bottom d-flex justify-content-between align-items-center">
              <div className="swiper-pagination style-3 d-block" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio1;
