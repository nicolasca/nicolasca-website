/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/global.css"
import Header from "./header"

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
    <div
      style={{
        position: "relative",
        display: "flex",
      }}
    >
      <div
        style={{
          minWidth: "300px",
          maxWidth: "300px",
          position: "fixed",
          height: "100vh",
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>
      <main
        style={{
          marginLeft: "300px",
          height: "100vh",
          width: "calc(100vw - 300px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 0,
        }}
      >
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
