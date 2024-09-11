import React from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation]);
function Testimonial4() {
  const testimonial4Slider = {
    slidesPerView: 1,
    speed: 1200,
    spaceBetween: 25,
    loop: true,
    autoplay: true,
    roundLengths: true,

    pagination: {
      el: ".testimonial4-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".testi-prev4",
      prevEl: ".testi-next4",
    },
  };
  return (
    <>
      <div className="testimonial-section4">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title3 text-white text-start">
                <span>-Testimonial-</span>
                <h3 className="text-white">Our Client Feedback</h3>
              </div>
              <div className="testimonial-area">
                <Swiper
                  {...testimonial4Slider}
                  className="swiper testimonial-slider4 swiper-fix"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="testimonial-single3 style-3 wow fadeInUp"
                        data-wow-duration="1.5s"
                        data-wow-delay=".2s"
                      >
                        <div className="author-area">
                          <div className="author gap-3">
                            <div className="author-img">
                              <img
                                src="assets/images/bg/client21.png"
                                alt="image"
                              />
                            </div>
                            <div className="author-desig">
                              <h5>Johan Martin Sr</h5>
                              <p>Manager</p>
                            </div>
                          </div>
                          <img
                            src="assets/images/icons/quote4.svg"
                            alt="image"
                          />
                        </div>
                        <p className="para">
                          You have been absolutely wonderful for Kinship Center,
                           I can thank you enough for all your tremendous
                          skills, support and patience specia lly during our
                          merger. You will always be Kinship Center vendor of
                          choice! Lorem Ipsum is simply dumm of free available
                          in market the way printing and typesetting industry
                          has been the industry standard dummy text ever.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="testimonial-single3 style-3 wow fadeInUp"
                        data-wow-duration="1.5s"
                        data-wow-delay=".2s"
                      >
                        <div className="author-area">
                          <div className="author gap-3">
                            <div className="author-img">
                              <img
                                src="assets/images/bg/client22.png"
                                alt="image"
                              />
                            </div>
                            <div className="author-desig">
                              <h5>John Peter</h5>
                              <p>Area Manager</p>
                            </div>
                          </div>
                          <img
                            src="assets/images/icons/quote4.svg"
                            alt="image"
                          />
                        </div>
                        <p className="para">
                          You have been absolutely wonderful for Kinship Center,
                           I can thank you enough for all your tremendous
                          skills, support and patience specia lly during our
                          merger. You will always be Kinship Center vendor of
                          choice! Lorem Ipsum is simply dumm of free available
                          in market the way printing and typesetting industry
                          has been the industry standard dummy text ever.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="testimonial-single3 style-3 wow fadeInUp"
                        data-wow-duration="1.5s"
                        data-wow-delay=".2s"
                      >
                        <div className="author-area">
                          <div className="author gap-3">
                            <div className="author-img">
                              <img
                                src="assets/images/bg/client22.png"
                                alt="image"
                              />
                            </div>
                            <div className="author-desig">
                              <h5>Micheal Anderson</h5>
                              <p>Product Manager</p>
                            </div>
                          </div>
                          <img
                            src="assets/images/icons/quote4.svg"
                            alt="image"
                          />
                        </div>
                        <p className="para">
                          You have been absolutely wonderful for Kinship Center,
                           I can thank you enough for all your tremendous
                          skills, support and patience specia lly during our
                          merger. You will always be Kinship Center vendor of
                          choice! Lorem Ipsum is simply dumm of free available
                          in market the way printing and typesetting industry
                          has been the industry standard dummy text ever.
                        </p>
                      </div>
                    </SwiperSlide>
                  </div>
                  <div className="testimonial-footer">
                    <div className="testimonial4-pagination" />
                    <div className="slider-arrows2 style-4 text-center d-flex gap-4">
                      <div
                        className="testi-prev4 swiper-prev-arrow"
                        tabIndex={0}
                        role="button"
                        aria-label="Previous slide"
                      >
                        <i className="bi bi-arrow-left" />
                      </div>
                      <div
                        className="testi-next4 swiper-next-arrow"
                        tabIndex={0}
                        role="button"
                        aria-label="Next slide"
                      >
                        <i className="bi bi-arrow-right" />
                      </div>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 offset-xl-1">
              <div
                className="company-counter style-2 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="row g-4 d-flex justify-content-center">
                  <div className="col-sm-6 col-6">
                    <div
                      className="counter-single style-2 text-center d-flex flex-row wow animate fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.2s"
                    >
                      <div className="coundown">
                        <h2 className="odometer" data-odometer-final={450}>
                          <CountUp
                            className="odometer"
                            end={250}
                            delay={2}
                            duration={5}
                          />
                          <i className="bx bx-plus" />
                        </h2>
                        <a href="#">Project</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-6">
                    <div
                      className="counter-single style-2 text-center d-flex flex-row wow animate fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.4s"
                    >
                      <div className="coundown">
                        <h2 className="odometer" data-odometer-final={50}>
                          <CountUp
                            className="odometer"
                            end={150}
                            delay={2}
                            duration={5}
                          />
                          <i className="bx bx-plus" />
                        </h2>
                        <a href="#">Customer</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-6">
                    <div
                      className="counter-single style-2 text-center d-flex flex-row wow animate fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.6s"
                    >
                      <div className="coundown">
                        <h2 className="odometer" data-odometer-final={963}>
                          <CountUp
                            className="odometer"
                            end={350}
                            delay={2}
                            duration={5}
                          />
                          <i className="bx bx-plus" />
                        </h2>
                        <a href="#">Success</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-6">
                    <div
                      className="counter-single style-2 text-center d-flex flex-row wow animate fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.8s"
                    >
                      <div className="coundown">
                        <h2 className="odometer" data-odometer-final={50}>
                          <CountUp
                            className="odometer"
                            end={250}
                            delay={2}
                            duration={5}
                          />
                          <i className="bx bx-plus" />
                        </h2>
                        <a href="#">Awards</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial4;
