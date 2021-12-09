import React from 'react';
import Logo from '../Logo';
import styled from 'styled-components/macro';
import MaxWidthWrapper from '../MaxWidthWrapper';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <Logo />
        </Row>
      </SuperHeader>
    </header>
  );
};
const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid black;
`;

export default Header;
