// @flow
import type { Action, Story } from '../../types'
import { Actions } from '../StoriesContainer/actionTypes'
import { Actions as CartActions } from '../CartContainer/actionTypes'

export type State = { [id: number]: Story }

export const initialState: State = {}

export default function(
  state: State = initialState,
  action: Action
): Exact<State> {
  switch (action.type) {
    case Actions.RECEIVE_STORIES:
      return {
        ...state,
        ...action.stories.reduce((obj, story) => {
          obj[story.id] = story
          return obj
        }, {}),
      }
    default:
      return state
  }
}
