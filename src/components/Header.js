import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const Header = styled.header`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
`;

const Logo = styled.img`
  width: 34px;
  height: 34px;
`;

export default () => (
  <div>
    <Header>
      <Logo src={logo} />
    </Header>
  </div>
);
