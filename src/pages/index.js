import React from "react"
import Image from "../components/image"
import ExperienceItem from "../components/ExperienceItem"
import Layout from "../components/layout"
import SEO from "../components/seo"
import css from "./Home.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
    <div className={css.Home}>
      <div className={css.Title}>
        <Image filename="nicolas.jpg" />
        <div>
          <h1>Développeur frontend</h1>
          <p>faisant néanmoins du backend</p>
        </div>
      </div>

      <div className={css.Motivation}>
        <p>Ce que je recherche</p>
      </div>

      <div className={css.Skills}>
        <h2>Compétences</h2>
        <div>
          <p>Bases (le plus important): HTML/CSS, Javascript</p>
          <p>Frameworks: Angular 2, ReactJS</p>
        </div>
      </div>

      <div className={css.Experience}>
        <h2>Expérience</h2>
        <ExperienceItem
          title="Métropole de lyon"
          link="https://data.grandlyon.com"
          linkTitle="data.grandlyon.com"
          time="2018 - 2020"
          description="Refonte du portail Open Data de la Métropole de Lyon"
          technologies="Angular 8, Bulma, Mapbox GL JS, Docker, NestJS, Gitlab CI"
        ></ExperienceItem>

        <div>
          <h4>Voyage</h4>
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

      <div className={css.Education}>
        <h2>Formation</h2>
        <div>
          <h4>Master en Informatique - 2010</h4>
          <p>Université de Montpellier</p>
        </div>
        <div>
          <h4>Master en Biologie - 2008</h4>
          <p>Université de Lyon</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
