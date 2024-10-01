// pages/products-details/[slug].js
import ServiceDetails from "../../components/ServiceDetails";

const servicesData = {
  "product-development": {
    name: "Product Development",
    title: "Explore Our Product Development Services",
    description: "We offer a wide range of product development services...",
    relatedServices: [
      { name: "Website Development", slug: "website-development" },
      { name: "App Development", slug: "app-development" },
      // add more services here
    ],
  },
  // Define more services here
};

export const getStaticPaths = async () => {
  const paths = Object.keys(servicesData).map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const service = servicesData[params.slug];

  return {
    props: {
      service,
    },
  };
};

const ServicePage = ({ service }) => {
  return <ServiceDetails service={service} />;
};

export default ServicePage;
