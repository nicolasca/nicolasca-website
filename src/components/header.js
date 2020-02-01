import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.Header}>
    <div className={styles.Logo}>
      <p
        style={{
          margin: 0,
        }}
      >
        <div style={{ width: "70px" }}>
          {/* <img src={svg} alt="" style={{ width: "100%" }} /> */}
          {/* <Image filename="goat-logo.png" /> */}
        </div>
        {siteTitle}
      </p>
    </div>
    <div className={styles.Menu}>
      <div>
        <Link to="/" activeStyle={{ textDecoration: "underline" }}>
          CV
        </Link>
      </div>
      <div>
        <Link to="/map/" activeStyle={{ textDecoration: "underline" }}>
          Voyage
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
