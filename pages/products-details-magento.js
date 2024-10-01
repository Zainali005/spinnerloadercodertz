import Link from "next/link";
import React, { useState } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import JoinOurTeam from "../components/common/JoinOurTeam";
import OurPartner from "../components/common/OurPartner";
import Layout from "../components/layout/index";

function ServiceDetailsProduct() {
  // Set default active tab to "Magento"
  const [activeTab, setActiveTab] = useState("Magento");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Layout>
        <Breadcrumb
          pageName="Services Details Magento"
          pageTitle="Services Details"
          id="#service-details"
        />
        <div className="service-details pt-120 pb-120" id="service-details">
          <div className="container">
            <div className="row justify-content-center g-4">
              <div className="col-lg-4">
                <div className="service-sidebar">
                  <div className="service-widget service-list-area">
                    <h4 className="sidebar-title">All Services</h4>
                    <ul className="service-list">
                      {[
                        {
                          name: "Product Development",
                          href: "/products-details-product",
                        },
                        {
                          name: "Website Development",
                          href: "/products-details-website",
                        },
                        {
                          name: "iOS/Android App Development",
                          href: "/products-details-app",
                        },
                        { name: "ML Models", href: "/products-details-models" },
                        {
                          name: "LLM Chatbots",
                          href: "/products-details-chatbots",
                        },
                        { name: "DevOps", href: "/products-details-devOps" },
                        { name: "UI/UX", href: "/products-details-ui" },
                        {
                          name: "WordPress",
                          href: "/products-details-wordpress",
                        },
                        { name: "Magento", href: "/products-details-magento" },
                        {
                          name: "Shopify/WooCommerce",
                          href: "/products-details-shopify",
                        },
                      ].map((service) => (
                        <li key={service.name}>
                          <Link href={service.href}>
                            <a
                              onClick={() => handleTabClick(service.name)}
                              style={{
                                color:
                                  activeTab === service.name
                                    ? "#06093B"
                                    : "#49D0C4",
                                fontWeight:
                                  activeTab === service.name
                                    ? "bold"
                                    : "normal",
                              }}
                            >
                              {service.name}
                            </a>
                          </Link>
                          <svg
                            width={20}
                            height={16}
                            viewBox="0 0 20 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12.7496 15.4594C12.4954 15.4594 ..." />
                          </svg>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="service-details-area">
                  <img
                    src="assets/images/bg/magento.png"
                    className="img-fluid"
                    alt="image"
                  />
                  <h3>Explore Our Comprehensive Magento Services</h3>
                  <p className="para">
                    Our team offers a wide range of Magento services designed to
                    meet the evolving needs of businesses in today&apos;s
                    fast-paced digital environment. From theme customization and
                    module development to website optimization and maintenance,
                    we provide solutions that enhance your online presence and
                    drive engagement.
                  </p>
                  <p className="para">
                    Whether you are looking to build a new Magento site,
                    redesign your existing one, or streamline your e-commerce
                    processes, our experts are here to deliver top-notch service
                    tailored to your goals.
                  </p>
                  <p className="para mb-30">
                    With this in mind, is there a place for older developers in
                    the workforce? Is it too late to change into this field once
                    you&apos;re 30 or above?
                  </p>
                  <h3 className="service-subtitle">
                    From Idea to Magento Implementation
                  </h3>
                  <p className="para mb-40">
                    Let&apos;s imagine a Magento startup—we&apos;ll call it
                    Beautify. Beautify develops all-natural cosmetics and uses
                    Magento to create an engaging online store that focuses on
                    user experience. Some of the key team members behind this
                    small but successful startup include a product manager, a
                    Magento developer, a front-end developer, a data analyst,
                    and a digital marketer.
                  </p>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <h3 className="service-subtitle">Planning Project</h3>
                      <ul className="proj-planlist">
                        <li>
                          <svg
                            width={24}
                            height={11}
                            viewBox="0 0 24 11"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.9995 0.454667V5.50002V10.5454C16.9995 10.7194 17.2064 10.8104 17.3347 10.6928L22.9995 5.50002L17.3347 0.307236C17.2064 0.189646 16.9995 0.280646 16.9995 0.454667Z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.8217 1.32396V9.67604L22.5347 5.5L17.8217 1.32396ZM16.8316 0.671268C16.8316 0.0883502 17.5485 -0.216486 17.993 0.177416L24 5.5L17.993 10.8226C17.5485 11.2165 16.8316 10.9117 16.8316 10.3287V5.97853H0.49506C0.221646 5.97853 0 5.76429 0 5.5C0 5.23571 0.221646 5.02147 0.49506 5.02147H16.8316V0.671268Z"
                            />
                          </svg>
                          Analyzing research data and identifying.
                        </li>
                        <li>
                          <svg
                            width={24}
                            height={11}
                            viewBox="0 0 24 11"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.9995 0.454667V5.50002V10.5454C16.9995 10.7194 17.2064 10.8104 17.3347 10.6928L22.9995 5.50002L17.3347 0.307236C17.2064 0.189646 16.9995 0.280646 16.9995 0.454667Z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.8217 1.32396V9.67604L22.5347 5.5L17.8217 1.32396ZM16.8316 0.671268C16.8316 0.0883502 17.5485 -0.216486 17.993 0.177416L24 5.5L17.993 10.8226C17.5485 11.2165 16.8316 10.9117 16.8316 10.3287V5.97853H0.49506C0.221646 5.97853 0 5.76429 0 5.5C0 5.23571 0.221646 5.02147 0.49506 5.02147H16.8316V0.671268Z"
                            />
                          </svg>
                          Conducting usability testing sessions.
                        </li>
                        <li>
                          <svg
                            width={24}
                            height={11}
                            viewBox="0 0 24 11"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.9995 0.454667V5.50002V10.5454C16.9995 10.7194 17.2064 10.8104 17.3347 10.6928L22.9995 5.50002L17.3347 0.307236C17.2064 0.189646 16.9995 0.280646 16.9995 0.454667Z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.8217 1.32396V9.67604L22.5347 5.5L17.8217 1.32396ZM16.8316 0.671268C16.8316 0.0883502 17.5485 -0.216486 17.993 0.177416L24 5.5L17.993 10.8226C17.5485 11.2165 16.8316 10.9117 16.8316 10.3287V5.97853H0.49506C0.221646 5.97853 0 5.76429 0 5.5C0 5.23571 0.221646 5.02147 0.49506 5.02147H16.8316V0.671268Z"
                            />
                          </svg>
                          Amazing Timing and Experience.
                        </li>
                        <li>
                          <svg
                            width={24}
                            height={11}
                            viewBox="0 0 24 11"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.9995 0.454667V5.50002V10.5454C16.9995 10.7194 17.2064 10.8104 17.3347 10.6928L22.9995 5.50002L17.3347 0.307236C17.2064 0.189646 16.9995 0.280646 16.9995 0.454667Z" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.8217 1.32396V9.67604L22.5347 5.5L17.8217 1.32396ZM16.8316 0.671268C16.8316 0.0883502 17.5485 -0.216486 17.993 0.177416L24 5.5L17.993 10.8226C17.5485 11.2165 16.8316 10.9117 16.8316 10.3287V5.97853H0.49506C0.221646 5.97853 0 5.76429 0 5.5C0 5.23571 0.221646 5.02147 0.49506 5.02147H16.8316V0.671268Z"
                            />
                          </svg>
                          Gathering user feedback through surveys.
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <img
                        src="assets/images/bg/service-details2.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="work-process-area">
                    <h3 className="service-subtitle text-center">
                      Work Process
                    </h3>
                    <div className="row g-4">
                      <div className="col-md-3 col-sm-6">
                        <div className="work-process-item">
                          <img
                            src="assets/images/icons/work-procs1.svg"
                            alt="image"
                          />
                          <h4>Research</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="work-process-item">
                          <img
                            src="assets/images/icons/work-procs2.svg"
                            alt="image"
                          />
                          <h4>Idea</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="work-process-item">
                          <img
                            src="assets/images/icons/work-procs3.svg"
                            alt="image"
                          />
                          <h4>Develop</h4>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6">
                        <div className="work-process-item">
                          <img
                            src="assets/images/icons/work-procs4.svg"
                            alt="image"
                          />
                          <h4>Launch</h4>
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

export default ServiceDetailsProduct;
