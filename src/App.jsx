import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';

import {Header} from './components/header';
import {withContext} from './components/withContext';
import {Home} from './routes/Home';
import {Movies} from './routes/Movies';
import {GlobalContextProvider} from './context/global';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const AppStyled = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Application = () => {
  return (
    <Router>
      <AppStyled>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
        </Switch>
      </AppStyled>
    </Router>
  );
};

export const App = withContext(GlobalContextProvider)(Application);

