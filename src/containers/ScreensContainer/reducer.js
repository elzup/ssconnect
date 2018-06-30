// @flow

import type { Action, ScreenStoreById } from '../../types'
import { Actions } from './actionTypes'

export type State = ScreenStoreById

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.SAVE_SCREEN:
      return {
        ...state,
        [action.key]: action.screenStore,
      }

    default:
      return state
  }
}
