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
                  <h3>Job Description</h3>
                  <p className="para mb-4">
                    We are looking for a highly skilled and motivated individual
                    to join our team. The successful candidate will be
                    responsible for contributing to various projects, working in
                    a collaborative environment, and bringing innovative
                    solutions to the table.
                  </p>
                  <h4>Job brief :</h4>
                  <p className="para">
                    As a team member, you will work closely with other
                    professionals to deliver high-quality results. You will be
                    involved in all phases of the project, from concept to
                    execution, ensuring that the final product meets both client
                    and company standards.
                  </p>
                  <p className="para mb-4">
                    Responsibilities include working on multiple projects,
                    collaborating with cross-functional teams, and adapting to
                    fast-paced changes in a dynamic work environment.
                  </p>
                  <h4>Responsibilities :</h4>
                  <ul className="about-list">
                    <li>
                      Collaborate with team members to ensure timely project
                      delivery
                    </li>
                    <li>Develop and implement project strategies</li>
                    <li>
                      Maintain high-quality work standards and attention to
                      detail
                    </li>
                    <li>
                      Manage client expectations and ensure customer
                      satisfaction
                    </li>
                  </ul>
                  <h4>Required Skills :</h4>
                  <p className="para">
                    Excellent communication, problem-solving, and time
                    management skills. Familiarity with project management tools
                    and software is a plus.
                  </p>
                  <h4>Salary :</h4>
                  <p className="para">Competitive and based on experience</p>
                  <h4>Job Type :</h4>
                  <p className="para">Full-Time/ Part-Time/ Remote</p>
                  <h4>Location :</h4>
                  <p className="para">Defence Avenue Mall, DHA 1, Islamabad</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="apply-form">
                  <div className="apply-form-title">
                    <h4>Apply for a Position:</h4>
                    <p>
                      Please complete the form below to apply for a position:
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
                            name="phone"
                            placeholder="Phone Number:"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <input
                            type="text"
                            name="position"
                            placeholder="Applying for Position:"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <input
                            type="text"
                            name="experience"
                            placeholder="Experience:"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <textarea
                            name="coverLetter"
                            cols={30}
                            rows={6}
                            placeholder="Cover Letter:"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <label htmlFor="cv" className="mb-3">
                            Upload Resume:
                          </label>
                          <input type="file" name="resume" />
                        </div>
                      </div>
                      <div className="col-lg-12 text-center">
                        <input
                          type="submit"
                          value="Send Now"
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
