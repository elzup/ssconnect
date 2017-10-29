// @flow
import * as React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import ScreensContainer from '../ScreensContainer'
import BottomBarContainer from '../BottomBarContainer'

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#283E56',
    primary2Color: '#255580',
    primary3Color: '#1989AC',
    accent1Color: '#FFDE25',
    accent2Color: '#E8F1F5',
    accent3Color: 'purple',
    textColor: 'black',
    alternateTextColor: 'white',
    canvasColor: 'white',
    borderColor: 'gray',
    // disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: 'black',
    // clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: 'black',
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
