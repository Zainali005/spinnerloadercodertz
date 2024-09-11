import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import JoinOurTeam from "../components/common/JoinOurTeam";
import OurPartner from "../components/common/OurPartner";
import Layout from "../components/layout/index";

function JobList() {
  return (
    <>
      <Layout>
        <Breadcrumb pageTitle="Job List" pageName="Job List" id="#job-list" />
        <div className="job-section pb-120" id="job-list">
          <div className="container">
            <div className="row mt-50">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="documentation-tab-wrap">
                  <ul
                    className="nav nav-pills d-flex flex-row justify-content-center gap-3 mb-70"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-one-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-one"
                        type="button"
                        role="tab"
                        aria-controls="pills-one"
                        aria-selected="true"
                      >
                        All Job
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-two-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-two"
                        type="button"
                        role="tab"
                        aria-controls="pills-two"
                        aria-selected="false"
                      >
                        UI/UX
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-three-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-three"
                        type="button"
                        role="tab"
                        aria-controls="pills-three"
                        aria-selected="false"
                      >
                        Troubleshoot
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-four-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-four"
                        type="button"
                        role="tab"
                        aria-controls="pills-four"
                        aria-selected="false"
                      >
                        Wordpress
                      </button>
                    </li>
                  </ul>
                  <div
                    className="tab-content tab-content-shape"
                    id="pills-tabContent"
                  >
                    <div
                      className="tab-pane fade active show"
                      id="pills-one"
                      role="tabpanel"
                      aria-labelledby="pills-one-tab"
                    >
                      <div className="row justify-content-center g-4">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-12">
                          <div className="jobpost-item hover-border2">
                            <div className="job-header">
                              <div className="icon">
                                <img
                                  src="assets/images/icons/job-icon1.svg"
                                  alt="image"
                                />
                              </div>
                              <h4 className="title">
                                <Link href="/job-details">
                                  Ui/Ux Designer Wanted
                                </Link>
                              </h4>
                            </div>
                            <div className="job-body">
                              <p className="para">
                                We’re hiring Want craft the best social media
                                job vacancy or hiring post? Get inspired by
                                these examples.
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
                                <a className="eg-btn btn--primary2 btn--sm">
                                  Apply Now
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-12">
                          <div className="jobpost-item hover-border2">
                            <div className="job-header">
                              <div className="icon">
                                <img
                                  src="assets/images/icons/job-icon2.svg"
                                  alt="image"
                                />
                              </div>
                              <h4 className="title">
                                <Link href="/job-details">
                                  Frontend Developer
                                </Link>
                              </h4>
                            </div>
                            <div className="job-body">
                              <p className="para">
                                We’re hiring Want craft the best social media
                                job vacancy or hiring post? Get inspired by
                                these examples.
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
                                2 Days Ago
                              </div>
                              <Link href="/job-details">
                                <a className="eg-btn btn--primary2 btn--sm">
                                  Apply Now
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-12">
                          <div className="jobpost-item hover-border2">
                            <div className="job-header">
                              <div className="icon">
                                <img
                                  src="assets/images/icons/job-icon3.svg"
                                  alt="image"
                                />
                              </div>
                              <h4 className="title">
                                <Link href="/job-details">
                                  WordPress Developer
                                </Link>
                              </h4>
                            </div>
                            <div className="job-body">
                              <p className="para">
                                We’re hiring Want craft the best social media
                                job vacancy or hiring post? Get inspired by
                                these examples.
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
                                3 Days Ago
                              </div>
                              <Link href="/job-details">
                                <a className="eg-btn btn--primary2 btn--sm">
                                  Apply Now
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-12">
                          <div className="jobpost-item hover-border2">
                            <div className="job-header">
                              <div className="icon">
                                <img
                                  src="assets/images/icons/job-icon1.svg"
                                  alt="image"
                                />
                              </div>
                              <h4 className="title">
                                <Link href="/job-details">
                                  Ui/Ux Designer Wanted
                                </Link>
                              </h4>
                            </div>
                            <div className="job-body">
                              <p className="para">
                                We’re hiring Want craft the best social media
                                job vacancy or hiring post? Get inspired by
                                these examples.
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
                                <a className="eg-btn btn--primary2 btn--sm">
                                  Apply Now
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-12">
                          <div className="jobpost-item hover-border2">
                            <div className="job-header">
                              <div className="icon">
                                <img
                                  src="assets/images/icons/job-icon2.svg"
                                  alt="image"
                                />
                              </div>
                              <h4 className="title">
                                <Link href="/job-details">
                                  Frontend Developer
                                </Link>
                              </h4>
                            </div>
                            <div className="job-body">
                              <p className="para">
                                We’re hiring Want craft the best social media
                                job vacancy or hiring post? Get inspired by
                                these examples.
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
                                2 Days Ago
                              </div>
                              <Link href="/job-details">
                                <a className="eg-btn btn--primary2 btn--sm">
                                  Apply Now
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-12">
                          <div className="jobpost-item hover-border2">
                            <div className="job-header">
                              <div className="icon">
                                <img
                                  src="assets/images/icons/job-icon3.svg"
                                  alt="image"
                                />
                              </div>
                              <h4 className="title">
                                <Link href="/job-details">
                                  WordPress Developer
                                </Link>
                              </h4>
                            </div>
                            <div className="job-body">
                              <p className="para">
                                We’re hiring Want craft the best social media
                                job vacancy or hiring post? Get inspired by
                                these examples.
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
                                3 Days Ago
                              </div>
                              <Link href="/job-details">
                                <a className="eg-btn btn--primary2 btn--sm">
                                  Apply Now
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-two"
                      role="tabpanel"
                      aria-labelledby="pills-two-tab"
                    >
                      <div className="row justify-content-center g-4">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-12">
                          <div className="jobpost-item hover-border2">
                            <div className="job-header">
                              <div className="icon">
                                <img
                                  src="assets/images/icons/job-icon1.svg"
                                  alt="image"
                                />
                              </div>
                              <h4 className="title">
                                <Link href="/job-details">
                                  Ui/Ux Designer Wanted
                                </Link>
                              </h4>
                            </div>
                            <div className="job-body">
                              <p className="para">
                                We’re hiring Want craft the best social media
                                job vacancy or hiring post? Get inspired by
                                these examples.
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
                                <a className="eg-btn btn--primary2 btn--sm">
                                  Apply Now
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-12">
                          <div className="jobpost-item hover-border2">
                            <div className="job-header">
                              <div className="icon">
                                <img
                                  src="assets/images/icons/job-icon2.svg"
                                  alt="image"
                                />
                              </div>
                              <h4 className="title">
                                <Link href="/job-details">
                                  Frontend Developer
                                </Link>
                              </h4>
                            </div>
                            <div className="job-body">
                              <p className="para">
                                We’re hiring Want craft the best social media
                                job vacancy or hiring post? Get inspired by
                                these examples.
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
                                2 Days Ago
                              </div>
                              <Link href="/job-details">
                                <a className="eg-btn btn--primary2 btn--sm">
                                  Apply Now
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-12">
                          <div className="jobpost-item hover-border2">
                            <div className="job-header">
                              <div className="icon">
                                <img
                                  src="assets/images/icons/job-icon3.svg"
                                  alt="image"
                                />
                              </div>
                              <h4 className="title">
                                <Link href="/job-details">
                                  WordPress Developer
                                </Link>
                              </h4>
                            </div>
                            <div className="job-body">
                              <p className="para">
                                We’re hiring Want craft the best social media
                                job vacancy or hiring post? Get inspired by
                                these examples.
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
                                3 Days Ago
                              </div>
                              <Link href="/job-details">
                                <a className="eg-btn btn--primary2 btn--sm">
                                  Apply Now
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-12">
                          <div className="jobpost-item hover-border2">
                            <div className="job-header">
                              <div className="icon">
                                <img
                                  src="assets/images/icons/job-icon2.svg"
                                  alt="image"
                                />
                              </div>
                              <h4 className="title">
                                <Link href="/job-details">
                                  Frontend Developer
                                </Link>
                              </h4>
                            </div>
                            <div className="job-body">
                              <p className="para">
                                We’re hiring Want craft the best social media
                                job vacancy or hiring post? Get inspired by
                                these examples.
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
                                2 Days Ago
                              </div>
                              <Link href="/job-details">
                                <a className="eg-btn btn--primary2 btn--sm">
                                  Apply Now
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-three"
                      role="tabpanel"
                      aria-labelledby="pills-three-tab"
                    >
                      <div className="row justify-content-center g-4">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-12">
                          <div className="jobpost-item hover-border2">
                            <div className="job-header">
                              <div className="icon">
                                <img
                                  src="assets/images/icons/job-icon2.svg"
                                  alt="image"
                                />
                              </div>
                              <h4 className="title">
                                <Link href="/job-details">
                                  Frontend Developer
                                </Link>
                              </h4>
                            </div>
                            <div className="job-body">
                              <p className="para">
                                We’re hiring Want craft the best social media
                                job vacancy or hiring post? Get inspired by
                                these examples.
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
                                2 Days Ago
                              </div>
                              <Link href="/job-details">
                                <a className="eg-btn btn--primary2 btn--sm">
                                  Apply Now
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-12">
                          <div className="jobpost-item hover-border2">
                            <div className="job-header">
                              <div className="icon">
                                <img
                                  src="assets/images/icons/job-icon2.svg"
                                  alt="image"
                                />
                              </div>
                              <h4 className="title">
                                <Link href="/job-details">
                                  Frontend Developer
                                </Link>
                              </h4>
                            </div>
                            <div className="job-body">
                              <p className="para">
                                We’re hiring Want craft the best social media
                                job vacancy or hiring post? Get inspired by
                                these examples.
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
                                2 Days Ago
                              </div>
                              <Link href="/job-details">
                                <a className="eg-btn btn--primary2 btn--sm">
                                  Apply Now
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-four"
                      role="tabpanel"
                      aria-labelledby="pills-four-tab"
                    >
                      <div className="row justify-content-center g-4">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-12">
                          <div className="jobpost-item hover-border2">
                            <div className="job-header">
                              <div className="icon">
                                <img
                                  src="assets/images/icons/job-icon1.svg"
                                  alt="image"
                                />
                              </div>
                              <h4 className="title">
                                <Link href="/job-details">
                                  Ui/Ux Designer Wanted
                                </Link>
                              </h4>
                            </div>
                            <div className="job-body">
                              <p className="para">
                                We’re hiring Want craft the best social media
                                job vacancy or hiring post? Get inspired by
                                these examples.
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
                                <a className="eg-btn btn--primary2 btn--sm">
                                  Apply Now
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <JoinOurTeam btnclass="btn--primary" />
        <OurPartner />
      </Layout>
    </>
  );
}

export default JobList;
