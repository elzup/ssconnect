// @flow
import * as React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import ScreensContainer from '../ScreensContainer'
import BottomBarContainer from '../BottomBarContainer'

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#4fc3f7',
    primary2Color: '#0093c4',
    primary3Color: '#8bf6ff',
    accent1Color: '#c7a4ff',
    accent2Color: '#65499c',
    // textColor: 'white',
    // alternateTextColor: '#222',
    // canvasColor: '#fff',
    // borderColor: '#aaa',
    // disabledColor: fade(darkBlack, 0.3),
    // pickerHeaderColor: '#000',
    // clockCircleColor: fade(darkBlack, 0.07),
    // shadowColor: '#000',
  },
})

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <ScreensContainer />
      <BottomBarContainer />
    </div>
  </MuiThemeProvider>
)

export default App
