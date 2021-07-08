import React from "react";
import { Link, FormattedMessage } from "gatsby-plugin-react-intl";
import styled from "styled-components";
import JapanMap from "../assets/svgs/japan.svg";
import HTMLCode from "../assets/svgs/html-code.svg";
import Random from "../assets/svgs/random.svg";

const Block = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  h2 {
    letter-spacing: 0.5rem;
  }

  svg {
    height: 360px;
  }

  a {
    color: black !important;
  }

  a:hover {
    background-color: unset;
  }

  & > div {
    width: 33%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    a {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  .Travel svg {
    animation: fadeInAnimation ease 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    #land {
      fill: transparent;
      stroke: black;
      stroke-width: 2;
      transition: all 0.7s ease;
    }

    #circle {
      fill: transparent;
      stroke: black;
      stroke-width: 1;
      transition: all 0.5s ease;
    }
  }

  .Travel svg:hover {
    cursor: pointer;
    // g #land {
    //   fill: url(#left-to-right);
    // }
    #circle {
      fill: #e0242d;
      stroke: 0;
    }

    #land {
      fill: black;
      stroke: 0;
    }
  }
  // background: #1d1f20;

  .ResumeLink svg {
    rect:not(.main),
    path {
      fill: black !important;
    }
  }

  .ResumeLink svg:hover {
    path {
      fill: #e0242d !important;
    }
    g rect:not(.main) {
      animation: flip-vertical-right 0.7s
        cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }

    rect.red {
      fill: #e0242d !important;
    }

    /* ----------------------------------------------
 * Generated by Animista on 2020-8-16 18:20:41
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

    /**
 * ----------------------------------------
 * animation flip-vertical-right
 * ----------------------------------------
 */
    @keyframes flip-vertical-right {
      0% {
        transform: rotateY(0);
      }
      100% {
        transform: rotateY(180deg);
      }
    }
  }

  .RandomLink svg {
    filter: grayscale(100);
    transition: filter 0.5s ease;
  }

  .RandomLink:hover svg {
    filter: grayscale(0);
  }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const HomePage = () => {
  return (
    <Block>
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
    </Block>
  );
};

export default HomePage;
