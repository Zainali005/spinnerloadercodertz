import React, { useState } from "react";
import BlogPostCategoryWidget from "../components/blog/BlogPostCategoryWidget";
import BlogPostTagWidget from "../components/blog/BlogPostTagWidget";
import BlogRecentPostWidget from "../components/blog/BlogRecentPostWidget";
import BlogSearchWidget from "../components/blog/BlogSearchWidget";
import PostCommentWidget from "../components/blog/PostCommentWidget";
import ShareBlogWidget from "../components/blog/ShareBlogWidget";
import Breadcrumb from "../components/common/Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Layout from "../components/layout/index";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function BlogDetails() {
  const [isOpen, setOpen] = useState(false);
  const blogSldier = {
    slidesPerView: 1,
    speed: 1200,
    spaceBetween: 15,
    autoplay: true,
    loop: true,
    roundLengths: true,
    parallax: true,
    effect: "fade",
    pagination: false,
    navigation: {
      nextEl: ".blogstan-prev1",
      prevEl: ".blogstan-next1",
    },
  };
  return (
    <>
      <Layout>
        <Breadcrumb
          pageName="Blog details"
          pageTitle="Blog details"
          id="#blog-details"
        />
        <div className="blog-details pt-120 pb-120" id="blog-details">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-8">
                <div className="blog-details-area">
                  <div className="blog-details-single">
                    <h3>
                      Where do UX designers, UI designers, web developers, data
                      analysts, &amp; digital marketers?
                    </h3>
                    <ul className="meta ms-0 ps-0">
                      <li className="author">
                        <img
                          src="assets/images/icons/blog-stand-author.svg"
                          alt="image"
                        />
                        <span>Sara Watson</span>
                      </li>
                      <li className="date">
                        <img
                          src="assets/images/icons/blog-stand-calndr.svg"
                          alt="image"
                        />
                        <span>25 January 2022</span>
                      </li>
                    </ul>
                    <div className="image">
                      <div className="react-ellips">
                        <i className="bi bi-heart" />
                        <h5>520</h5>
                      </div>
                      <img
                        src="assets/images/blog/blog-stand1.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                    <div className="content">
                      <h4>
                        The UX design process consists user research,
                        wireframing and prototyping, and user testing.
                      </h4>
                      <p className="para">
                        Let’s imagine an e-commerce startup we’ll call it
                        Beautify. Beautify creates their own all-natural
                        cosmetics and sells them online via their website. Some
                        of the key team members behind this small but successful
                        startup include a UX designer, a UI designer, a web
                        developer, a data analyst, and a digital marketer.
                      </p>
                      <div className="row mt-60 mb-45 g-4">
                        <div className="col-md-6">
                          <div className="blog-qoote-area style-2">
                            <h5>
                              {" "}
                              Dont bunt. Aim out of the ballpark. Aim for the
                              company of immortals.
                            </h5>
                            <h4>-David Ogilvy-</h4>
                            <div className="quote-area">
                              <img
                                src="assets/images/icons/blog-stand-qote.svg"
                                alt="image"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="quote-details">
                            <h5>
                              Foundations of UX Writing by the University of
                              Washington
                            </h5>
                            <p className="para">
                              Worked in customer service? You have a deep
                              understanding of the customer experience. What
                              annoys them and what services they wish were
                              available. With some creative thinking, you can
                              work almost any previous work experience.
                            </p>
                          </div>
                        </div>
                      </div>
                      <h4>
                        Think Like an Editor (Content Strategy and UX Writing)
                      </h4>
                      <p className="para">
                        geism in the web development field is certainly out
                        there. Though it needn’t prevent you from embarking on
                        an intellectually rewarding (and well-paid) career path!
                        A willingness to learn, and some creative thinking to
                        tie in your past experience goes a long way.
                      </p>
                      <p className="para mb-0">
                        Try to find a way to connect your past experience to
                        your present. Don’t be afraid to throw in a silly
                        anecdote or two about your journey. Test it out on some
                        friends to see if it makes sense. That’s your narrative!
                      </p>
                      <div className="row blog-format g-4">
                        <div className="col-lg-6">
                          <div className="blog-image-slider mb-0">
                            <Swiper
                              {...blogSldier}
                              className="swiper blog-standard-slider"
                            >
                              <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                  <img
                                    src="assets/images/blog/blog-stand-slide1.png"
                                    className="img-fluid"
                                    alt="image"
                                  />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <img
                                    src="assets/images/blog/blog-stand-slide2.png"
                                    className="img-fluid"
                                    alt="image"
                                  />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <img
                                    src="assets/images/blog/blog-stand-slide3.png"
                                    className="img-fluid"
                                    alt="image"
                                  />
                                </SwiperSlide>
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
                        </div>
                        <div className="col-lg-6">
                          <div className="blog-details-video">
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
                        </div>
                      </div>
                      <h4>What You Should Do Now</h4>
                      <ul className="blog-details-list">
                        <li>
                          You’ll use these concepts in whichever programming
                          language you learn in the future.
                        </li>
                        <li>
                          That way you have an overview before you start
                          mastering a dedicated language..
                        </li>
                        <li>Amazing Timing and Experience</li>
                      </ul>
                      <p className="para">
                        Orem ipsum dolor sit &amp;, sdt consectetu adipiscing
                        elit. Aenean commodo ligula eget dolor. Cum socis Theme
                        sed natoque ut penatibus Etiam ultricies nisi vel augue.
                        Cura bitur an ultricies dictum felis eu pede sit. Etiam
                        rhoncus. Maecenas tempus, tellus eget penatibus Rtiam.
                      </p>
                      <div className="row blog-details-share gap-3">
                        <div className="col-lg-6 text-lg-start text-center">
                          <h5>Share Your Timeline :</h5>
                        </div>
                        <div className="col-lg-6 text-lg-end text-center">
                          <ul className="social gap-3">
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
                                <i className="bx bxl-pinterest-alt" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row blogd-category-area g-4">
                      <div className="col-lg-6">
                        <div className="category-box">
                          <h4>Categories:</h4>
                          <ul className="cat-list">
                            <li>
                              <a href="#">Branding</a>
                            </li>
                            <li>
                              <a href="#">Agency</a>
                            </li>
                            <li>
                              <a href="#">Design</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="category-box">
                          <h4>Tags:</h4>
                          <ul className="cat-list">
                            <li>
                              <a href="#">Ui/Ux</a>
                            </li>
                            <li>
                              <a href="#">Develop</a>
                            </li>
                            <li>
                              <a href="#">Advertising</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <PostCommentWidget />
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
          <React.Fragment>
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId="TboWOSW7qCI"
              onClose={() => setOpen(false)}
            />
          </React.Fragment>
        </div>
      </Layout>
    </>
  );
}

export default BlogDetails;
