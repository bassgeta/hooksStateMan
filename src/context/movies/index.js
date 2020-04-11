import React from 'react';
import {initialState, reducer} from './reducer';
import {useStore} from '../../hooks/useStore';

export const MoviesContext = React.createContext({});

export const MoviesContextProvider = ({children}) => {
  const store = useStore({reducer, initialState, windowName: 'movieState'});

  return (
    <MoviesContext.Provider value={store}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesState = () => React.useContext(MoviesContext);

