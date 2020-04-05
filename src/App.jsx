import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import {GlobalContextProvider, useGlobalState} from './context/global'

export const App = () => (
  <Router>
    <GlobalContextProvider>
      <Application />
    </GlobalContextProvider>
  </Router>
)

const Application = () => {
  const {state, dispatch} = useGlobalState()
  console.log("state", state)

  return (
    <div> Test! </div>
  )
}

