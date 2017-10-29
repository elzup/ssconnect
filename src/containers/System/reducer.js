// @flow

import type { Action, System } from '../../types'
import { Actions } from './actionTypes'

export type State = System

export const initialState: State = {
  rehydrated: false,
  selectedTab: 1,
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.SWITCH_TAB:
      return {
        ...state,
        selectedTab: action.target,
      }

    case 'persist/REHYDRATE':
      const s = action.payload.System || state
      return {
        ...s,
        rehydrated: true,
      }
    default:
      return state
  }
}
