import { Link, useI18next, Trans } from "gatsby-plugin-react-i18next";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Menu.module.scss";

const Menu = () => {
  const { languages, language, originalPath } = useI18next();

  const activeStyle = {
    textDecoration: "underline",
    backgroundColor: "#c90000",
  };

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

Menu.propTypes = {
  siteTitle: PropTypes.string,
};

Menu.defaultProps = {
  siteTitle: ``,
};

export default Menu;
