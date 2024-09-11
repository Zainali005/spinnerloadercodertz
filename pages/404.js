import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Error from "../components/error/Error";
import Layout from "../components/layout/index";

function Custom404() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Error" pageTitle="Error" id="#error" />
        <Error />
      </Layout>
    </>
  );
}

export default Custom404;
