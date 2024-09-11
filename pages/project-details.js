import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import OurPartner from "../components/common/OurPartner";
import { projectData } from "../data/index";
import Layout from "../components/layout/index";
function ProjectDetails() {
  return (
    <>
      <Layout>
        <Breadcrumb
          pageTitle="Project Details"
          pageName="Project Details"
          id="#project-details"
        />
        <div className="project-details-section pt-120" id="project-details">
          <div className="container">
            <div className="row justify-contenet-center gy-5">
              <div className="col-lg-7">
                <div className="proj-details-single">
                  <img
                    src="assets/images/bg/proj-details.png"
                    alt="image"
                    className="img-fluid"
                  />
                  <ul className="project-meta-list gap-3">
                    <li>
                      <div className="icon">
                        <img
                          src="assets/images/icons/client-icon.svg"
                          alt="image"
                        />
                      </div>
                      <div className="text">
                        <h5>Client Name</h5>
                        <p>Sara Watson</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img
                          src="assets/images/icons/category-icon.svg"
                          alt="image"
                        />
                      </div>
                      <div className="text">
                        <h5>Category</h5>
                        <p>Branding, Ui/Ux</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img
                          src="assets/images/icons/calendar2.svg"
                          alt="image"
                        />
                      </div>
                      <div className="text">
                        <h5>Complete Date</h5>
                        <p>25 January 2022</p>
                      </div>
                    </li>
                  </ul>
                  <h4>
                    The UX design process consists user research, wireframing
                    and prototyping, and user testing.
                  </h4>
                  <p className="para">
                    Let’s imagine an e-commerce startup—we’ll call it Beautify.
                    Beautify creates their own all-natural cosmetics and sells
                    them online via their website. Some of the key team members
                    behind this small but successful startup include a UX
                    designer, a UI designer, a web developer, a data analyst,
                    and a digital marketer.
                  </p>
                  <div className="challenge-box">
                    <h4>Challenge During The Project</h4>
                    <p className="para">
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commod conse quat. Duis aute irure dolor in repreh
                      enderit in voluptate velit esse cillum dolore education
                      level of volatility.
                    </p>
                    <ul className="challenge-list">
                      <li>
                        Analyzing research data and identifying trends and
                        patterns
                      </li>
                      <li>Conducting usability testing sessions with users</li>
                      <li>Amazing Timing and Experience</li>
                      <li>
                        Gathering user feedback through surveys and
                        questionnaires
                      </li>
                    </ul>
                  </div>
                  <h4>How Works It?</h4>
                  <p className="para mb-0">
                    Ompanies and investors grapple with changing conditions
                    constantly, but our re search points to an unusual level of
                    volatility in the decades ahead. To understand why, we look
                    at the three major forces that will shape the 2020.with
                    changing conditions constantly.
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="proj-details-right">
                  <div className="title-area">
                    <span>Ui/Ux Design</span>
                    <h2>Creative Ui/Ux Design for Your Business.</h2>
                  </div>
                  <p className="para">
                    When it comes to the tech industry, there are many different
                    paths you can follow. UX design, UI design, web development,
                    data analytics, and digital marketing UX design, UI design
                    all offer exciting, fulfilling.
                  </p>
                  <p className="para">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commod consequat. Duis aute irure dolor in repreh enderit
                    in voluptate velit esse cillum dolore eu{" "}
                  </p>
                  <div className="proj-details-imgs">
                    <div className="row g-4">
                      <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                        <img
                          src="assets/images/bg/project-d1.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                        <img
                          src="assets/images/bg/project-d2.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <h3>Client Feedback This Project</h3>
                  <div
                    className="testimonial-single hover-border1 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <img
                      alt="image"
                      src="assets/images/icons/quote-icon.svg"
                      className="quote-icon"
                    />
                    <div className="testi-img">
                      <img alt="image" src="assets/images/bg/testi11.png" />
                    </div>
                    <div className="testi-content">
                      <div className="testi-designation">
                        <h5>
                          <a href="#">Ronald Richards</a>
                        </h5>
                        <p>Co Founder</p>
                      </div>
                      <p>
                        The Pacific Grove Chamber of Commerce would like to
                        thank eLab Communications and Mr. Will Elkadi for all
                        the efforts and suggestions that assisted.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-section pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="section-title primary5">
                  <span>-Related Projects-</span>
                  <h3>Best Work Showcase</h3>
                  <p className="para">
                    Get the most of reduction in your team’s operating costs for
                    the whole product which creates amazing UI/UX experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="row position-relative justify-content-center g-4">
              {projectData.slice(0, 3).map((item) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div
                        className="portfolio-item1 wow fadeInDown"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.2s"
                      >
                        <div className="portfolio-img">
                          <img alt="image" src={item.image} />
                        </div>
                        <div className="portfolio-content">
                          <span>{item.category}</span>
                          <h4>
                            <Link href="/project-details">{item.title}</Link>
                          </h4>
                          <>
                            <Link href="/project-details" className="text-btn">
                              Live Preview
                            </Link>
                            <>
                              <svg
                                width={18}
                                height={10}
                                viewBox="0 0 18 10"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M11.1818 1.38021V5V8.61979C11.1818 8.78083 11.3624 8.87583 11.4951 8.7846L17 5L11.4951 1.2154C11.3624 1.12417 11.1818 1.21917 11.1818 1.38021Z" />
                                <path d="M1 4.5C0.723858 4.5 0.5 4.72386 0.5 5C0.5 5.27614 0.723858 5.5 1 5.5V4.5ZM11.4951 1.2154L11.2119 1.62742L11.2119 1.62742L11.4951 1.2154ZM17 5L17.2833 5.41202L17.8826 5L17.2833 4.58798L17 5ZM11.4951 8.7846L11.2119 8.37258L11.2119 8.37258L11.4951 8.7846ZM1 5.5H11.1818V4.5H1V5.5ZM11.6818 5V1.38021H10.6818V5H11.6818ZM11.2119 1.62742L16.7167 5.41202L17.2833 4.58798L11.7784 0.803376L11.2119 1.62742ZM16.7167 4.58798L11.2119 8.37258L11.7784 9.19662L17.2833 5.41202L16.7167 4.58798ZM11.6818 8.61979V5H10.6818V8.61979H11.6818ZM11.2119 8.37258C11.4109 8.23573 11.6818 8.37824 11.6818 8.61979H10.6818C10.6818 9.18342 11.3139 9.51593 11.7784 9.19662L11.2119 8.37258ZM11.6818 1.38021C11.6818 1.62176 11.4109 1.76427 11.2119 1.62742L11.7784 0.803377C11.3139 0.484066 10.6818 0.81658 10.6818 1.38021H11.6818Z" />
                              </svg>
                            </>
                          </>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <OurPartner />
      </Layout>
    </>
  );
}

export default ProjectDetails;
