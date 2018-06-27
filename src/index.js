// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store'
import theme from './theme'
import './injectGlobal'
import './initialize'

const { store, persistor } = configureStore()

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={<h3>Loading</h3>} persistor={persistor}>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </PersistGate>
    </Provider>,
    root,
  )
}
registerServiceWorker()
