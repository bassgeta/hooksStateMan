import {useMovieState} from '.';
import {
  SET_MOVIE_LOADING,
  SET_MOVIE_DATA,
  SET_MOVIE_ERROR,
} from './actionTypes';

const apiKey = process.env.API_KEY;
const url = 'https://the-one-api.dev/v2';

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
        console.log('muvi', movie, movie.docs[0]);

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
        console.log('ma kaki quoti', quotesJson)

        dispatch({
          type: SET_MOVIE_DATA,
          payload: {movie: movie.docs[0], quotes: quotesJson.docs},
        });
      } catch (err) {
        console.error('Error while fetching movies', err);
        dispatch({type: SET_MOVIE_ERROR, paylod: err});
      }
    },
  };
}

