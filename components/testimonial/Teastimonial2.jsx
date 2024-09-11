import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);
function Teastimonial2() {
  const testimonialSlider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 25,
    loop: true,
    autoplay: true,
    roundLengths: true,
    navigation: false,
    pagination: {
      el: ".swiper-pagination2",
      clickable: "true",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <>
      <div className="testimonial-section2 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title2 primary3">
                <span>-Testimonial-</span>
                <div>
                  <h3>Our Client Feedback</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center position-relative">
            <Swiper
              {...testimonialSlider}
              className="swiper testimonial-slider2 swiper-fix"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div
                    className="testimonial-single2 hover-border2 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                  >
                    <div className="quote">
                      <img
                        alt="image"
                        src="assets/images/icons/quote-white.svg"
                        className="quote-icon"
                      />
                    </div>
                    <img
                      src="assets/images/bg/testi2-bg.svg"
                      alt="image"
                      className="testi2-bg"
                    />
                    <div className="author">
                      <div className="author-img">
                        <img src="assets/images/bg/client21.png" alt="image" />
                      </div>
                      <div className="author-desig">
                        <h5>Johan Martin Sr</h5>
                        <p>Product Manager</p>
                      </div>
                    </div>
                    <p className="para">
                      You have been absolutely wonderful for Kinship Center,
                    I cant thank you enough for all your tremendous
                      skills, support and patience specially during our merger.
                      You will always be Kinship cant vendor of choice!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="testimonial-single2 hover-border2 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                  >
                    <div className="quote">
                      <img
                        alt="image"
                        src="assets/images/icons/quote-white.svg"
                        className="quote-icon"
                      />
                    </div>
                    <img
                      src="assets/images/bg/testi2-bg.svg"
                      alt="image"
                      className="testi2-bg"
                    />
                    <div className="author">
                      <div className="author-img">
                        <img src="assets/images/bg/client22.png" alt="image" />
                      </div>
                      <div className="author-desig">
                        <h5>David Watson</h5>
                        <p>Product Manager</p>
                      </div>
                    </div>
                    <p className="para">
                      You have been absolutely wonderful for Kinship Center,
                       I cant thank you enough for all your tremendous
                      skills, support and patience specially during our merger.
                      You will always be Kinship cant vendor of choice!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="testimonial-single2 hover-border2 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                  >
                    <div className="quote">
                      <img
                        alt="image"
                        src="assets/images/icons/quote-white.svg"
                        className="quote-icon"
                      />
                    </div>
                    <img
                      src="assets/images/bg/testi2-bg.svg"
                      alt="image"
                      className="testi2-bg"
                    />
                    <div className="author">
                      <div className="author-img">
                        <img src="assets/images/bg/client21.png" alt="image" />
                      </div>
                      <div className="author-desig">
                        <h5>James Anderson</h5>
                        <p>Product Manager</p>
                      </div>
                    </div>
                    <p className="para">
                      You have been absolutely wonderful for Kinship Center,
                       I cant thank you enough for all your tremendous
                      skills, support and patience specially during our merger.
                      You will always be Kinship cant vendor of choice!
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-bottom d-flex justify-content-center align-items-center">
              <div className="swiper-pagination2 style-2 text-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teastimonial2;
