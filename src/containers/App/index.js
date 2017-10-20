// @flow
import * as React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ActiveScreen from '../ActiveScreen'
import BottomBarContainer from '../BottomBarContainer'

const App = () => (
  <MuiThemeProvider>
    <div>
      <ActiveScreen />
      <BottomBarContainer />
    </div>
  </MuiThemeProvider>
)

export default App
