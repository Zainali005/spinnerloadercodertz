import React from "react";

function About() {
  return (
    <>
      <div className="about1-section pt-120 pb-120" id="about">
        <img
          src="assets/images/bg/section-bg1.png"
          className="img-fluid section-bg1"
          alt=""
        />
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 order-lg-1 order-2">
              <div
                className="about1-content wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <span>-About Our Company-</span>
                <h3>
                  We are committed to providing our customers with exceptional.
                </h3>
                <p className="para">
                  At CodeErtz, we provide innovative technology solutions that
                  drive success. Our expertise in advanced digital strategies
                  helps businesses achieve their goals with efficiency and
                  effectiveness.
                </p>

                <ul className="about-list">
                  <li>Customized solutions tailored to client needs</li>
                  <li>Expert consultation in digital transformation</li>
                  <li>Ongoing support and maintenance services</li>
                </ul>
                <p className="para">
                  Since the advent of the Internet and e-commerce, a growing
                  number of consumers are buying their travel requirements
                  online. In many cases, they bypass the travel agent and
                  purchase directly from the airline, hotel chain, etc.Most
                  travel agents, especially large ones, have two departments.
                  Some agencies, i.e.Bricks and mortar travel agents were once
                  common in every high street. They existed next door to
                  grocers, department stores, and clothes shops., tourism or
                  business travel.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <div
                className="about-images wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="row g-0">
                  <div className="col-6">
                    <img
                      src="assets/images/bg/about11.png"
                      className="about11 img-fluid"
                      alt="image"
                    />
                    <div className="experience-tag">
                      <div className="tag-inner">
                        <img
                          src="assets/images/icons/medal-icon.svg"
                          alt="image"
                        />
                        <h5>10+ Years Experience</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 position-relative">
                    <img
                      src="assets/images/bg/about12.png"
                      className="about12 img-fluid"
                      alt="image"
                    />
                    <img
                      src="assets/images/bg/about13.png"
                      className="about13 img-fluid"
                      alt="image"
                    />
                    <img
                      src="assets/images/icons/sun-icon.svg"
                      className="sun-icon"
                      alt="image"
                    />
                    <img
                      src="assets/images/icons/about-dot.svg"
                      className="about-dot"
                      alt="image"
                    />
                    <img
                      src="assets/images/icons/about-triangle.svg"
                      className="about-triangle"
                      alt="image"
                    />
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

export default About;
