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
import Menu from "../menu/Menu";
import { useState } from "react";

const Layout = ({ children }) => {
  const [activeBurger, setActiveBurger] = useState(false);

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
    <div className="site-container">
      <div
        className={"burger " + (activeBurger ? "active " : "")}
        onClick={() => setActiveBurger(!activeBurger)}
      >
        <span className="burger-global burger-top"></span>
        <span className="burger-global burger-middle"></span>
        <span className="burger-global burger-bottom"></span>
      </div>

      <div className={"menu " + (activeBurger ? "open" : "")}>
        <Menu siteTitle={data.site.siteMetadata.title} />
      </div>
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
