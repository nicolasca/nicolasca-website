import React from 'react';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import styled from 'styled-components/macro';
import FaceSVG from '../components/AnimatedSVG/FaceSVG';

const MainGrid = styled.div`
  position: relative;
  background-color: white;
  min-height: 100%;

  display: grid;
  grid-template-columns: 200px auto 300px;
  grid-template-rows: 300px 300px;
`;

const Section = styled.div`
  border: 1px solid black;
`;

const ResumeSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
`;
const MainSection = styled(Section)``;
const MapSection = styled(Section)``;

const HomePage = () => {
  return (
    <MainGrid>
      <ResumeSection>
        <h2>Editeur</h2>
        <FaceSVG />
      </ResumeSection>
      <MainSection />
      <MapSection />
    </MainGrid>
  );
};

export default HomePage;
