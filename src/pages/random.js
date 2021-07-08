import React from "react";
import styled from "styled-components";
import { FormattedMessage, useIntl } from "gatsby-plugin-react-intl";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import SolarSystem from "../components/solar-system/solar-system";
import HogwartsExpress from "../components/hogwarts-express/hogwarts-express";

const RandomContainer = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    height: calc(100vh + 3rem);
    width: 100%;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  min-width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  &.space {
    color: #000;
  }

  p {
    padding: 1rem;
  }
`;

const RandomPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "Random" })} />
      <RandomContainer>
        <Section className="space">
          <h2>
            <FormattedMessage id="Solar system at scale" />
          </h2>
          <p>
            <FormattedMessage id="solar-system-too-big" />
          </p>
          <SolarSystem></SolarSystem>
        </Section>
        <Section>
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
        </Section>
      </RandomContainer>
    </Layout>
  );
};

export default RandomPage;
