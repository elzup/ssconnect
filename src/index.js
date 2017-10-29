// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'
import { loadScreenStoryAll } from './containers/ScreensContainer/logic'
import { loadTags } from './containers/TagById/logic'
import './injectGlobal'
import './initialize'

const store = configureStore()
store.dispatch(loadScreenStoryAll())
store.dispatch(loadTags())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
