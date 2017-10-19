// @flow
import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ActiveScreen from '../ActiveScreen'
import BottomBarContainer from '../BottomBarContainer'

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar showMenuIconButton={false} title="My AppBar" />
      <ActiveScreen />
      <BottomBarContainer />
    </div>
  </MuiThemeProvider>
)

export default App
