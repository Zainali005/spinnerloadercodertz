import Link from "next/link";
import React from "react";

function RecentJobs() {
  return (
    <>
      <div className="job-section pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title2 primary5">
                <span>- Our Jobs-</span>
                <div>
                  <h3>Our Recent Job Post</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="jobpost-item hover-border2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="job-header">
                  <div className="icon">
                    <img src="assets/images/icons/job-icon1.svg" alt="image" />
                  </div>
                  <h4 className="title">
                    <Link href="/job-details">Ui/Ux Designer Wanted</Link>
                  </h4>
                </div>
                <div className="job-body">
                  <p className="para">
                    We’re hiring Want craft the best social media job vacancy or
                    hiring post? Get inspired by these examples.
                  </p>
                  <ul className="job-meta">
                    <li>
                      <img
                        src="assets/images/icons/location-prm2.svg"
                        alt="image"
                      />
                      London, UK
                    </li>
                    <li>
                      <img
                        src="assets/images/icons/time-prm2.svg"
                        alt="image"
                      />
                      Full Time
                    </li>
                  </ul>
                </div>
                <div className="job-footer">
                  <div className="eg-btn btn--primary2-light btn--sm">
                    1 Day Ago
                  </div>
                  <Link href="/job-details">
                    <a
                      style={{ cursor: "pointer" }}
                      className="eg-btn btn--primary2 btn--sm"
                    >
                      Apply Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="jobpost-item hover-border2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="job-header">
                  <div className="icon">
                    <img src="assets/images/icons/job-icon2.svg" alt="image" />
                  </div>
                  <h4 className="title">
                    <Link href="/job-details">Frontend Developer</Link>
                  </h4>
                </div>
                <div className="job-body">
                  <p className="para">
                    We’re hiring Want craft the best social media job vacancy or
                    hiring post? Get inspired by these examples.
                  </p>
                  <ul className="job-meta">
                    <li>
                      <img
                        src="assets/images/icons/location-prm2.svg"
                        alt="image"
                      />
                      London, UK
                    </li>
                    <li>
                      <img
                        src="assets/images/icons/time-prm2.svg"
                        alt="image"
                      />
                      Full Time
                    </li>
                  </ul>
                </div>
                <div className="job-footer" style={{ cursor: "pointer" }}>
                  <div className="eg-btn btn--primary2-light btn--sm">
                    1 Day Ago
                  </div>
                  <Link href="/job-details">
                    <a
                      style={{ cursor: "pointer" }}
                      className="eg-btn btn--primary2 btn--sm"
                    >
                      Apply Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="jobpost-item hover-border2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="job-header">
                  <div className="icon">
                    <img src="assets/images/icons/job-icon3.svg" alt="image" />
                  </div>
                  <h4 className="title">
                    <Link href="/job-details">WordPress Developer</Link>
                  </h4>
                </div>
                <div className="job-body">
                  <p className="para">
                    We’re hiring Want craft the best social media job vacancy or
                    hiring post? Get inspired by these examples.
                  </p>
                  <ul className="job-meta">
                    <li>
                      <img
                        src="assets/images/icons/location-prm2.svg"
                        alt="image"
                      />
                      London, UK
                    </li>
                    <li>
                      <img
                        src="assets/images/icons/time-prm2.svg"
                        alt="image"
                      />
                      Full Time
                    </li>
                  </ul>
                </div>
                <div className="job-footer" style={{ cursor: "pointer" }}>
                  <div className="eg-btn btn--primary2-light btn--sm">
                    1 Day Ago
                  </div>
                  <Link href="/job-details">
                    <a
                      style={{ cursor: "pointer" }}
                      className="eg-btn btn--primary2 btn--sm"
                    >
                      Apply Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentJobs;
