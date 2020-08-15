import AniLink from "gatsby-plugin-transition-link/AniLink";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Header.module.scss";

const Menu = ({ siteTitle }) => (
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
        <AniLink
          fade
          duration={0.5}
          to="/"
          activeStyle={{ textDecoration: "underline" }}
        >
          Accueil
        </AniLink>
      </div>
      <div>
        <AniLink
          fade
          duration={0.5}
          to="/map"
          activeStyle={{ textDecoration: "underline" }}
        >
          Voyage
        </AniLink>
      </div>
      {/* <div>
        <AniLink
          fade
          duration={0.5}
          to="/birmanie-story"
          activeStyle={{ textDecoration: "underline" }}
        >
          Une histoire en Birmanie
        </AniLink>
      </div> */}
      <div>
        <AniLink
          fade
          duration={0.5}
          to="/random"
          activeStyle={{ textDecoration: "underline" }}
        >
          Random
        </AniLink>
      </div>
    </div>
  </header>
);

Menu.propTypes = {
  siteTitle: PropTypes.string,
};

Menu.defaultProps = {
  siteTitle: ``,
};

export default Menu;
