import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import ActivitiesArea from "../components/activities/ActivitiesArea";
import Breadcrumb from "../components/common/Breadcrumb";
import OurPartner from "../components/common/OurPartner";
import Team1 from "../components/team/Team1";
import Testimonial1 from "../components/testimonial/Testimonial1";
import Layout from "../components/layout/index";
import About from "../components/about/About";

// Global styles for custom scrollbar
const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 12px; /* Width of the scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* Background of the scrollbar track */
  }

  ::-webkit-scrollbar-thumb {
    background: #06093b; /* Color of the scrollbar thumb */
    border-radius: 10px; /* Rounded corners */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #0a1f4d; /* Color of the scrollbar thumb on hover */
  }

  * {
    scrollbar-width: thin; /* Thin scrollbar */
    scrollbar-color: #06093b #f1f1f1; /* Thumb color and track color */
  }
`;

function about() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Breadcrumb pageName="About Us" pageTitle="About Us" id="#about" />
        <About />
        <Testimonial1 />
        <ActivitiesArea />
        <Team1 />
        <OurPartner />
      </Layout>
    </>
  );
}

export default about;
