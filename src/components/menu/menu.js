import { Link, useIntl, FormattedMessage } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { MenuDesktop } from "./MenuDesktop.component"
import { MenuMobile } from "./MenuMobile.component"

const MenuDesktopWrapper = styled.div`
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MenuMobileWrapper = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

const supportedLocales = ["fr", "en"]
const Menu = () => {
  return (
    <>
      <MenuDesktopWrapper>
        <MenuDesktop />
      </MenuDesktopWrapper>
      <MenuMobileWrapper>
        <MenuMobile />
      </MenuMobileWrapper>
    </>
  )
}

Menu.propTypes = {
  siteTitle: PropTypes.string,
}
Menu.defaultProps = {
  siteTitle: ``,
}
export default Menu
