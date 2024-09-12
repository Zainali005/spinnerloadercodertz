import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Portfolio5() {
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
      <div className="portfolio-section5 position-relative pt-120 pb-120">
        <img
          src="assets/images/bg/rectangle-dot.svg"
          className="rectangle-dot1"
          alt="image"
        />
        <img
          src="assets/images/bg/rectangle-dot.svg"
          className="rectangle-dot2"
          alt="image"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="section-title3 primary4 text-cener">
                <span>-Our Project-</span>
                <h3>Best Work Showcase</h3>
                <p>
                  Get the most of reduction in your teams operating costs for
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
                    className="portfolio-item1 style-4 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <div className="portfolio-img">
                      <img alt="image" src="assets/images/bg/portfolio11.png" />
                    </div>
                    <div className="portfolio-content">
                      <span>App Design</span>
                      <h4>
                        <Link href="/">
                          Pocket-Sized Phone Hold
                        </Link>
                      </h4>
                      <>
                        <Link href="/" className="text-btn">
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
                    className="portfolio-item1 style-4 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.4s"
                  >
                    <div className="portfolio-img">
                      <img alt="image" src="assets/images/bg/portfolio12.png" />
                    </div>
                    <div className="portfolio-content">
                      <span>Mockup</span>
                      <h4>
                        <Link href="/">
                          A4 Size Flyer Mockup Design
                        </Link>
                      </h4>
                      <>
                        <Link href="/" className="text-btn">
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
                    className="portfolio-item1 style-4 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.6s"
                  >
                    <div className="portfolio-img">
                      <img alt="image" src="assets/images/bg/portfolio13.png" />
                    </div>
                    <div className="portfolio-content">
                      <span>Ui Illustration</span>
                      <h4>
                        <Link href="/">
                          Ui/Ux Illustration Design..
                        </Link>
                      </h4>
                      <>
                        <Link href="/" className="text-btn">
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
                    className="portfolio-item1 style-4 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.8s"
                  >
                    <div className="portfolio-img">
                      <img alt="image" src="assets/images/bg/portfolio12.png" />
                    </div>
                    <div className="portfolio-content">
                      <span>App Design</span>
                      <h4>
                        <Link href="/">
                          Pocket-Sized Notebooks Hold
                        </Link>
                      </h4>
                      <>
                        <Link href="/" className="text-btn">
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
            <div className="slider-arrows text-center d-lg-flex d-none  justify-content-between">
              <div
                className="portfolio-prev1 swiper-prev-arrow style-2"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <svg
                  width={46}
                  height={46}
                  viewBox="0 0 46 46"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={23} cy={23} r="22.25" strokeWidth="1.5" />
                  <path d="M20 27.573V23V18.427C20 18.2574 19.8022 18.1648 19.672 18.2734L14 23L19.672 27.7266C19.8022 27.8352 20 27.7426 20 27.573Z" />
                  <path d="M32 23.5C32.2761 23.5 32.5 23.2761 32.5 23C32.5 22.7239 32.2761 22.5 32 22.5V23.5ZM19.672 27.7266L19.9921 27.3425V27.3425L19.672 27.7266ZM14 23L13.6799 22.6159L13.219 23L13.6799 23.3841L14 23ZM19.672 18.2734L19.3519 17.8893L19.3519 17.8893L19.672 18.2734ZM32 22.5H20V23.5H32V22.5ZM19.5 23V27.573H20.5V23H19.5ZM19.9921 27.3425L14.3201 22.6159L13.6799 23.3841L19.3519 28.1107L19.9921 27.3425ZM14.3201 23.3841L19.9921 18.6575L19.3519 17.8893L13.6799 22.6159L14.3201 23.3841ZM19.5 18.427V23H20.5V18.427H19.5ZM19.9921 18.6575C19.7967 18.8203 19.5 18.6814 19.5 18.427H20.5C20.5 17.8335 19.8078 17.5093 19.3519 17.8893L19.9921 18.6575ZM19.5 27.573C19.5 27.3186 19.7967 27.1797 19.9921 27.3425L19.3519 28.1107C19.8078 28.4907 20.5 28.1665 20.5 27.573H19.5Z" />
                </svg>
              </div>
              <div
                className="portfolio-next1 swiper-next-arrow style-2"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <svg
                  width={46}
                  height={46}
                  viewBox="0 0 46 46"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={23} cy={23} r={23} />
                  <path d="M26 18.427V23V27.573C26 27.7426 26.1978 27.8352 26.328 27.7266L32 23L26.328 18.2734C26.1978 18.1648 26 18.2574 26 18.427Z" />
                  <path d="M14 22.5C13.7239 22.5 13.5 22.7239 13.5 23C13.5 23.2761 13.7239 23.5 14 23.5V22.5ZM26.328 18.2734L26.0079 18.6575V18.6575L26.328 18.2734ZM32 23L32.3201 23.3841L32.781 23L32.3201 22.6159L32 23ZM26.328 27.7266L26.6481 28.1107L26.6481 28.1107L26.328 27.7266ZM14 23.5H26V22.5H14V23.5ZM26.5 23V18.427H25.5V23H26.5ZM26.0079 18.6575L31.6799 23.3841L32.3201 22.6159L26.6481 17.8893L26.0079 18.6575ZM31.6799 22.6159L26.0079 27.3425L26.6481 28.1107L32.3201 23.3841L31.6799 22.6159ZM26.5 27.573V23H25.5V27.573H26.5ZM26.0079 27.3425C26.2033 27.1797 26.5 27.3186 26.5 27.573H25.5C25.5 28.1665 26.1922 28.4907 26.6481 28.1107L26.0079 27.3425ZM26.5 18.427C26.5 18.6814 26.2033 18.8203 26.0079 18.6575L26.6481 17.8893C26.1922 17.5093 25.5 17.8335 25.5 18.427H26.5Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio5;
