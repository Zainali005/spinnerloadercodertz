import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Blog3() {
  const blog3slider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 25,
    loop: true,
    roundLengths: true,
    navigation: false,
    pagination: {
      el: ".swiper-pagination-blog",
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
      <div className="blog-section3 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="section-title3 primary4 text-cener">
                <span>-Our Blog-</span>
                <h3>Leatest News Feeds </h3>
                <p>
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center position-relative">
            <img
              src="assets/images/bg/portfolio-vctor.png"
              alt="image"
              className="blog-vector img-fluid"
            />
            <Swiper {...blog3slider} className="swiper blog-slider swiper-fix">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div
                    className="single-blog-2 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <img
                      src="assets/images/bg/blog31.png"
                      className="blog-img"
                      alt="image"
                    />
                    <div className="content">
                      <span>Ui/Ux Design</span>
                      <h4>
                        <Link href="/blog-details">
                          What Does a Product Manager Do? Your Complete Career
                          Guide
                        </Link>
                      </h4>
                      <p className="para">
                        The product manager job titleis fast becom ing on of the
                        hottest business.
                      </p>
                      <div className="meta">
                        <i className="bi bi-stopwatch" />
                        <span>Februay 24, 2022</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="single-blog-2 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                  >
                    <img
                      src="assets/images/bg/blog32.png"
                      className="blog-img"
                      alt="image"
                    />
                    <div className="content">
                      <span>Development</span>
                      <h4>
                        <Link href="/blog-details">
                          What Is a Marketing Associate? A Job Description &amp;
                          Career.
                        </Link>
                      </h4>
                      <p className="para">
                        The product manager job titleis fast becom ing on of the
                        hottest business.
                      </p>
                      <div className="meta">
                        <i className="bi bi-stopwatch" />
                        <span>Februay 24, 2022</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="single-blog-2 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".6s"
                  >
                    <img
                      src="assets/images/bg/blog33.png"
                      className="blog-img"
                      alt="image"
                    />
                    <div className="content">
                      <span>SEO</span>
                      <h4>
                        <Link href="/blog-details">
                          Which Webdesign Is On Trending With Color Palatte
                        </Link>
                      </h4>
                      <p className="para">
                        The product manager job titleis fast becom ing on of the
                        hottest business.
                      </p>
                      <div className="meta">
                        <i className="bi bi-stopwatch" />
                        <span>Februay 24, 2022</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="slider-bottom mt-50 d-xl-flex d-none justify-content-center align-items-center">
              <div className="swiper-pagination-blog text-center" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog3;
