import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.Header}>
    <div className={styles.Logo}>
      <h1
        style={{
          margin: 0,
        }}
      >
        <div style={{ width: "70px" }}>
          {/* <img src={svg} alt="" style={{ width: "100%" }} /> */}
          {/* <Image filename="goat-logo.png" /> */}
        </div>
        {siteTitle}
      </h1>
    </div>
    <div className={styles.Menu}>
      <div>
        <Link to="/">CV</Link>
      </div>
      <div>
        <Link to="/map/">Voyage</Link>
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
