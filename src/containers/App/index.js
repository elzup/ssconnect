// @flow
import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => (
  <MuiThemeProvider>
    <AppBar showMenuIconButton={false} title="My AppBar" />
  </MuiThemeProvider>
)

export default App
