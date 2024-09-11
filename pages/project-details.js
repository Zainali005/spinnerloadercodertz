import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/index";
import { projectData } from "../data/index";

function ProjectDetails({ searchParams }) {
  const id = parseInt(searchParams?.id, 10);

  // Find the project based on the id
  const project = id ? projectData.find((item) => item.id === id) : null;

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <Layout>
      <Breadcrumb
        pageTitle="Project Details"
        pageName="Project Details"
        id="#project-details"
      />
      <div className="project-details-section pt-120" id="project-details">
        <div className="container">
          <div className="row justify-content-center gy-5">
            <div className="col-lg-7">
              <div className="proj-details-single">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                />
                <ul className="project-meta-list gap-3">
                  <li>
                    <div className="icon">
                      <img
                        src="assets/images/icons/client-icon.svg"
                        alt="Client icon"
                      />
                    </div>
                    <div className="text">
                      <h5>Client Name</h5>
                      <p>{project.client || "Client name not available"}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img
                        src="assets/images/icons/category-icon.svg"
                        alt="Category icon"
                      />
                    </div>
                    <div className="text">
                      <h5>Category</h5>
                      <p>{project.category}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img
                        src="assets/images/icons/calendar2.svg"
                        alt="Date icon"
                      />
                    </div>
                    <div className="text">
                      <h5>Complete Date</h5>
                      <p>{project.completionDate || "Date not available"}</p>
                    </div>
                  </li>
                </ul>
                <h4>{project.subtitle || "Project subtitle not available"}</h4>
                <p className="para">
                  {project.description || "Description not available"}
                </p>
                <div className="challenge-box">
                  <h4>Challenge During The Project</h4>
                  <p className="para">
                    {project.challenges || "Challenges not available"}
                  </p>
                  <ul className="challenge-list">
                    {project.challengeItems?.map((item, index) => (
                      <li key={index}>{item}</li>
                    )) || <li>No challenges listed</li>}
                  </ul>
                </div>
                <h4>How Does It Work?</h4>
                <p className="para mb-0">
                  {project.howItWorks || "How it works not available"}
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="proj-details-right">
                <div className="title-area">
                  <span>{project.category}</span>
                  <h2>Creative {project.category} for Your Business.</h2>
                </div>
                <p className="para">
                  When it comes to the tech industry, there are many different
                  paths you can follow. UX design, UI design, web development,
                  data analytics, and digital marketing all offer exciting,
                  fulfilling opportunities.
                </p>
                <p className="para">
                  {project.additionalInfo ||
                    "Additional information not available"}
                </p>
                <div className="proj-details-imgs">
                  <div className="row g-4">
                    {project.images?.map((img, index) => (
                      <div
                        key={index}
                        className="col-lg-6 col-md-6 col-sm-6 text-center"
                      >
                        <img
                          src={img}
                          className="img-fluid"
                          alt={`Project detail ${index + 1}`}
                        />
                      </div>
                    )) || <div>No images available</div>}
                  </div>
                </div>
                <h3>Client Feedback on This Project</h3>
                <div
                  className="testimonial-single hover-border1 wow fadeInDown"
                  data-wow-duration="1.5s"
                  data-wow-delay=".2s"
                >
                  <img
                    alt="Quote icon"
                    src="assets/images/icons/quote-icon.svg"
                    className="quote-icon"
                  />
                  <div className="testi-img">
                    <img alt="Client" src="assets/images/bg/testi11.png" />
                  </div>
                  <div className="testi-content">
                    <div className="testi-designation">
                      <h5>
                        <a href="#">Ronald Richards</a>
                      </h5>
                      <p>Co-Founder</p>
                    </div>
                    <p>
                      The Pacific Grove Chamber of Commerce would like to thank
                      eLab Communications and Mr. Will Elkadi for all the
                      efforts and suggestions that assisted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      searchParams: context.query,
    },
  };
}

export default ProjectDetails;
