import React from "react";
import Link from "next/link";
function Service3() {
  return (
    <>
      <div className="service3-section">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item3 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <img src="assets/images/icons/service31.svg" alt="image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/service-details">Content Writer</Link>
                  </h4>
                  <p className="para">
                    Get the most reduction in your team’s operation casts for
                    the whole.
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more-icon">
                    <i className="bi bi-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item3 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <img src="assets/images/icons/service32.svg" alt="image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/service-details">Website Devolopment</Link>
                  </h4>
                  <p className="para">
                    We have the technology &amp; industry stw expertise to
                    solutions and execution.
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more-icon">
                    <i className="bi bi-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item3 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".6s"
              >
                <div className="icon">
                  <img src="assets/images/icons/service33.svg" alt="image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/service-details">Creative Design</Link>
                  </h4>
                  <p className="para">
                    Get the most reduction in your team’s operation casts for
                    the whole.
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more-icon">
                    <i className="bi bi-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div
                className="service-item3 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".8s"
              >
                <div className="icon">
                  <img src="assets/images/icons/service34.svg" alt="image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/service-details">Web Security</Link>
                  </h4>
                  <p className="para">
                    We have the technology &amp; industry stw expertise to
                    solutions and execution
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more-icon">
                    <i className="bi bi-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service3;
