import React from "react"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import styled from "styled-components"

import { slide as Slidebar } from "react-burger-menu"

export const MenuMobile = () => {
  const supportedLocales = ["fr", "en"]

  const activeStyle = {
    color: "#c90000",
    fontWeight: "bold",
    borderBottom: "3px solid #c90000",
  }

  var stylesMenu = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#000",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#fff",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "block",
      color: "#000",
      padding: "0.8rem",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  }
  const { locale } = useIntl()

  const HeaderMobile = styled.div`
    a:hover,
    a:active {
      color: #c90000 !important;
      background-color: #fff;
      text-decoration: unset;
    }
  `

  const Languages = styled.div`
    display: flex;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    a {
      padding: 0.2rem;
      border-bottom: 3px solid #fff;
    }

    &.Active {
      background-color: #c90000;
      a {
        color: white;
      }
    }

    & > div:first-child {
      margin-right: 1rem;
    }
  `

  return (
    <HeaderMobile>
      <Slidebar
        id="stack"
        styles={stylesMenu}
        outerContainerId={"outer-container"}
      >
        <Link to="/" activeStyle={activeStyle}>
          <FormattedMessage id="Home" />
        </Link>
        <Link to="/resume/" activeStyle={activeStyle}>
          <FormattedMessage id="Resume" />
        </Link>
        {/* <Link to="/travel/" activeStyle={activeStyle}>
          <FormattedMessage id="Travel" />
        </Link> */}
        <Link to="/map/" activeStyle={activeStyle}>
          <FormattedMessage id="Map" />
        </Link>
        <Link to="/random/" activeStyle={activeStyle}>
          <FormattedMessage id="Random" />
        </Link>
        <div>
          <Languages>
            {supportedLocales.map(lng => (
              <div key={lng} className={lng === locale ? "Active" : ""}>
                <Link
                  style={{ textTransform: "upperCase" }}
                  changelocale={lng}
                  language={lng}
                >
                  {lng}
                </Link>
              </div>
            ))}
          </Languages>
        </div>
      </Slidebar>
    </HeaderMobile>
  )
}
