import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import HomePage from "./Home";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "Home" })} />
      <HomePage></HomePage>
    </Layout>
  );
};

export default IndexPage;
