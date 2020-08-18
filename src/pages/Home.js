import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import "../styles/pages/Home.scss";
import JapanMap from "../images/japan.svg";
import HTMLCode from "../images/html-code.svg";
import Random from "../images/random.svg";
import { Trans } from "gatsby-plugin-react-i18next";

const HomePage = () => {
  return (
    <div className="Scene">
      <div className="ResumeLink">
        <Link to="/resume/">
          <HTMLCode />
          <h2>
            <Trans>Resume</Trans>
          </h2>
        </Link>
      </div>
      <div className="Travel">
        <Link to="/map/">
          <JapanMap />
          <h2>
            <Trans>Travel</Trans>
          </h2>
        </Link>
      </div>

      <div className="RandomLink">
        <Link to="/random/">
          <Random />
          <h2>
            <Trans>Random</Trans>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
