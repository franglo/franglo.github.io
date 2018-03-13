import React from 'react';
import styled, { keyframes } from 'styled-components';
import Loader from './Loader';

const sloganAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const logoAnimation = keyframes`
  0% {
    transform: scale(0, 0);
  }
  50% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const Header = styled.header`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
`;

const Slogan = styled.span`
  font-size: 30px;
  line-height: 100px;
  font-weight: 100;
  display: inline-block;
  opacity: 0;
  transform: translateY(50px);
  animation: ${sloganAnimation} 700ms ease-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
`;

const Highlight = styled.strong`
  font-weight: 400;
  color: #3AD5B2;
`;

const LoaderIntro = styled.div`
  animation: ${logoAnimation} 0.5s ease-out;
`;

export default () => (
  <Header>
    <LoaderIntro>
      <Loader size="40px" speed="1s" delay="0.3s" />
    </LoaderIntro>
    <div>
      <Slogan>Unfold <Highlight>ideas</Highlight></Slogan>
    </div>
  </Header>
);
