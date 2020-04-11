import {useMovieState} from '.';
import {
  SET_MOVIE_LOADING,
  SET_MOVIE_DATA,
  SET_MOVIE_ERROR,
} from './actionTypes';

const apiKey = process.env.API_KEY;
const url = 'https://the-one-api.herokuapp.com/v1';

export function useMovieActions() {
  const {dispatch} = useMovieState();

  return {
    fetchMovieData: async (id) => {
      dispatch({type: SET_MOVIE_LOADING, payload: true});
      try {
        const movieResponse = await fetch(
            `${url}/movie/${id}`,
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${apiKey}`,
              },
            },
        );
        const movie= await movieResponse.json();

        const quoteResponse = await fetch(
            `${url}/movie/${id}/quote`,
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${apiKey}`,
              },
            },
        );
        const quotesJson = await quoteResponse.json();

        dispatch({
          type: SET_MOVIE_DATA,
          payload: {movie, quotes: quotesJson.docs},
        });
      } catch (err) {
        console.error('Error while fetching movies', err);
        dispatch({type: SET_MOVIE_ERROR, paylod: err});
      }
    },
  };
}

