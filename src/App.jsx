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
import {Movie} from './routes/Movie';
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
    <Router basename="/hooksStateMan">
      <AppStyled>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} exact />
          <Route path="/movies/:id" component={Movie} />
        </Switch>
      </AppStyled>
    </Router>
  );
};

export const App = withContext(GlobalContextProvider)(Application);

