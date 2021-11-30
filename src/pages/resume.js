import React from "react"
import { graphql } from "gatsby"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import ExperienceItem from "../components/ExperienceItem"
import Seo from "../components/seo"
import Icon from "../images/nicolas.svg"
import styled from "styled-components"

const Resume = styled.div`
  display: block;
  margin: auto;
  max-width: 700px;
  flex-direction: column;
  background-color: #fff;
  margin-top: 1rem;

  & > * {
    margin: 1rem;
    padding: -1rem;
  }
`

const Face = styled(Icon)`
  width: 200px;
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

const Skills = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  display: flex;
  align-items: center;
`

const JobTitle = styled.h2`
  color: blue;
`

const ResumePage = () => {
  const intl = useIntl()
  return (
    <>
      <Seo title={intl.formatMessage({ id: "Home" })} />
      <Resume>
        <Title>
          <Face />

          <div>
            <h1>Nicolas Castejon</h1>
            <JobTitle>{intl.formatMessage({ id: "Web Developer" })}</JobTitle>
          </div>
        </Title>

        <Skills>
          <h2>
            <FormattedMessage id="Skills" />{" "}
          </h2>
          <div>
            <p>Javascript, HTML, CSS</p>
            <p>Frameworks & libs:ReactJS, Angular 2+, </p>
          </div>
        </Skills>

        <div>
          <h2>
            <FormattedMessage id="Experience" />
            <small>
              {" (7 "}
              <FormattedMessage id="years" />
              {")"}
            </small>
          </h2>
          <ExperienceItem
            title="Métropole de lyon"
            link="https://data.grandlyon.com"
            linkTitle="data.grandlyon.com"
            time="Mars 2018 - Juin 2020"
            description="Refonte du portail Open Data de la Métropole de Lyon"
            technologies="Angular 8, Bulma, Mapbox GL JS, Docker, NestJS, Gitlab CI"
          ></ExperienceItem>

          <div>
            <h3>Voyage</h3>
            <h4>Mars 2015 - Sept. 2016</h4>
            <p>Voyage en sac à dos en Asie et Amérique du Sud.</p>
            <p>Escales de 3 mois à Perth (Australie) et 6 mois à São Paulo</p>
          </div>

          <ExperienceItem
            title="Fruition Sciences"
            link="https://fruitionsciences.com/fr/home"
            linkTitle="fruitionsciences.com"
            time="Jan. 2013 - Mars 2015"
            description="Création de l'application mobile sur iOS. Maintenance du site web"
            technologies="Ionic, Phonegap, Openlayers, PHP"
          ></ExperienceItem>

          <ExperienceItem
            title="Première expérience: Capgemini"
            time="Jan. 2011 - Mai 2012"
            description="Application bancaire pour une demande de crédit"
            technologies="Java, Spring, SOAP"
          ></ExperienceItem>
        </div>

        <div className="Education">
          <h2>
            <FormattedMessage id="Education" />
          </h2>
          <div>
            <h3>Master en Informatique - 2010</h3>
            <p>Université de Montpellier</p>
          </div>
          <div>
            <h3>Master en Biologie - 2008</h3>
            <p>Université de Lyon</p>
          </div>
        </div>
      </Resume>
    </>
  )
}

export default ResumePage

export const query = graphql`
  {
    file(relativePath: { eq: "nicolas.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 250, height: 250, layout: FIXED)
      }
    }
  }
`
