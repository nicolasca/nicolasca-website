import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'gatsby-plugin-intl';
import JapanMap from '../../images/japan.svg';

const JapanSVG = () => {
  return (
    <Map>
      <Link to="/map/">
        <JapanMap />
      </Link>
    </Map>
  );
};

const Map = styled.div`
  svg {
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

  svg:hover {
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
`;

export default JapanSVG;
