import React from 'react';

export const withContext = (ContextProvider) => {
  return (BaseComponent) => {
    const WithContext = (props) =>
      <ContextProvider>
        <BaseComponent {...props} />
      </ContextProvider>;

    return WithContext;
  };
};

