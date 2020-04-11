import React from 'react';
import {initialState, reducer} from './reducer';
import {useStore} from '../../hooks/useStore';

export const MovieContext = React.createContext({});

export const MovieContextProvider = ({children}) => {
  const store = useStore({reducer, initialState, windowName: 'movieState'});

  return (
    <MovieContext.Provider value={store}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieState = () => React.useContext(MovieContext);

