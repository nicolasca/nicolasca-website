import React from "react";
import { FormattedMessage, Link } from "gatsby-plugin-intl";
import "../styles/pages/Home.scss";
import JapanMap from "../images/japan.svg";
import HTMLCode from "../images/html-code.svg";
import Random from "../images/random.svg";

const HomePage = () => {
  return (
    <div className="Scene">
      <div className="ResumeLink">
        <Link to="/resume/">
          <HTMLCode />
          <h2>
            <FormattedMessage id="Resume" />
          </h2>
        </Link>
      </div>
      <div className="Travel">
        <Link to="/map/">
          <JapanMap />
          <h2>
            <FormattedMessage id="Travel" />
          </h2>
        </Link>
      </div>

      <div className="RandomLink">
        <Link to="/random/">
          <Random />
          <h2>
            <FormattedMessage id="Random" />
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
