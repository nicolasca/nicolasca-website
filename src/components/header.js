import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import svg from "../images/goat-logo.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: "1rem",
      marginBottom: "1.5rem",
      color: "#0F2347",
      backgroundColor: "#80C271",
    }}
  >
    <div
      style={{
        maxWidth: "1360px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
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
            <img src={svg} alt="" style={{ color: "red" }} />
            {/* <Image filename="goat-logo.png" /> */}
          </div>
          {siteTitle}
        </Link>
      </h1>
      <Link to="/blog">Blog</Link>
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
