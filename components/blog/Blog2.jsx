import React from "react";
import Link from "next/link";
function Blog2() {
  return (
    <>
      <div className="blog-section bg-white pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title2 primary6">
                <span>-Our Blog-</span>
                <div>
                  <h3>Learn From Blog</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row position-relative justify-content-center g-4">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="sigle-blog-1 style-2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="blog-image">
                  <img
                    src="assets/images/blog/blog11.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="blog-content hover-border2">
                  <span>Ui/Ux Design</span>
                  <h4>
                    <Link href="/blog-details">
                      How to Create a Useful Excellent Optimized Section
                    </Link>
                  </h4>
                  <div className="blog-meta">
                    <div className="author-img">
                      <img
                        src="assets/images/blog/blog-author1.png"
                        alt="image"
                      />
                    </div>
                    <div className="designation">
                      <h5>Sara Watson</h5>
                      <div className="date">
                        March 24, 2022<span>18 min Read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="sigle-blog-1 style-2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <div className="blog-image">
                  <img
                    src="assets/images/blog/blog12.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="blog-content hover-border2">
                  <span>Web Develpment</span>
                  <h4>
                    <Link href="/blog-details">
                      Overcoming Blockers: How to Build Your Red Tape Toolkit
                    </Link>
                  </h4>
                  <div className="blog-meta">
                    <div className="author-img">
                      <img
                        src="assets/images/blog/blog-author2.png"
                        alt="image"
                      />
                    </div>
                    <div className="designation">
                      <h5>James Cookie</h5>
                      <div className="date">
                        March 24, 2022<span>18 min Read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="sigle-blog-1 style-2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <div className="blog-image">
                  <img
                    src="assets/images/blog/blog13.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="blog-content hover-border2">
                  <span>Ui/Ux Design</span>
                  <h4>
                    <Link href="/blog-details">
                      A lifestyle you always being the focal point is innately.
                    </Link>
                  </h4>
                  <div className="blog-meta">
                    <div className="author-img">
                      <img
                        src="assets/images/blog/blog-author3.png"
                        alt="image"
                      />
                    </div>
                    <div className="designation">
                      <h5>Sania Borua</h5>
                      <div className="date">
                        March 24, 2022<span>18 min Read</span>
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

export default Blog2;
