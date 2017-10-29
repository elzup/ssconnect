// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import type { Store } from './types'
import { persistStore, autoRehydrate } from 'redux-persist'

export default () => {
  const middleware = [thunk]

  const devtool =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  const composer = !!devtool
    ? compose(applyMiddleware(...middleware), autoRehydrate(), devtool)
    : compose(applyMiddleware(...middleware), autoRehydrate())

  const store: Store = createStore(reducer, composer)
  persistStore(store)
  return store
}
