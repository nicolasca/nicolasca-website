import React from "react";
import { graphql } from "gatsby";
import ExperienceItem from "../components/ExperienceItem";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import "./Home.scss";
import Icon from "../images/nicolas.svg";

const ResumePage = () => (
  <Layout>
    <SEO title="Accueil" />
    <div className="Resume">
      <div className="Title">
        <Icon />

        <div>
          <h1>Nicolas Castejon</h1>
          <h2>Développeur frontend</h2>
        </div>
      </div>

      {/* <div className={css.Motivation}>
        <p>Ce que je recherche</p>
      </div> */}

      <div className="Skills">
        <h2>Compétences</h2>
        <div>
          <p>HTML, CSS, Javascript</p>
          <p>Frameworks & libs: Angular 2, ReactJS</p>
        </div>
      </div>

      <div className="Experience">
        <h2>Expériences</h2>
        <ExperienceItem
          title="Métropole de lyon"
          link="https://data.grandlyon.com"
          linkTitle="data.grandlyon.com"
          time="2018 - 2020"
          description="Refonte du portail Open Data de la Métropole de Lyon"
          technologies="Angular 8, Bulma, Mapbox GL JS, Docker, NestJS, Gitlab CI"
        ></ExperienceItem>

        <div>
          <h3>Voyage</h3>
          <p>2015 - 2016</p>
          <p>Voyage en sac à dos en Asie et Amérique du Sud.</p>
          <p>Escales de 3 mois à Perth (Australie) et 6 mois à São Paulo</p>
        </div>

        <ExperienceItem
          title="Fruition Sciences"
          link="https://fruitionsciences.com/fr/home"
          linkTitle="fruitionsciences.com"
          time="2013 - 2015"
          description="Création de l'application mobile sur iOS. Maintenance du site web"
          technologies="Ionic, Phonegap, Openlayers, PHP"
        ></ExperienceItem>

        <ExperienceItem
          title="Première expérience: Capgemini"
          time="2011 - 2012"
          description="Application bancaire pour une demande de crédit"
          technologies="Java, Spring, SOAP"
        ></ExperienceItem>
      </div>

      <div className="Education">
        <h2>Formation</h2>
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
