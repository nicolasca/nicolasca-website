import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled, { css } from "styled-components"
import Icon from "../images/nicolas.svg"
// import Computer from "../images/home/computer-old.png"
import { StaticImage } from "gatsby-plugin-image"
import { colors } from "../styles/Theme"
import { useState } from "react"

const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: white;
`

const FaceContainer = styled.div`
  width: 40%;
  flex-shrink: 0;
`

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

const Information = styled.div`
  width: 60%;
  transition: transform 0.5s ease-out;

  ${props =>
    props.expanded &&
    css`
      transform: translateY(-100%);

      ${Skills} {
        display: block;
        animation-name: fadeIn;
        animation-duration: 1s;
        animation-fill-mode: forwards;
      }
    `}
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

// const Title = styled.div`
//   display: flex;
//   align-items: center;

//   &:hover {
//     cursor: pointer;
//   }
// `

const JobTitle = styled.h2`
  color: blue;
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
  const [expanded, setExpanded] = useState(false)

  const intl = useIntl()
  return (
    <>
      <Scene>
        {/* <Title> */}
        <FaceContainer>
          <Face />
        </FaceContainer>
        <Information expanded={expanded}>
          <h1>Nicolas Castejon</h1>
          <JobTitle onClick={() => setExpanded(true)}>
            {intl.formatMessage({ id: "frontendDev" })}
          </JobTitle>

          <Skills>
            Core: Javascript, HTML/CSS JS: ReactJS For fun: Machine Learning
            Expériences: Voir les projets
          </Skills>
        </Information>
        {/* </Title> */}
        {/* <StaticImage src="../images/home/computer-old.png" /> */}
      </Scene>
      {/* <Section2>
        <StaticImage src="../images/home/skills.png" />

        <Skills>
          <h2>Compétences</h2>
        </Skills>
      </Section2> */}
    </>
  )
}

export default HomePage
