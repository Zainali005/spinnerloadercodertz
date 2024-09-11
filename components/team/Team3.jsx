import React from "react";
import { teamData } from "../../data";

function Team3() {
  return (
    <>
      <div className="team-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className="section-title3 primary3 text-cener">
                <span>-Creative Team-</span>
                <h3>Meet Our Team Member</h3>
                <p>
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-start g-4 position-relative">
            <img
              src="assets/images/bg/portfolio-vctor.png"
              alt="image"
              className="portfolio-vector img-fluid"
            />

            {teamData.map((item) => {
              return (
                <div
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-10"
                  key={item.id}
                >
                  <div
                    className="single-team1 style-2 hover-border1 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <div className="team-image">
                      <img src={item.image} alt="image" />
                      <div className="social-area gap-3">
                        <ul className="social-links d-flex justify-content-center align-items-center flex-column gap-3">
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
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
                        <div className="social-plus">
                          <i className="bx bx-plus" />
                        </div>
                      </div>
                      <svg
                        viewBox="0 0 430 195"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M160.378 64.0315C43.5811 57 15.7702 14.7334 3.40949e-05 0.000915527L4.53134e-05 195.001L430 195L430 157.164C378.284 73 297.179 72.2673 160.378 64.0315Z" />
                      </svg>
                      <div className="team-content">
                        <h4 className="name">{item.name}</h4>
                        <p className="designation">{item.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Team3;
