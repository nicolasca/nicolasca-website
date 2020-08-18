import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import SolarSystem from "../components/solar-system/solar-system";
import HogwartsExpress from "../components/hogwarts-express/hogwarts-express";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../styles/pages/random.scss";

const RandomPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title={t("Random")} />
      <div className="RandomContainer">
        <section className="space">
          <h2>
            <Trans>Solar system at scale</Trans>
          </h2>
          <p>
            <Trans>
              I didn&apos;t bother to add the other planets, since they come out
              of the screen ...
            </Trans>
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
