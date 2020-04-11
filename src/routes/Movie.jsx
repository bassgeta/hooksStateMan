import React from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

import {Loader} from '../components/loader';
import {useGlobalState} from '../context/global';
import {withContext} from '../components/withContext';
import {MovieContextProvider, useMovieState} from '../context/movie';
import {useMovieActions} from '../context/movie/useMovieActions';

const MovieStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: auto;
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
  const {state: {favoriteCharacter}} = useGlobalState();
  const {
    state: {loading, movie, quotes},
  } = useMovieState();

  React.useEffect(() => {
    fetchMovieData(id);
  }, []);

  let quotesToRender = quotes;
  if (favoriteCharacter) {
    quotesToRender = quotes.filter(
        ({dialog}) => dialog.includes(favoriteCharacter),
    );
  }

  return (
    <MovieStyled>
      <div className="title">{movie.name || 'Loading'}</div>
      {
      loading ? <Loader /> :
      (
      <React.Fragment>
        <QuoteListStyled>
          {
            quotesToRender.slice(0, 20).map((quote) => (
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

