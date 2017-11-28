// @flow

import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import type { Reducer } from './types'

const config = {
  key: 'root',
  storage,
}

export function combineReducers(reducers: Object): Reducer {
  return persistCombineReducers(config, reducers)
}
