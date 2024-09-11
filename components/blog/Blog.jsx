import React, { useEffect, useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { blogCardData } from "../../data/index";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Blog() {
  const blogSldier = {
    slidesPerView: 1,
    speed: 1200,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".blogstan-prev1",
      prevEl: ".blogstan-next1",
    },
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="blog-section pt-80 pb-80 mb-80">
        <img
          src="assets/images/bg/water-mark1.png"
          alt="image"
          className="img-fluid water-mark1"
        />
        <img
          src="assets/images/bg/water-mark2.png"
          alt="image"
          className="img-fluid water-mark2"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-title primary1">
                <span>-Our News-</span>
                <h3>Learn Something From Blog</h3>
                <p className="para">
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="row position-relative justify-content-center g-4">
            {blogCardData.slice(1, 4).map((item) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-10" key={item.id}>
                  <div
                    className="sigle-blog-1 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    {item.formate === "standard" && (
                      <div className="blog-image">
                        <img
                          src={item.image}
                          className="img-fluid"
                          alt="image"
                        />
                      </div>
                    )}
                    {item.formate === "quote" && (
                      <div className="bgrid-quote">
                        <h5>{item.quote}</h5>
                        <h4>{item.quoteAuthor}</h4>
                        <div className="quote-area">
                          <img
                            src="assets/images/icons/blog-stand-qote.svg"
                            alt="image"
                          />
                        </div>
                      </div>
                    )}
                    {item.formate === "video" && (
                      <div
                        className="video-image position-relative"
                        key={item.id}
                      >
                        <div className="video-play style-2">
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={() => setOpen(true)}
                            className="popup-youtube video-icon"
                          >
                            <i className="bx bx-play" />
                          </div>
                        </div>
                        <img
                          src={item.image}
                          className="img-fluid"
                          alt="image"
                        />
                      </div>
                    )}
                    {item.formate === "gallary" && (
                      <div className="blog-image-slider mb-0" key={item.id}>
                        <Swiper
                          {...blogSldier}
                          className="swiper blog-standard-slider"
                        >
                          <div className="swiper-wrapper">
                            {item.image.map((image) => {
                              return (
                                <SwiperSlide
                                  key={image.id}
                                  className="swiper-slide"
                                >
                                  <img
                                    src={image.img}
                                    className="img-fluid"
                                    alt="image"
                                  />
                                </SwiperSlide>
                              );
                            })}
                          </div>
                        </Swiper>
                        <div className="slider-arrows2 style-5 d-flex justify-content-between gap-4 w-100">
                          <div
                            className="blogstan-prev1 swiper-prev-arrow"
                            tabIndex={0}
                            role="button"
                            aria-label="Previous slide"
                          >
                            <svg
                              width={40}
                              height={40}
                              viewBox="0 0 46 46"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx={20}
                                cy={20}
                                r={20}
                                strokeWidth="1.5"
                              />
                              <path d="M20 27.573V23V18.427C20 18.2574 19.8022 18.1648 19.672 18.2734L14 23L19.672 27.7266C19.8022 27.8352 20 27.7426 20 27.573Z" />
                              <path d="M32 23.5C32.2761 23.5 32.5 23.2761 32.5 23C32.5 22.7239 32.2761 22.5 32 22.5V23.5ZM19.672 27.7266L19.9921 27.3425V27.3425L19.672 27.7266ZM14 23L13.6799 22.6159L13.219 23L13.6799 23.3841L14 23ZM19.672 18.2734L19.3519 17.8893L19.3519 17.8893L19.672 18.2734ZM32 22.5H20V23.5H32V22.5ZM19.5 23V27.573H20.5V23H19.5ZM19.9921 27.3425L14.3201 22.6159L13.6799 23.3841L19.3519 28.1107L19.9921 27.3425ZM14.3201 23.3841L19.9921 18.6575L19.3519 17.8893L13.6799 22.6159L14.3201 23.3841ZM19.5 18.427V23H20.5V18.427H19.5ZM19.9921 18.6575C19.7967 18.8203 19.5 18.6814 19.5 18.427H20.5C20.5 17.8335 19.8078 17.5093 19.3519 17.8893L19.9921 18.6575ZM19.5 27.573C19.5 27.3186 19.7967 27.1797 19.9921 27.3425L19.3519 28.1107C19.8078 28.4907 20.5 28.1665 20.5 27.573H19.5Z" />
                            </svg>
                          </div>
                          <div
                            className="blogstan-next1 swiper-next-arrow"
                            tabIndex={0}
                            role="button"
                            aria-label="Next slide"
                          >
                            <svg
                              width={40}
                              height={40}
                              viewBox="0 0 46 46"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx={20} cy={20} r={20} />
                              <path d="M26 18.427V23V27.573C26 27.7426 26.1978 27.8352 26.328 27.7266L32 23L26.328 18.2734C26.1978 18.1648 26 18.2574 26 18.427Z" />
                              <path d="M14 22.5C13.7239 22.5 13.5 22.7239 13.5 23C13.5 23.2761 13.7239 23.5 14 23.5V22.5ZM26.328 18.2734L26.0079 18.6575V18.6575L26.328 18.2734ZM32 23L32.3201 23.3841L32.781 23L32.3201 22.6159L32 23ZM26.328 27.7266L26.6481 28.1107L26.6481 28.1107L26.328 27.7266ZM14 23.5H26V22.5H14V23.5ZM26.5 23V18.427H25.5V23H26.5ZM26.0079 18.6575L31.6799 23.3841L32.3201 22.6159L26.6481 17.8893L26.0079 18.6575ZM31.6799 22.6159L26.0079 27.3425L26.6481 28.1107L32.3201 23.3841L31.6799 22.6159ZM26.5 27.573V23H25.5V27.573H26.5ZM26.0079 27.3425C26.2033 27.1797 26.5 27.3186 26.5 27.573H25.5C25.5 28.1665 26.1922 28.4907 26.6481 28.1107L26.0079 27.3425ZM26.5 18.427C26.5 18.6814 26.2033 18.8203 26.0079 18.6575L26.6481 17.8893C26.1922 17.5093 25.5 17.8335 25.5 18.427H26.5Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="blog-content hover-border1">
                      <span>{item.category}</span>
                      <h4>
                        <Link href="/blog-details">{item.blogTitle}</Link>
                      </h4>
                      <div className="blog-meta">
                        <div className="author-img">
                          <img src={item.authorImage} alt="image" />
                        </div>
                        <div className="designation">
                          <h5>{item.authorName}</h5>
                          <div className="date">
                            {item.date}
                            <span>{item.readtime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row"></div>
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

export default Blog;
