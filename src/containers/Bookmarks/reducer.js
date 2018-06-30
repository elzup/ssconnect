// @flow
import type { Action } from '../../types'
import { Actions } from './actionTypes'

export type State = string[]

export const initialState: State = []

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_BOOKMARK:
      return [...state, action.key]

    case Actions.REMOVE_BOOKMARK:
      const { key } = action
      return state.filter(v => v !== key)

    default:
      return state
  }
}
