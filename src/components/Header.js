import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const Header = styled.header`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
`;

export default () => (
  <div>
    <Header>
      <Loader size="20px" />
    </Header>
  </div>
);
