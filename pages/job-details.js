import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import JoinOurTeam from "../components/common/JoinOurTeam";
import Layout from "../components/layout/index";

function JobDetails() {
  return (
    <>
      <Layout>
        <Breadcrumb pageTitle="Career" pageName="Career" id="#job-details" />
        <div className="job-details-section pt-120 pb-120" id="job-details">
          <div className="container">
            <div className="row d-flex justify-content-center gy-5">
              <div className="col-lg-6">
                <div className="job-details-wrap">
                  <h3>UX Researcher Job Description</h3>
                  <p className="para mb-4">
                    A UX Researcher is a professional who systematically studies
                    target users to collect and analyze data that will help
                    inform the product design process.
                  </p>
                  <h4>Job brief :</h4>
                  <p className="para">
                    We are looking for a UX Researcher to join our team and
                    implement various UX designs into our programs and computer
                    systems based on the need of users to ensure customers have
                    an enjoyable experience when using our products.{" "}
                  </p>
                  <p className="para mb-4">
                    UX Researcher responsibilities include conducting user
                    research and working with the design team to implement
                    design choices to improve user experience.
                  </p>
                  <h4>Responsibilities :</h4>
                  <ul className="about-list">
                    <li>Price of additional materials or parts (if needed)</li>
                    <li>
                      Transportation cost for carrying new materials/parts
                    </li>
                    <li>Interpreting services is our specialty</li>
                  </ul>
                  <h4>Software Skill’s :</h4>
                  <p className="para">
                    Adobe Photoshop, Illustrator, Figma, Adobe XD, Sketch etc{" "}
                  </p>
                  <h4>Salary :</h4>
                  <p className="para">25K to 100k </p>
                  <h4>Job Type :</h4>
                  <p className="para">Remote/ Office</p>
                  <h4>Location :</h4>
                  <p className="para">House#01, Road#05, XYZ</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="apply-form">
                  <div className="apply-form-title">
                    <h4>Apply for a Position:</h4>
                    <p>
                      Please complete the form below to apply for a position :
                    </p>
                  </div>
                  <form>
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-inner">
                          <input
                            type="text"
                            name="fname"
                            placeholder="Your Name:"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-inner">
                          <input
                            type="text"
                            name="fname"
                            placeholder="Phone Number:"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <input
                            type="text"
                            name="fname"
                            placeholder="Typing for Position :"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <input
                            type="text"
                            name="fname"
                            placeholder="Experience:"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <textarea
                            name="message"
                            cols={30}
                            rows={6}
                            placeholder="Cover Letter :"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <label htmlFor="cv" className="mb-3">
                            Upload Resume :
                          </label>
                          <input type="file" />
                        </div>
                      </div>
                      <div className="col-lg-12 text-center">
                        <input
                          type="submit"
                          defaultValue="Send Now"
                          className="eg-btn btn--submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <JoinOurTeam btnclass="btn--primary" />
      </Layout>
    </>
  );
}

export default JobDetails;
