import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import SolarSystem from "../components/solar-system/solar-system";
import HogwartsExpress from "../components/hogwarts-express/hogwarts-express";
import "./random.scss";

const RandomPage = () => {
  return (
    <Layout>
      <SEO title="Random" />
      <section className="space">
        <h2>Système solaire à l&apos;échelle</h2>
        <p>
          Je n&apos;ai pas pris la peine d&apos;ajouter les autres planètes,
          étant donné qu&apos;elles sortent de l&apos;écran...
        </p>
        <SolarSystem></SolarSystem>
      </section>
      <section>
        <h2>Ticket Hogwarts Express</h2>
        <p>
          Aucunement une production originale. Inspirée de ce{" "}
          <a href="https://codepen.io/oliviale/pen/MZZYyO">Codepen</a>{" "}
          d&apos;Olivia Ng. Mais c&apos;était fun de jouer avec CSS Grid
        </p>
        <HogwartsExpress></HogwartsExpress>
      </section>
    </Layout>
  );
};

export default RandomPage;
