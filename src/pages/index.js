import React from "react";
import HomePage from "./Home";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title={t("Home")} />
      <HomePage></HomePage>
    </Layout>
  );
};

export default IndexPage;
