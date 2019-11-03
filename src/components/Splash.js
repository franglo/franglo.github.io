import React from "react";
import styled, { keyframes } from "styled-components";
import Loader from "./Loader";
import logo from "../assets/logo.svg";

const nameAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Header = styled.header`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  background-color: #18202f;
`;

const Name = styled.h1`
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  display: inline-block;
  opacity: 0;
  transform: translateY(50px);
  animation: ${nameAnimation} 700ms ease-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  color: #e24d4d;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0;
`;

const Highlight = styled.strong`
  font-weight: 400;
  color: #3ad5b2;
`;

const Logo = styled.img`
  height: 68px;
`;

const Slogan = styled.h2`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  padding: 0;
  animation: ${nameAnimation} 700ms ease-out;
  animation-fill-mode: forwards;
  opacity: 0;
  animation-delay: 1s;
`;

export default () => (
  <Header>
    <Logo alt="logo" src={logo} />
    <div>
      <Name>Franglo</Name>
      <Slogan>Grow ideas into products</Slogan>
    </div>
  </Header>
);
