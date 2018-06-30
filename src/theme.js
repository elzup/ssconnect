// @flow

import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import orange from '@material-ui/core/colors/orange'
// import lime from '@material-ui/core/colors/lime'

const theme = createMuiTheme({
  palette: {
    primary: { ...grey, main: '#888' },
    error: orange,
    // secondary: lime,
  },
  typography: {
    display1: {
      padding: '20px',
    },
    title: {
      padding: '10px',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '10px',
        marginBottom: '10px',
      },
    },
    MuiSvgIcon: {
      root: {
        marginTop: '5px',
        marginRight: '5px',
      },
    },
  },
})
export default theme
