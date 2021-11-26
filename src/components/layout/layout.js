/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

import styled from "styled-components"
import "../../styles/global.scss"
import "./layout.scss"
import Menu from "../menu/menu"
import Main from "./main"
import { ContextProviderComponent } from "../../utils/blobity.context"

const SiteContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.backgroundColor || "white"};
`

const Layout = ({ backgroundColor, children }) => {
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
    <ContextProviderComponent>
      <SiteContainer id="outer-container" backgroundColor={backgroundColor}>
        <Menu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          siteTitle={data.site.siteMetadata.title}
        />
        <Main>{children}</Main>
      </SiteContainer>
    </ContextProviderComponent>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
