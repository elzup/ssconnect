// @flow
import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import ScreensContainer from '../ScreensContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => (
  <MuiThemeProvider>
    <AppBar showMenuIconButton={false} title="My AppBar" />
    <ScreensContainer />
  </MuiThemeProvider>
)

export default App
