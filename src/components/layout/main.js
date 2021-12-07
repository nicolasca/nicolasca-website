import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useBlobity from 'blobity/lib/useBlobity';
import { BlobityContext } from '../../utils/blobity.context';
import { colors } from '../../styles/Theme';

export const initiaBlobityOptions = {
  licenseKey: 'gmrchk',
  focusableElementsOffsetX: 5,
  focusableElementsOffsetY: 5,
  color: colors.red,
  dotColor: 'black',
  invert: true,
  focusableElements: '[data-blobity]',
  magnetic: false,
  font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
  fontSize: 14,
  fontWeight: 400,
  fontColor: '#ffffff',
  zIndex: 1,
  size: 4,
  radius: 20,
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - #{var(--header-height)});

  // Mobile display
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 3rem;
    height: 100vh;
  }
`;

const Main = ({ children }) => {
  const blobityInstance = useBlobity(initiaBlobityOptions);
  const blobityContext = useContext(BlobityContext);

  useEffect(() => {
    const blobityInstanceCurrent = blobityInstance.current;
    if (blobityInstanceCurrent) {
      blobityContext.set({ blobityInstance: blobityInstanceCurrent });
    }
    return () => {
      blobityInstanceCurrent.destroy();
    };
  }, [blobityInstance, blobityContext.set]);

  return <MainContainer id="page-wrap">{children}</MainContainer>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
