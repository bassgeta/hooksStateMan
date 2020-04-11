import React from 'react';

function compose(...funcs) {
  return funcs.reduce((previous, next) => (...args) => previous(next(...args)));
}

const loggerMiddleware = (arg1) => (next) => (action) => {
  // arg1 is the API, next is the next function, action is what we received
  console.log(`%c${action.type}`, 'background: orange', action);
  next(action);
};

const stateLoggerMiddleware = ({getState}) => (next) => (action) => {
  console.log('%cState', 'background: green', getState());
  next(action);
};

export function useStore({reducer, initialState, windowName}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  windowName && (window[`$${windowName}`] = state);

  // helpers to get state and dispatch inside your middleware
  const middlewareAPI = {
    getState: () => state,
    dispatch: (action) => dispatch(action),
  };

  const middlewares = [loggerMiddleware, stateLoggerMiddleware];
  const chain = middlewares.map((middleware) => middleware(middlewareAPI));
  const enhancedDispatch = compose(...chain)(dispatch);

  return {state, dispatch: enhancedDispatch};
};

