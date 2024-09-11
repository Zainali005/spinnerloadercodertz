import Link from "next/link";
import React from "react";
import { teamData } from "../../data/index";
function Team() {
  return (
    <>
      <div
        className="team-section2 pt-120 pb-120 position-relative overflow-hidden"
        id="team"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title primary1">
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
            {teamData.map((item) => {
              return (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-10"
                  key={item.id}
                >
                  <div
                    className="single-team2 style-4 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.4s"
                  >
                    <div className="team-image">
                      <img src={item.image} alt="image" />
                      <div className="social-area gap-3">
                        <ul className="social-links d-flex justify-content-center align-items-center flex-row gap-3">
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
                          <li>
                            <a href="https://www.pinterest.com/">
                              <i className="bx bxl-pinterest-alt" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-content">
                      <h4 className="name">{item.name}</h4>
                      <p className="designation">{item.designation}</p>
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

export default Team;
