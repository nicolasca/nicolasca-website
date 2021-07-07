import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import SolarSystem from "../components/solar-system/solar-system";
import HogwartsExpress from "../components/hogwarts-express/hogwarts-express";
import { FormattedMessage, useIntl } from "gatsby-plugin-react-intl";
import "../styles/pages/random.scss";

const RandomPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <SEO title={intl.formatMessage({id: "Random"})} />
      <div className="RandomContainer">
        <section className="space">
          <h2>
            <FormattedMessage id="Solar system at scale" />
          </h2>
          <p>
            <FormattedMessage id="solar-system-too-big" />
          </p>
          <SolarSystem></SolarSystem>
        </section>
        <section>
          <h2>Ticket Hogwarts Express</h2>
          <p>
            Aucunement une production originale. Inspirée de ce{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://codepen.io/oliviale/pen/MZZYyO"
            >
              Codepen
            </a>{" "}
            d&apos;Olivia Ng. Mais c&apos;était fun de jouer avec CSS Grid
          </p>
          <HogwartsExpress></HogwartsExpress>
        </section>
      </div>
    </Layout>
  );
};

export default RandomPage;
