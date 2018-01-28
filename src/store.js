// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

import reducer from './reducer'
import type { Store } from './types'

import { loadTags } from './containers/TagById/logic'
import { loadScreenStoryAll } from './containers/ScreensContainer/logic'

export default () => {
  const middleware = [thunk]

  const devtool =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  const composer = !!devtool
    ? compose(applyMiddleware(...middleware), devtool)
    : compose(applyMiddleware(...middleware))

  const store: Store = createStore(reducer, composer)
  persistStore(store, undefined, () => {
    store.dispatch(loadScreenStoryAll())
    store.dispatch(loadTags())
  })
  return store
}
