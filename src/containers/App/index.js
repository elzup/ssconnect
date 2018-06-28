// @flow
import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import ScreensContainer from '../ScreensContainer'
import SearchScreen from '../SearchScreen'

const RouteApp = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ScreensContainer} />
      <Route exact path="/search" component={SearchScreen} />
    </Switch>
  </Router>
)
export default RouteApp
