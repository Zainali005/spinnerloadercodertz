import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import AddressArea from "../components/contact/AddressArea";
import ContactForm from "../components/contact/ContactForm";
import Layout from "../components/layout/index";

function contact() {
  return (
    <>
      <Layout>
        <Breadcrumb
          pageName="Contact Us"
          pageTitle="Contact Us"
          id="#contact"
        />
        <AddressArea />
        <ContactForm />
      </Layout>
    </>
  );
}

export default contact;
