import React from "react";
import HomePage from "./Home";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { useIntl } from "gatsby-plugin-react-intl";

const IndexPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <SEO title={intl.formatMessage({id: "Home"})} />
      <HomePage></HomePage>
    </Layout>
  );
};

export default IndexPage;
