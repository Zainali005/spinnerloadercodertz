import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Team from "../components/team/Team";
import Layout from "../components/layout/index";

function team() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Team" pageTitle="Team" id="#team" />
        <Team />
      </Layout>
    </>
  );
}

export default team;
