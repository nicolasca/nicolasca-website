/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../styles/global.css";
import Header from './header';


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{
      position: 'relative'
    }}>
      <div style={{
        width: '320px',
        maxWidth: '400px',
        position: 'fixed',
        height: '100vh',
      }}>
        <Header siteTitle={data.site.siteMetadata.title} />

      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: `0 auto`,
          maxWidth: 1360,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
