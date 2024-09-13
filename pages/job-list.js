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
                <h3 className="text-center">No job opening currently</h3>
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
