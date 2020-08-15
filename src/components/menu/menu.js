import { Link, useI18next, Trans } from "gatsby-plugin-react-i18next";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Header.module.scss";

const Menu = ({ siteTitle }) => {
  const { languages, language, originalPath } = useI18next();

  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>
        <p
          style={{
            margin: 0,
          }}
        >
          {siteTitle}
        </p>
      </div>
      <div className={styles.Menu}>
        <div>
          <Link to="/" activeStyle={{ textDecoration: "underline" }}>
            <Trans>Home</Trans>
          </Link>
        </div>
        <div>
          <Link to="/map/" activeStyle={{ textDecoration: "underline" }}>
            <Trans>Travel</Trans>
          </Link>
        </div>
        {/* <div>
        <Link
          to="/birmanie-story"
          activeStyle={{ textDecoration: "underline" }}
        >
          Une histoire en Birmanie
        </Link>
      </div> */}
        <div>
          <Link to="/random/" activeStyle={{ textDecoration: "underline" }}>
            <Trans>Random</Trans>
          </Link>
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
