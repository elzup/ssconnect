// @flow
import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ScreensContainer from '../ScreensContainer'
import BottomBarContainer from '../BottomBarContainer'

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar showMenuIconButton={false} title="My AppBar" />
      <ScreensContainer />
      <BottomBarContainer />
    </div>
  </MuiThemeProvider>
)

export default App
