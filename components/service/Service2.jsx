import React from "react";
import Link from "next/link";
function Service2() {
  return (
    <>
      <div className="service2-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title2 primary4">
                <span>-What We Offer-</span>
                <div>
                  <h3>Our Best Solution</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img
                  src="assets/images/icons/service21.svg"
                  className="service21-icon"
                  alt="image"
                />
                <div className="service-content">
                  <span>01</span>
                  <h4>
                    <Link href="/service-details">
                      <a>Website Devolopment</a>
                    </Link>
                  </h4>
                  <p className="para">
                    Lorem Ipsum is simply dummy text of free available in market
                    the way printin and typesetting industry has been
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img
                  src="assets/images/icons/service22.svg"
                  className="service21-icon"
                  alt="image"
                />
                <div className="service-content">
                  <span>02</span>
                  <h4>
                    <Link href="/service-details">
                      <a>Ui/Ux Creative Design</a>
                    </Link>
                  </h4>
                  <p className="para">
                    Lorem Ipsum is simply dummy text of free available in market
                    the way printin and typesetting industry has been
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img
                  src="assets/images/icons/service23.svg"
                  className="service21-icon"
                  alt="image"
                />
                <div className="service-content">
                  <span>03</span>
                  <h4>
                    <Link href="/service-details">
                      <a>Web Security</a>
                    </Link>
                  </h4>
                  <p className="para">
                    Lorem Ipsum is simply dummy text of free available in market
                    the way printin and typesetting industry has been
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.8s"
              >
                <img
                  src="assets/images/icons/service24.svg"
                  className="service21-icon"
                  alt="image"
                />
                <div className="service-content">
                  <span>04</span>
                  <h4>
                    <Link href="/service-details">
                      <a>Consultancy Services</a>
                    </Link>
                  </h4>
                  <p className="para">
                    Lorem Ipsum is simply dummy text of free available in market
                    the way printin and typesetting industry has been
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="1s"
              >
                <img
                  src="assets/images/icons/service25.svg"
                  className="service21-icon"
                  alt="image"
                />
                <div className="service-content">
                  <span>05</span>
                  <h4>
                    <Link href="/service-details">
                      <a>Content Writing</a>
                    </Link>
                  </h4>
                  <p className="para">
                    Lorem Ipsum is simply dummy text of free available in market
                    the way printin and typesetting industry has been
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="1.2s"
              >
                <img
                  src="assets/images/icons/service26.svg"
                  className="service21-icon"
                  alt="image"
                />
                <div className="service-content">
                  <span>06</span>
                  <h4>
                    <Link href="/service-details">
                      <a>Digital Marketing</a>
                    </Link>
                  </h4>
                  <p className="para">
                    Lorem Ipsum is simply dummy text of free available in market
                    the way printin and typesetting industry has been
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service2;
