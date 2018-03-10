import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../logo.svg';

const heartbeat = keyframes`
  0% {
    transform: scale( .75 );
  }
  20% {
    transform: scale( 1 );
  }
  40% {
    transform: scale( .75 );
  }
  60% {
    transform: scale( 1 );
  }
  80% {
    transform: scale( .75 );
  }
  100% {
    transform: scale( .75 );
  }
`;

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
  animation: ${heartbeat} 1s infinite;
`;

export default () => (
  <div>
    <Header>
      <Logo src={logo} />
    </Header>
  </div>
);
