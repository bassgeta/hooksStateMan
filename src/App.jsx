import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import {Header} from './components/header';
import {Home} from './routes/Home';
import {GlobalContextProvider, useGlobalState} from './context/global';

const AppStyled = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const App = () => (
  <Router>
    <GlobalContextProvider>
      <Application />
    </GlobalContextProvider>
  </Router>
);

const Application = () => {
  const {state, dispatch} = useGlobalState();
  console.log('state', state);

  return (
    <AppStyled>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </AppStyled>
  );
};

