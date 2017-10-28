// @flow
import * as React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ScreensContainer from '../ScreensContainer'
import BottomBarContainer from '../BottomBarContainer'

const App = () => (
  <MuiThemeProvider>
    <div>
      <ScreensContainer />
      <BottomBarContainer />
    </div>
  </MuiThemeProvider>
)

export default App
