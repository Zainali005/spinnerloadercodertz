import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Testimonial3() {
  const testimonial3slide = {
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
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="section-title3 primary4 text-cener">
                <span>-Testimonial-</span>
                <h3>See Our Clients Motivation</h3>
                <p>
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center position-relative">
            <Swiper
              {...testimonial3slide}
              className="swiper testimonial-slider2 swiper-fix"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div
                    className="testimonial-single2 style-2 hover-border3 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <div className="quote">
                      <img
                        alt="image"
                        src="assets/images/icons/quote-white.svg"
                        className="quote-icon"
                      />
                    </div>
                    <img
                      src="assets/images/bg/testi3-bg.svg"
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
                      You will always be Kinship Centers vendor of choice!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="testimonial-single2 style-2 hover-border3 wow fadeInUp"
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
                      src="assets/images/bg/testi3-bg.svg"
                      alt="image"
                      className="testi2-bg"
                    />
                    <div className="author">
                      <div className="author-img">
                        <img src="assets/images/bg/client22.png" alt="image" />
                      </div>
                      <div className="author-desig">
                        <h5>Andrew Jordan</h5>
                        <p>Product Manager</p>
                      </div>
                    </div>
                    <p className="para">
                      You have been absolutely wonderful for Kinship Center,
                       I cant thank you enough for all your tremendous
                      skills, support and patience specially during our merger.
                      You will always be Kinship Centers vendor of choice!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="testimonial-single2 style-2 hover-border3 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".6s"
                  >
                    <div className="quote">
                      <img
                        alt="image"
                        src="assets/images/icons/quote-white.svg"
                        className="quote-icon"
                      />
                    </div>
                    <img
                      src="assets/images/bg/testi3-bg.svg"
                      alt="image"
                      className="testi2-bg"
                    />
                    <div className="author">
                      <div className="author-img">
                        <img src="assets/images/bg/client21.png" alt="image" />
                      </div>
                      <div className="author-desig">
                        <h5>Michel Paolo</h5>
                        <p>Product Manager</p>
                      </div>
                    </div>
                    <p className="para">
                      You have been absolutely wonderful for Kinship Center,
                       I cant thank you enough for all your tremendous
                      skills, support and patience specially during our merger.
                      You will always be Kinship Centers vendor of choice!
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-bottom d-flex justify-content-center align-items-center">
              <div className="swiper-pagination2 style-3 text-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial3;
