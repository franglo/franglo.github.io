import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const dark = '';

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
`;

const Highlight = styled.strong`
  font-weight: 400;
  color: #3AD5B2;
`;

export default () => (
  <div>
    <Header>
      <div>
        <Loader size="40px" />
      </div>
      <div>
        <Slogan>Unfold <Highlight>ideas</Highlight></Slogan>
      </div>
    </Header>
  </div>
);
