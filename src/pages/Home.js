import React from 'react';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import styled from 'styled-components/macro';
import FaceSVG from '../components/AnimatedSVG/FaceSVG';
import JapanSVG from '../components/AnimatedSVG/JapanSVG';

const MainGrid = styled.div`
  position: relative;
  background-color: white;
  min-height: 100%;

  display: grid;
  grid-template-columns: 200px auto 300px;
  grid-template-rows: auto 300px;
`;

const Section = styled.div`
  padding: 1rem;
  border: 1px solid black;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const ResumeSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainSection = styled(Section)``;
const MapSection = styled(Section)``;

const HomePage = () => {
  return (
    <MainGrid>
      <ResumeSection>
        <Title>Soi-disant éditeur</Title>
        <FaceSVG />
      </ResumeSection>
      <MainSection>
        <Title> Un petit voyage dans le monde </Title>
        <JapanSVG />
      </MainSection>
      <MapSection />
    </MainGrid>
  );
};

export default HomePage;
