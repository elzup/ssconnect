// @flow
import type { Action, Story } from '../../types'
import { Actions } from '../StoriesContainer/actionTypes'

export type State = { [id: number | string]: Story }

export const initialState: State = {}
export const initialStoryState: $Shape<Story> = {
  readed: false,
}

export default function(
  state: State = initialState,
  action: Action,
): Exact<State> {
  switch (action.type) {
    case Actions.RECEIVE_STORIES:
      return {
        ...state,
        ...action.stories.reduce((obj, story) => {
          obj[story.id] = { ...initialStoryState, ...state[story.id], ...story }
          return obj
        }, {}),
      }
    default:
      return state
  }
}
