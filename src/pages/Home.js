import React from "react";
import styled from "styled-components";
import JapanMap from "../assets/svgs/japan.svg";
import HTMLCode from "../assets/svgs/html-code.svg";
import Random from "../assets/svgs/random.svg";
import SectionImageWithTitle from "../components/home/SectionImageWithTitle.component";

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
`;

const CodeWrapper = styled.div`
  @keyframes flip-vertical-right {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
  svg:hover {
    path {
      fill: #e0242d;
    }
    g rect:not(.main) {
      animation: flip-vertical-right 0.7s
        cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }

    rect.red {
      fill: #e0242d;
    }
  }
`;
const TravelWrapper = styled.div`
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

    #circle {
      fill: #e0242d;
      stroke: 0;
    }

    #land {
      fill: black;
      stroke: 0;
    }
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

const RandomWrapper = styled.div`
  svg {
    filter: grayscale(100);
    transition: filter 0.5s ease;
  }

  &:hover svg {
    filter: grayscale(0);
  }
`;

const HomePage = () => {
  return (
    <Block>
      <CodeWrapper>
        <SectionImageWithTitle to="/resume/" titleId="resume">
          <HTMLCode />
        </SectionImageWithTitle>
      </CodeWrapper>
      <TravelWrapper>
        <SectionImageWithTitle to="/map/" titleId="Travel">
          <JapanMap />
        </SectionImageWithTitle>
      </TravelWrapper>
      <RandomWrapper>
        <SectionImageWithTitle to="/random/" titleId="Random">
          <Random />
        </SectionImageWithTitle>
      </RandomWrapper>
    </Block>
  );
};

export default HomePage;
