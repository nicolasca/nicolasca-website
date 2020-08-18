/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../../styles/global.scss";
import "./layout.scss";
import Menu from "../menu/menu";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div id="outer-container" className="site-container">
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        siteTitle={data.site.siteMetadata.title}
      />
      <main id="page-wrap">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
