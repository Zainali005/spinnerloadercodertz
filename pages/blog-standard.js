import Link from "next/link";
import React, { useState } from "react";
import BlogPostCategoryWidget from "../components/blog/BlogPostCategoryWidget";
import BlogPostTagWidget from "../components/blog/BlogPostTagWidget";
import BlogRecentPostWidget from "../components/blog/BlogRecentPostWidget";
import BlogSearchWidget from "../components/blog/BlogSearchWidget";
import ShareBlogWidget from "../components/blog/ShareBlogWidget";
import Breadcrumb from "../components/common/Breadcrumb";
import { blogStandardData } from "../data/index";
import { Swiper, SwiperSlide } from "swiper/react";
import Paginations from "../components/common/Pagination";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/index";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function BlogStandard() {
  const blogSldier = {
    slidesPerView: 1,
    speed: 1200,
    spaceBetween: 15,
    autoplay: true,
    loop: true,
    effect: "fade",
    roundLengths: true,
    parallax: true,
    fadeEffect: true,
    pagination: false,
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".blogstan-prev1",
      prevEl: ".blogstan-next1",
    },
  };
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <Breadcrumb
          pageName="Blog Standard"
          pageTitle="Blog Standard"
          id="#blog-standard"
        />
        <div className="blog-standard pt-120 pb-120" id="blog-standard">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-8">
                {blogStandardData.map((item) => {
                  return (
                    <>
                      <div
                        className={
                          item.formate === "regular"
                            ? "blog-standard-area"
                            : item.formate === "video"
                            ? "blog-standard-single blog-standard-video"
                            : item.formate === "quote"
                            ? "blog-standard-single blog-quote mb-0"
                            : item.formate === "slider"
                            ? "blog-standard-single blog-standard-video"
                            : "blog-standard-area"
                        }
                      >
                        <div className="blog-standard-single">
                          {<h3>{item.title}</h3>}

                          <ul className="meta ms-0 ps-0">
                            <li className="author">
                              <img
                                src="assets/images/icons/blog-stand-author.svg"
                                alt="image"
                              />
                              <span>{item.authorName}</span>
                            </li>
                            <li className="date">
                              <img
                                src="assets/images/icons/blog-stand-calndr.svg"
                                alt="image"
                              />
                              <span>{item.date}</span>
                            </li>
                          </ul>

                          {item.formate === "regular" && (
                            <div className="image">
                              <div className="react-ellips">
                                <i className="bi bi-heart" />
                                <h5>520</h5>
                              </div>
                              {
                                <img
                                  src={item.image}
                                  className="img-fluid"
                                  alt="image"
                                />
                              }
                            </div>
                          )}
                          {item.formate === "video" && (
                            <div className="image">
                              <div className="react-ellips">
                                <i className="bi bi-heart" />
                                <h5>520</h5>
                              </div>
                              <div className="video-play style-2">
                                <div
                                  onClick={() => setOpen(true)}
                                  className="popup-youtube video-icon"
                                >
                                  <i className="bx bx-play" />
                                </div>
                              </div>
                              <img
                                src="assets/images/blog/blog-stand2.png"
                                className="img-fluid"
                                alt="image"
                              />
                            </div>
                          )}
                          {item.formate === "quote" && (
                            <div className="blog-qoote-area">
                              <h3>{item.quoteTitle}</h3>
                              <h2>{item.quoteAuthor}</h2>
                              <div className="quote-area">
                                <img
                                  src="assets/images/icons/blog-stand-qote.svg"
                                  alt="image"
                                />
                              </div>
                            </div>
                          )}
                          {item.formate === "slider" && (
                            <div className="blog-image-slider">
                              <div className="react-ellips">
                                <i className="bi bi-heart" />
                                <h5>520</h5>
                              </div>
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
                                    width={46}
                                    height={46}
                                    viewBox="0 0 46 46"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx={23}
                                      cy={23}
                                      r="22.25"
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
                          )}

                          <div className="content">
                            <p className="para">{item.details}</p>
                          </div>
                          <div className="bottom-area">
                            <div className="blog-btn">
                              <Link href="/blog-details">Read More</Link>
                            </div>
                            <div className="blog-share">
                              <div className="front">
                                <img
                                  src="assets/images/icons/blog-share-icon.svg"
                                  alt="image"
                                />
                                <span>SHARE</span>
                              </div>
                              <div className="back">
                                <ul className="share-list d-flex flex-row align-items-start gap-3">
                                  <li>
                                    <a href="https://www.facebook.com/">
                                      <i className="bx bxl-facebook" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.twitter.com/">
                                      <i className="bx bxl-twitter" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.instagram.com/">
                                      <i className="bx bxl-instagram" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.pinterest.com/">
                                      <i className="bx bxl-pinterest" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                })}
                <div className="row">
                  <Paginations />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  <BlogSearchWidget />
                  <BlogRecentPostWidget />
                  <BlogPostCategoryWidget />
                  <BlogPostTagWidget />
                  <ShareBlogWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default BlogStandard;
