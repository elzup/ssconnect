// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'

import reducer from './reducer'
import storage from 'redux-persist/lib/storage'

// import type { Store } from './types'
// import { loadTags } from './containers/TagById/logic'
// import { loadScreenStoryAll } from './containers/ScreensContainer/logic'

const persistConfig = {
  key: 'primary',
  storage,
}

export default () => {
  const middleware = [thunk]

  const devtool =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  const composer = !!devtool
    ? compose(
        applyMiddleware(...middleware),
        devtool,
      )
    : compose(applyMiddleware(...middleware))

  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = createStore(persistedReducer, composer)
  const persistor = persistStore(store)
  // persistStore(store, undefined, () => {
  //   store.dispatch(loadScreenStoryAll())
  //   store.dispatch(loadTags())
  // })
  return { store, persistor }
}
