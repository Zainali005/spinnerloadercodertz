import React from "react";
import Link from "next/link";
function Team1() {
  return (
    <>
      <div className="team-section pt-120 pb-120">
        <img
          src="assets/images/bg/section-bg1.png"
          alt="image"
          className="img-fluid water-mark1"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-title primary2">
                <span>-Our Team-</span>
                <h3>Our Creative Minds</h3>
                <p className="para">
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div
                className="single-team1 hover-border1 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="team-image">
                  <img src="assets/images/bg/team11.png" alt="image" />
                  <div className="social-area gap-3">
                    <div className="social-plus">
                      <i className="bx bx-plus" />
                    </div>
                    <ul className="social-links d-flex justify-content-center align-items-center flex-column gap-3">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/usamafarooq459/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>

                      <li>
                        <a href="https://www.facebook.com/usamafarooq2704">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4 className="name">Usama Farooq</h4>
                  <p className="designation">CEO/Founder</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div
                className="single-team1 hover-border1 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <div className="team-image">
                  <img src="assets/images/bg/team12.png" alt="image" />
                  <div className="social-area gap-3">
                    <div className="social-plus">
                      <i className="bx bx-plus" />
                    </div>
                    <ul className="social-links d-flex justify-content-center align-items-center flex-column gap-3">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/mfaisal-usama/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>

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
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4 className="name">Usama Faisal</h4>
                  <p className="designation">CEO</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div
                className="single-team1 hover-border1 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <div className="team-image">
                  <img src="assets/images/bg/team13.png" alt="image" />
                  <div className="social-area gap-3">
                    <div className="social-plus">
                      <i className="bx bx-plus" />
                    </div>
                    <ul className="social-links d-flex justify-content-center align-items-center flex-column gap-3">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/szulqarnain/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bx bxl-linkedin" />
                        </a>
                      </li>

                      <li>
                        <a href="https://www.facebook.com/s.zulqarnain.99">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4 className="name">Zulqarnain bukhari</h4>
                  <p className="designation">CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team1;
