import React from "react";
import { Link } from "gatsby-plugin-react-intl";
import "../styles/pages/Home.scss";
import JapanMap from "../images/japan.svg";
import HTMLCode from "../images/html-code.svg";
import Random from "../images/random.svg";
import { FormattedMessage } from "gatsby-plugin-react-intl";

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
