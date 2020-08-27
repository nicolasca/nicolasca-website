import { Link, useI18next, Trans } from "gatsby-plugin-react-i18next";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Menu.module.scss";
import { slide as Slidebar } from "react-burger-menu";

const activeStyle = {
  color: "#c90000",
  fontWeight: "bold"
};

const Menu = () => {
  return (
    <>
      <div className={styles.MenuDesktop}>
        <MenuDesktop />
      </div>
      <div className={styles.MenuMobile}>
        <MenuMobile />
      </div>
    </>
  );
};

const MenuDesktop = () => {
  const { languages, language, originalPath } = useI18next();

  return (
    <header className={styles.Header}>
      <div className={styles.LeftSection}>
        <div>
          <Link to="/" activeStyle={activeStyle}>
            <Trans>Home</Trans>
          </Link>
        </div>
        <div>
          <Link to="/resume/" activeStyle={activeStyle}>
            <Trans>Resume</Trans>
          </Link>
        </div>
        <div>
          <Link to="/map/" activeStyle={activeStyle}>
            <Trans>Travel</Trans>
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
            <Trans>Random</Trans>
          </Link>
        </div>
      </div>

      <div className={styles.Languages}>
        {languages.map(lng => (
          <div key={lng} className={lng === language ? styles.Active : ""}>
            <Link
              style={{ textTransform: "upperCase" }}
              to={originalPath}
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
  const { languages, language, originalPath } = useI18next();

  return (
    <Slidebar
      id="stack"
      styles={stylesMenu}
      outerContainerId={"outer-container"}
      className={styles.HeaderMobile}
    >
      <Link to="/" activeStyle={activeStyle} className="menu-item">
        <Trans>Home</Trans>
      </Link>
      <Link to="/resume/" activeStyle={activeStyle} className="menu-item">
        <Trans>Resume</Trans>
      </Link>
      <Link to="/map/" activeStyle={activeStyle} className="menu-item">
        <Trans>Travel</Trans>
      </Link>
      <Link to="/random/" activeStyle={activeStyle} className="menu-item">
        <Trans>Random</Trans>
      </Link>
      <div className="menu-item">
        <div className={styles.Languages}>
          {languages.map(lng => (
            <div key={lng} className={lng === language ? styles.Active : ""}>
              <Link
                style={{ textTransform: "upperCase" }}
                to={originalPath}
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
