import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styles from './Header.module.scss';
import Image from './image';

const Header = ({ siteTitle }) => (
  <header className={styles.Header}>
    <div className={styles.Logo}>
      <h1 style={{ margin: "0" }}>
        <Link
          style={{
            margin: 0,
            display: "flex",
            alignItems: "center",
          }}
          to="/"
        >
          <div style={{ width: "70px" }}>
            {/* <img src={svg} alt="" style={{ width: "100%" }} /> */}
            <Image filename="goat-logo.png" />
          </div>
          {siteTitle}
        </Link>
      </h1>

    </div>
    <div className={styles.Menu}>
      <div>
        <Link to="/about/">About</Link>
      </div>
    </div>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
