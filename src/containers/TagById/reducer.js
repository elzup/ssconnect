// @flow
import type { Action, Tag } from '../../types'
import { Actions } from '../TagById/actionTypes'

export type State = { [id: number]: Tag }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.RECEIVE_TAGS:
      return {
        ...state,
        ...action.tags.reduce((obj, tag) => {
          obj[tag.id] = tag
          return obj
        }, {}),
      }

    default:
      return state
  }
}
