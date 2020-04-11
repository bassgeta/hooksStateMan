import React from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

const MovieStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: #cca57d;

  .title {
    margin: 32px 0;
    font-size: 64px;
    color: #563421;
  }
`;
export const Movie = () => {
  const {id} = useParams();
  console.log('movie id', id);

  return (
    <MovieStyled>
      <div className="title">Movie title here</div>
    </MovieStyled>
  );
};
