import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import CountUp from "react-countup";
import Link from "next/link";
function Activities() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="activities-section pt-80 pb-80">
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
              <div className="section-title primary3">
                <span>-Our Video-</span>
                <h3>Our Company Activities</h3>
                <p className="para">
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="activities-area">
              <div
                className="company-vdo position-relative wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
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
              </div>
              <div
                className="company-counter wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="row g-4 d-flex justify-content-center">
                  <div className="col-lg-3 col-md-6 col-sm-10 col-10">
                    <div
                      className="counter-single text-center d-flex flex-row wow animate fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.6s"
                    >
                      <div className="coundown d-flex flex-column">
                        <h2 className="odometer">
                          <CountUp end={50} delay={2} duration={5} />+
                        </h2>
                        <Link href="#">Team Members</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-10 col-10">
                    <div
                      className="counter-single text-center d-flex flex-row wow animate fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.6s"
                    >
                      <div className="coundown d-flex flex-column">
                        <h2 className="odometer">
                          <CountUp end={120} delay={2} duration={5} />+
                        </h2>
                        <Link href="#">Projects Delivered</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-10 col-10">
                    <div
                      className="counter-single text-center d-flex flex-row wow animate fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.6s"
                    >
                      <div className="coundown d-flex flex-column">
                        <h2 className="odometer">
                          <CountUp end={15} delay={2} duration={5} />+
                        </h2>
                        <Link href="#">Partners</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-10 col-10">
                    <div
                      className="counter-single text-center d-flex flex-row wow animate fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.8s"
                    >
                      <div className="coundown d-flex flex-column">
                        <h2 className="odometer">
                          <CountUp end={25} delay={2} duration={5} />+
                        </h2>
                        <Link href="#">Awards Won</Link>
                      </div>
                    </div>
                  </div>
                </div>
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
}

export default Activities;
