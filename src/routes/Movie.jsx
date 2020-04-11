import React from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import {Loader} from '../components/loader';
import {withContext} from '../components/withContext';
import {MovieContextProvider, useMovieState} from '../context/movie';
import {useMovieActions} from '../context/movie/useMovieActions';

const MovieStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  background-color: #cca57d;

  .title {
    margin: 32px 0;
    font-size: 64px;
    color: #563421;
  }
`;

const QuoteListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 8px;
`;
const QuoteStyled = styled.li`
  width: 80vw;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
  border: 2px solid #563421;
  background-color: #9a835e;
`;

const MovieView = () => {
  const {id} = useParams();
  const {fetchMovieData} = useMovieActions();
  const {
    state: {loading, movie, quotes},
  } = useMovieState();

  React.useEffect(() => {
    fetchMovieData(id);
  }, []);

  return (
    <MovieStyled>
      {
      loading ? <Loader /> :
      (
      <React.Fragment>
        <div className="title">{movie.name}</div>
        <QuoteListStyled>
          {
            quotes.slice(0, 20).map((quote) => (
              <QuoteStyled key={quote._id}>
                {quote.dialog}
              </QuoteStyled>
            ))
          }
        </QuoteListStyled>
      </React.Fragment>
      )
      }
    </MovieStyled>
  );
};

export const Movie = withContext(MovieContextProvider)(MovieView);

