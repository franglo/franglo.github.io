import React from 'react';
import styled, { keyframes } from 'styled-components';

const dark = '#3AD5B2';
const light = '#50E3C2';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  left: ${({ size }) => parseInt(size, 10) / 2}px;
  height: ${({ size }) => parseInt(size, 10) * 3}px;
  width: ${({ size }) => parseInt(size, 10) * 2}px;
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
  }
  25% {
    transform: rotateY(180deg) rotateX(90deg);
  }
  26% {
    z-index: 2;
  }
  27% {
    z-index: 4;
  }
  50% {
    z-index: 4;
    transform: rotateY(180deg) rotateX(0deg);
  }
  100% {
    z-index: 4;
    transform: rotateY(0deg) rotateX(0deg);
  }
`;

const triangle2Animation = keyframes`
  0% {
    transform: rotateX(180deg);
  }
  25% {
    transform: rotateX(90deg);
  }
  50%{
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
    transform: rotateX(90deg);
  }
  50%{
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

const Triangle1 = Triangle.extend`
  border-width: ${({size}) => size} 0 0 ${({size}) => size};
  border-color: transparent transparent transparent ${dark};
  top: 0;
  left: ${({size}) => size};
  transform-origin: 0% 100%;
  transform: rotateY(180deg) rotateX(180deg);
  z-index: 2;
  animation: ${triangle1Animation} ${({speed}) => speed};
  animation-delay: ${({delay}) => delay};
  animation-fill-mode: forwards;
`;
const Triangle2 = Triangle.extend`
  border-width: 0 0 ${({size}) => size} ${({size}) => size};
  border-color: transparent transparent${light} transparent;
  top: 0;
  left: 0;
  transform-origin: 0% 100%;
  transform: rotateX(180deg);
  animation: ${triangle2Animation} ${({speed}) => speed};
  animation-delay: ${({delay}) => delay};
  animation-fill-mode: forwards;
  z-index: 3;
`;
const Triangle3 = Triangle.extend`
  border-width: ${({size}) => size} ${({size}) => size} 0 0;
  border-color: ${dark} transparent transparent transparent;
  top: ${({ size }) => size};
  left: 0;
`;
const Triangle4 = Triangle.extend`
  border-width: 0 0 ${({size}) => size} ${({size}) => size};
  border-color: transparent transparent ${light} transparent;
  top: ${({ size }) => size};
  left: 0;
`;
const Triangle5 = Triangle.extend`
  border-width: ${({size}) => size} ${({size}) => size} 0 0;
  border-color: ${dark} transparent transparent transparent;
  top: ${({ size }) => parseInt(size, 10) * 2}px;
  left: 0;
  z-index: 3;
  transform-origin: 0% 0%;
  transform: rotateX(180deg);
  animation: ${triangle5Animation} ${({speed}) => speed};
  animation-delay: ${({delay}) => delay};
  animation-fill-mode: forwards;
`;

export default props => (
  <Wrapper {...props}>
    <Triangle1 {...props} />
    <Triangle2 {...props} />
    <Triangle3 {...props} />
    <Triangle4 {...props} />
    <Triangle5 {...props} />
  </Wrapper>
);
