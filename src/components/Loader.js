import React from 'react';
import styled, { keyframes } from 'styled-components';

const dark = '#3AD5B2';
const light = '#50E3C2';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  display: inline-block;
  border-style: solid;
  position: absolute;
`;

const triangle1Animation = keyframes`
  0% {
    transform: rotateY(180deg) rotateX(180deg);
    z-index: 2;
  }
  25% {
    transform: rotateY(180deg) rotateX(180deg);
  }
  31.25% {
    transform: rotateY(180deg) rotateX(90deg);
    z-index: 2;
  }
  31.26% {
    z-index: 4;
  }
  37.5% {
    transform: rotateY(180deg) rotateX(0deg);
  }
  50% {
    transform: rotateY(0deg) rotateX(0deg);
  }
  100% {
    transform: rotateY(0deg) rotateX(0deg);
  }
`;

const triangle2Animation = keyframes`
  0% {
    transform: rotateX(180deg);
  }
  25% {
    transform: rotateX(180deg);
  }
  31.25% {
    transform: rotateX(90deg);
  }
  37.5%{
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

const triangle5Animation = keyframes`
  0% {
    transform: rotateX(180deg);
  }
  25% {
    transform: rotateX(180deg);
  }
  31.25% {
    transform: rotateX(90deg);
  }
  37.25%{
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

const Triangle1 = Triangle.extend`
  border-width: ${({size}) => size} 0 0 ${({size}) => size};
  border-color: transparent transparent transparent ${dark};
  top: -${({size}) => size};
  left: ${({size}) => size};
  transform-origin: 0% 100%;
  animation: ${triangle1Animation} 7s infinite;
  animation-direction: alternate;
  z-index: 4;
`;
const Triangle2 = Triangle.extend`
  border-width: 0 0 ${({size}) => size} ${({size}) => size};
  border-color: transparent transparent${light} transparent;
  top: -${({size}) => size};
  left: 0;
  transform-origin: 0% 100%;
  animation: ${triangle2Animation} 7s infinite;
  animation-direction: alternate;
  z-index: 3;
`;
const Triangle3 = Triangle.extend`
  border-width: ${({size}) => size} ${({size}) => size} 0 0;
  border-color: ${dark} transparent transparent transparent;
  top: 0;
  left: 0;
`;
const Triangle4 = Triangle.extend`
  border-width: 0 0 ${({size}) => size} ${({size}) => size};
  border-color: transparent transparent ${light} transparent;
  top: 0;
  left: 0;
`;
const Triangle5 = Triangle.extend`
  border-width: ${({size}) => size} ${({size}) => size} 0 0;
  border-color: ${dark} transparent transparent transparent;
  top: ${({size}) => size};
  left: 0;
  z-index: 3;
  transform-origin: 0% 0%;
  animation: ${triangle5Animation} 7s infinite;
  animation-direction: alternate;
`;

export default props => (
  <Wrapper>
    <Triangle1 {...props} />
    <Triangle2 {...props} />
    <Triangle3 {...props} />
    <Triangle4 {...props} />
    <Triangle5 {...props} />
  </Wrapper>
);
