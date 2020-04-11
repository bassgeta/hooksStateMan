import {
  SET_MOVIES_LOADING,
  SET_MOVIES_LIST,
  SET_MOVIES_ERROR,
} from './actionTypes';

export const initialState = {
  error: null,
  loading: true,
  movies: [],
};

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case SET_MOVIES_LOADING:
      return {...state, loading: !!payload};
    case SET_MOVIES_ERROR:
      return {...state, error: payload, loading: false};
    case SET_MOVIES_LIST:
      return {...state, movies: payload, loading: false};
    default:
      return state;
  }
};

