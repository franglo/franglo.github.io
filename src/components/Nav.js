import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Nav = styled.nav`
  text-align: center;
  background-color: white;
  height: 62px;
`;

const Logo = styled.img`
  width: 34px;
  height: 34px;
  margin: 15px 0;
`;

export default () => (
  <Nav>
    <Logo src={logo} />
  </Nav>
);
