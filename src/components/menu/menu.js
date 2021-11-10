import { Link, useIntl, FormattedMessage } from "gatsby-plugin-intl";
import PropTypes from "prop-types";
import React from "react";
import {
  MenuDesktop as MenuDesktopWrapper,
  MenuMobile as MenuMobileWrapper,
  Header,
  HeaderMobile,
  LeftSection,
  Languages,
  Active,
} from "./Menu.module.scss";
import { slide as Slidebar } from "react-burger-menu";

const activeStyle = {
  color: "#c90000",
  fontWeight: "bold",
};
const supportedLocales = ["fr", "en"];
const Menu = () => {
  return (
    <>
      <div className={MenuDesktopWrapper}>
        <MenuDesktop />
      </div>
      <div className={MenuMobileWrapper}>
        <MenuMobile />
      </div>
    </>
  );
};
const MenuDesktop = () => {
  const { locale } = useIntl();
  return (
    <header className={Header}>
      <div className={LeftSection}>
        <div>
          <Link to="/" activeStyle={activeStyle}>
            <FormattedMessage id="Home" />
          </Link>
        </div>
        <div>
          <Link to="/resume/" activeStyle={activeStyle}>
            <FormattedMessage id="Resume" />
          </Link>
        </div>
        <div>
          <Link to="/map/" activeStyle={activeStyle}>
            <FormattedMessage id="Travel" />
          </Link>
        </div>
        {/* <div>
        <Link
          to="/birmanie-story"
          activeStyle={activeStyle}
        >
          Une histoire en Birmanie
        </Link>
      </div> */}
        <div>
          <Link to="/random/" activeStyle={activeStyle}>
            <FormattedMessage id="Random" />
          </Link>
        </div>
      </div>
      <div className={Languages}>
        {supportedLocales.map(lng => (
          <div key={lng} className={lng === locale ? Active : ""}>
            <Link
              style={{ textTransform: "upperCase" }}
              changelocale={lng}
              language={lng}
            >
              {lng}
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
};
const MenuMobile = () => {
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
  };
  const { locale } = useIntl();

  return (
    <Slidebar
      id="stack"
      styles={stylesMenu}
      outerContainerId={"outer-container"}
      className={HeaderMobile}
    >
      <Link to="/" activeStyle={activeStyle} className="menu-item">
        <FormattedMessage id="Home" />
      </Link>
      <Link to="/resume/" activeStyle={activeStyle} className="menu-item">
        <FormattedMessage id="Resume" />
      </Link>
      <Link to="/map/" activeStyle={activeStyle} className="menu-item">
        <FormattedMessage id="Travel" />
      </Link>
      <Link to="/random/" activeStyle={activeStyle} className="menu-item">
        <FormattedMessage id="Random" />
      </Link>
      <div className="menu-item">
        <div className={Languages}>
          {supportedLocales.map(lng => (
            <div key={lng} className={lng === locale ? Active : ""}>
              <Link
                style={{ textTransform: "upperCase" }}
                changelocale={lng}
                language={lng}
              >
                {lng}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Slidebar>
  );
};

Menu.propTypes = {
  siteTitle: PropTypes.string,
};
Menu.defaultProps = {
  siteTitle: ``,
};
export default Menu;