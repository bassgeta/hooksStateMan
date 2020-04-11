import React from 'react';
import styled from 'styled-components';
import {MoviesContextProvider, useMoviesState} from '../context/movies';
import {
  SET_MOVIES_LOADING,
  SET_MOVIES_LIST,
  SET_MOVIES_ERROR,
} from '../context/movies/actionTypes';

import {withContext} from '../components/withContext';
import {Loader} from '../components/loader';

const MoviesStyled = styled.div`
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

const MoviesListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MovieStyled = styled.li`
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
  border: 2px solid #563421;
  background-color: #9a835e;

  :hover {
    background-color: #96705f;
  }
`;

const apiKey = process.env.API_KEY;
const url = 'https://the-one-api.herokuapp.com/v1';

const MoviesView = () => {
  const {
    dispatch,
    state: {
      loading, movies,
    },
  } = useMoviesState();

  React.useEffect(() => {
    async function fetchMovies() {
      dispatch({type: SET_MOVIES_LOADING, payload: true});
      try {
        const response = await fetch(
            `${url}/movie`,
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${apiKey}`,
              },
            },
        );
        const json = await response.json();
        dispatch({type: SET_MOVIES_LIST, payload: json.docs});
      } catch (err) {
        console.error('Error while fetching movies', err);
        dispatch({type: SET_MOVIES_ERROR, paylod: err});
      }
    }

    fetchMovies();
  }, []);

  return (
    <MoviesStyled>
      <div className="title">Movies</div>
      {
      loading ?
      <Loader /> :
      (
      <MoviesListStyled>
        {
          movies.map((movie) => (
            <MovieStyled key={movie._id}>{movie.name}</MovieStyled>
          ))
        }
      </MoviesListStyled>
      )
      }
    </MoviesStyled>
  );
};

export const Movies = withContext(MoviesContextProvider)(MoviesView);

