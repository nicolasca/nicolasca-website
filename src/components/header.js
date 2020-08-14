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
        {siteTitle}
      </p>
    </div>
    <div className={styles.Menu}>
      <div>
        <Link to="/resume" activeStyle={{ textDecoration: "underline" }}>
          Accueil
        </Link>
      </div>
      <div>
        <Link to="/solar-system" activeStyle={{ textDecoration: "underline" }}>
          Système solaire
        </Link>
      </div>
      <div>
        <Link to="/map" activeStyle={{ textDecoration: "underline" }}>
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
