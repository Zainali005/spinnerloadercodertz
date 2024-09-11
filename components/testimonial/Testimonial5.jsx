import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Testimonial5() {
  const [isOpen, setOpen] = useState(false);
  const testimonialslieder5 = {
    slidesPerView: "auto",
    speed: 1200,
    autoplay: true,
    spaceBetween: 25,
    loop: true,
    roundLengths: true,
    navigation: {
      nextEl: ".testi-prev4",
      prevEl: ".testi-next4",
    },
    pagination: {
      el: ".testimonial5-pagination",
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
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <>
      <div className="testimonial-section4">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title3 style-3 text-white text-lg-start text-center">
                <span>-Testimonial-</span>
                <h3 className="text-white">Our Client Feedback</h3>
                <p className="text-white">
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 d-flex justify-content-lg-end justify-content-center">
              <div className="client-vdo-area">
                <div className="video-play style-5">
                  <div
                    onClick={() => setOpen(true)}
                    style={{ cursor: "pointer" }}
                    className="popup-youtube video-icon"
                  >
                    <i className="bx bx-play" />
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <Swiper
              {...testimonialslieder5}
              className="swiper testimonial-slider5 swiper-fix"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div
                    className="testimonial-single3 style-2 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <div className="author-area d-flex align-items-start">
                      <div className="author gap-3">
                        <div className="author-img">
                          <img src="assets/images/bg/testi51.png" alt="image" />
                        </div>
                        <div className="author-desig">
                          <h5>Johan Martin Sr</h5>
                          <p>Manager</p>
                        </div>
                      </div>
                      <img src="assets/images/icons/quotenew.svg" alt="image" />
                    </div>
                    <p className="para">
                      You have been absolutely wonderful for Kinship Center,
                     I cant thank you enough for all your tremendous
                      skills, You will always be Kinship Centers vendor of
                      aliquet quis aenean.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="testimonial-single3 style-2 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <div className="author-area d-flex align-items-start">
                      <div className="author gap-3">
                        <div className="author-img">
                          <img src="assets/images/bg/testi52.png" alt="image" />
                        </div>
                        <div className="author-desig">
                          <h5>John Peter</h5>
                          <p>Area Manager</p>
                        </div>
                      </div>
                      <img src="assets/images/icons/quotenew.svg" alt="image" />
                    </div>
                    <p className="para">
                      Morbi vel viverra velit. Duis cursus nibh arcu, id dapibus
                      libero bibendum ut. Donec libero nulla, suscipit non
                      egestas et, elementum quis quam. Aenean aliquet fermentum
                      magna.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="testimonial-single3 style-2 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <div className="author-area d-flex align-items-start">
                      <div className="author gap-3">
                        <div className="author-img">
                          <img src="assets/images/bg/testi53.png" alt="image" />
                        </div>
                        <div className="author-desig">
                          <h5>Micheal Anderson</h5>
                          <p>Product Manager</p>
                        </div>
                      </div>
                      <img src="assets/images/icons/quotenew.svg" alt="image" />
                    </div>
                    <p className="para">
                      In bibendum odio libero, sed n aliquet libero. Mauris non
                      quam. Suspendisse non lorem pulvinar, bibendum elit nec,
                      venenatis lacus. Aliquam sit amet ligula et tortor
                      pharetra.
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-bottom">
              <div className="testimonial5-pagination d-lg-flex d-none align-items-center justify-content-center text-center" />
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="TboWOSW7qCI"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default Testimonial5;
