import React from 'react';
import styled from 'styled-components';

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #cca57d;

  .title {
    font-size: 64px;
    color: #563421;
  }
  .subtitle {
    font-size: 48px;
    color: #72442b;
  }
`;
export const Home = () => (
  <HomeStyled>
    <div className="title">Gateway of Moria</div>
    <div className="subtitle">Speak friend and enter</div>
  </HomeStyled>
);
