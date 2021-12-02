/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

import styled from "styled-components"
import Menu from "../menu/menu"
import Main from "./main"
import {
  BlobityContext,
  ContextProviderComponent,
} from "../../utils/blobity.context"
import GlobalStyle from "../../styles/Global"

const SiteContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.fontColor || "black"};
  background-color: var(--background);
`

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

  const blobityContext = useContext(BlobityContext)

  return (
    <ContextProviderComponent>
      <GlobalStyle />
      <SiteContainer id="outer-container" theme={blobityContext.data.theme}>
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
