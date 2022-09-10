import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import Icon from "../images/nicolas.svg"

const Skills = styled.div`
  display: none;
  opacity: 0;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    40% {
      opacity: 0.3;
    }
    60% {
      opacity: 0.5;
    }
    80% {
      opacity: 0.9;
    }
    100% {
      opacity: 1;
    }
  }
`

const Scene = styled.div`
  @media screen and (min-width: 768px) {
    height: calc(100vh - 70px); // Minus the header
  }
  width: 100%;
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
    /* width: 33%; */

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    a {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`

const Face = styled(Icon)`
  margin-right: 1rem;

  &:hover {
    cursor: crosshair;
    .Lips {
      fill: blue;
      transition: fill 0.5s ease;
    }
  }

  .Lips {
    transition: fill 0.5s ease;
  }
`

const HomePage = () => {
  const intl = useIntl()
  return (
    <div className="container md:flex mx-auto items-center justify-center h-full">
      <div className="w-1/2">
        <Face />
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl p-2">Nicolas Castejon</h1>
        <div className="p-2">
          <span className="text-2xl text-blue-600 tracking-widest">
            {intl.formatMessage({ id: "frontendDev" })}
          </span>
        </div>

        <Skills>
          Core: Javascript, HTML/CSS JS: ReactJS For fun: Machine Learning
          Expériences: Voir les projets
        </Skills>
      </div>
      {/* </Title> */}
    </div>
  )
}

export default HomePage
