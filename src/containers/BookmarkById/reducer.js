// @flow
import type { Action, Screen } from '../../types'
import { Actions } from '../Bookmarks/actionTypes'

export type State = { [key: string]: Screen }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.ADD_BOOKMARK:
      return {
        ...state,
        [action.key]: action.screen,
      }

    default:
      return state
  }
}
