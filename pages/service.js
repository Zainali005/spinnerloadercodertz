import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import JoinOurTeam from "../components/common/JoinOurTeam";
import OurPartner from "../components/common/OurPartner";
import { serviceData, chooseUsdata } from "../data/index";
import Layout from "../components/layout/index";

function service() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Services" pageTitle="Services" id="#service" />
        <div className="service-section2 pt-120" id="service">
          <div className="container">
            <div className="row justify-content-center g-4">
              {serviceData.map((item) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-10" key={item.id}>
                    <div
                      className="service-item1 wow fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.2s"
                    >
                      <div className="service-img">
                        <Link onClick={scrollTop} href="/service-details">
                          <a
                            className="service-details-btn"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src="assets/images/icons/arrow.svg"
                              alt="image"
                            />
                          </a>
                        </Link>
                        <img alt="image" src={item.image} />
                        <div className="overlay" />
                      </div>
                      <div className="service-content">
                        <div className="service-icon">
                          <img src={item.icon} alt="image" />
                        </div>
                        <h4>
                          <Link onClick={scrollTop} href="/service-details">
                            {item.title}
                          </Link>
                        </h4>
                        <p className="para">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row justify-content-center mar-tp-50">
              <div className="col-md-6 text-center">
                <Link href="/contact" onClick={scrollTop}>
                  <a className="eg-btn btn--primary btn--lg"> Get Started</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-section pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="section-title primary1">
                  <span>-Free Bonus-</span>
                  <h3>Why You Should Choose Us</h3>
                  <p className="para">
                    Get the most of reduction in your team’s operating costs for
                    the whole product which creates amazing UI/UX experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center g-4">
              {chooseUsdata.map((item) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-10" key={item.id}>
                    <div
                      className="service-item2 style-4 wow fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.2s"
                    >
                      <div className="service-content">
                        <span className="sn">{item.itemNumber}</span>
                        <h4>
                          <Link href="service-details">{item.title}</Link>
                        </h4>
                        <p className="para">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <JoinOurTeam btnclass="btn--primary" />
        <OurPartner />
      </Layout>
    </>
  );
}

export default service;
