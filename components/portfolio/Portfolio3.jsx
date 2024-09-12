import React from "react";
import Link from "next/link";
function Portfolio3() {
  return (
    <>
      <div className="portfolio-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="section-title3 primary3 text-cener">
                <span>-Creative Portfolio-</span>
                <h3>Our Work Example</h3>
                <p>
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-start g-4 position-relative">
            <img
              src="assets/images/bg/dot-squire.svg"
              alt="image"
              className="dot-squire img-fluid"
            />
            <img
              src="assets/images/bg/portfolio-vctor.png"
              alt="image"
              className="portfolio-vector img-fluid"
            />
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="portfolio-item3 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <img src="assets/images/bg/portfolio31.png" alt="image" />
                <div className="overlay">
                  <div className="overlay-content">
                    <p>Plugin</p>
                    <h4>
                      <Link href="/">
                        Pocket-Sized Notebooks Hold Minia Ture.
                      </Link>
                    </h4>
                    <Link href="/">
                      <a className="overlay-arrow">
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="portfolio-item3 mt-50 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".4s"
              >
                <img src="assets/images/bg/portfolio32.png" alt="image" />
                <div className="overlay">
                  <div className="overlay-content">
                    <p>Mockup</p>
                    <h4>
                      <Link href="service-details">
                        A4 Size Flyer Mockup Design.
                      </Link>
                    </h4>
                    <Link href="/">
                      <a className="overlay-arrow">
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="portfolio-item3 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".6s"
              >
                <img src="assets/images/bg/portfolio33.png" alt="image" />
                <div className="overlay">
                  <div className="overlay-content">
                    <p>Ui Illustration</p>
                    <h4>
                      <Link href="service-details">
                        Ui/Ux Illustration Design..
                      </Link>
                    </h4>
                    <Link href="/">
                      <a className="overlay-arrow">
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="portfolio-item3 mt-minus50 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".8s"
              >
                <img src="assets/images/bg/portfolio34.png" alt="image" />
                <div className="overlay">
                  <div className="overlay-content">
                    <p>Box Mockup</p>
                    <h4>
                      <Link href="service-details">
                        PPocket-Sized Notebooks Ture Paintings
                      </Link>
                    </h4>
                    <Link href="/">
                      <a className="overlay-arrow">
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="portfolio-item3 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="1s"
              >
                <img src="assets/images/bg/portfolio35.png" alt="image" />
                <div className="overlay">
                  <div className="overlay-content">
                    <p>Web</p>
                    <h4>
                      <Link href="service-details">
                        Amazing web card design with overlay.
                      </Link>
                    </h4>
                    <Link href="/">
                      <a className="overlay-arrow">
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="portfolio-item3 mt-minus50 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="1.2s"
              >
                <img src="assets/images/bg/portfolio36.png" alt="image" />
                <div className="overlay">
                  <div className="overlay-content">
                    <p>SEO</p>
                    <h4>
                      <Link href="service-details">
                        SEO Optimization for your website.
                      </Link>
                    </h4>
                    <Link href="/s">
                      <a className="overlay-arrow">
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </Link>
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

export default Portfolio3;
