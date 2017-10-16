// @flow
import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => (
  <MuiThemeProvider>
    <AppBar title="My AppBar" />
    <h2>Shopping Cart Example</h2>
  </MuiThemeProvider>
)

export default App
