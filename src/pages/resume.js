import React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import ExperienceItem from "../components/ExperienceItem";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import "../styles/pages/Resume.scss";
import Icon from "../images/nicolas.svg";

const ResumePage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title={t("Home")} />
      <div className="Resume">
        <div className="Title">
          <Icon />

          <div>
            <h1>Nicolas Castejon</h1>
            <h2 className="JobTitle">
              <Trans>Web Developer</Trans>
            </h2>
          </div>
        </div>

        <div className="Skills">
          <h2>
            <Trans>Skills</Trans>
          </h2>
          <div>
            <p>Javascript, HTML, CSS</p>
            <p>Frameworks & libs:ReactJS, Angular 2+, </p>
          </div>
        </div>

        <div className="Experience">
          <h2>
            <Trans>Experience</Trans>
             <small>{' (7 '}<Trans>years</Trans>{')'}</small>
            
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
            <Trans>Education</Trans>
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
      </div>
    </Layout>
  );
};

export default ResumePage;

export const query = graphql`
  query {
    file(relativePath: { eq: "nicolas.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
