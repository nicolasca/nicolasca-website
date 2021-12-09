import React from 'react';
import styled from 'styled-components/macro';
import FaceIcon from '../../images/nicolas.svg';

const FaceSVG = () => {
  return (
    <Face>
      <FaceIcon />
    </Face>
  );
};

const Face = styled(FaceIcon)`
  width: 200px;
  margin-right: 1rem;

  &:hover {
    cursor: crosshair;
    .Lips {
      fill: blue;
      transition: fill 0.5s ease;
    }
  }

  .Lips {
    transition: fill 0.5s ease;
  }
`;

export default FaceSVG;
