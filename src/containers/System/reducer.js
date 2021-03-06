// @flow

import type { Action, System } from '../../types'
import { Actions } from './actionTypes'

export type State = System

export const initialState: State = {
  selectedTab: 1,
  drawer: {
    open: false,
  },
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.TOGGLE_DRAWER:
      return {
        ...state,
        drawer: {
          open: !state.drawer.open,
        },
      }

    case Actions.SWITCH_TAB:
      return {
        ...state,
        selectedTab: action.target,
      }

    default:
      return state
  }
}
