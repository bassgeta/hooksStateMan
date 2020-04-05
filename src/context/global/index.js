import React from 'react';
import {initialState, reducer} from './reducer';
import {useStore} from '../hooks/useStore';

export const GlobalContext = React.createContext({});

export const GlobalContextProvider = ({children}) => {
  const store = useStore({reducer, initialState, windowName: 'globalState'});

  return (
    <GlobalContext.Provider value={store}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);

