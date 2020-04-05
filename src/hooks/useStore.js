import React from 'react';

export function useStore({reducer, initialState, windowName}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  windowName && (window[`$${windowName}`] = state);

  return {state, dispatch};
};

