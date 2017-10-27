// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import type { Store } from './types'
import { persistStore, autoRehydrate } from 'redux-persist'

export default () => {
  const middleware = [thunk]

  const store: Store = createStore(
    reducer,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
      autoRehydrate(),
    ),
  )
  persistStore(store)
  return store
}
