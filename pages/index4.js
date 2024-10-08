import React, { useEffect, useState } from "react";
import Head from "next/head";
import About4 from "../components/about/About4";
import Banner4 from "../components/banner/Banner4";
import Faq4 from "../components/faq/Faq4";
import Feature4 from "../components/feature/Feature4";
import Footer from "../components/footer/Footer";
import Header4 from "../components/header/Header4";
import Sponsore4 from "../components/home4/Sponsore4";
import Portfolio4 from "../components/portfolio/Portfolio4";
import Service4 from "../components/service/Service4";
import Team4 from "../components/team/Team4";
import Testimonial4 from "../components/testimonial/Testimonial4";
import Preloader from "../components/common/Preloader";
import Header from "../components/header/Header";

function Home4() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <>
      {!loading ? (
        <Preloader style="home4preloader" />
      ) : (
        <>
          <Head>
            <title> CodeErtz - Evolve bit by bit</title>
            <meta name="description" content="Generated by create next app" />
          </Head>
          <Header />
          <Banner4 />
          <Sponsore4 />
          <About4 />
          <Service4 />
          <Portfolio4 />
          <Feature4 />
          <Team4 />
          <Testimonial4 />
          <Faq4 />
          <Footer
            footerStyle="style-4"
            footerImage="assets/images/icons/footer4-logo.svg"
          />
        </>
      )}
    </>
  );
}

export default Home4;
