import {
  SET_MOVIE_LOADING,
  SET_MOVIE_DATA,
  SET_MOVIE_ERROR,
} from './actionTypes';

export const initialState = {
  loading: false,
  error: null,
  movie: {},
  quotes: [],
};

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case SET_MOVIE_LOADING:
      return {...state, loading: !!payload};
    case SET_MOVIE_ERROR:
      return {...state, error: payload, loading: false};
    case SET_MOVIE_DATA:
      return {
        ...state,
        movie: payload.movie,
        quotes: payload.quotes,
        loading: false,
      };
    default:
      return state;
  }
};
