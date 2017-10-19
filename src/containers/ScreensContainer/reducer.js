// @flow
import type { Action, Screen, ScreenBase, ScreenNews } from '../../types'
import { Actions } from './actionTypes'

export type State = { [id: number | string]: Screen }

export const initialState: State = {
  '0': {
    id: 0,
    page: 1,
    type: 'new',
    loaded: false,
  },
  '1': {
    id: 1,
    page: 1,
    type: 'search',
    tag: '',
    q: '櫻子',
    loaded: false,
  },
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.LOADED_SCREEN_STORIES:
      const storyIds = action.stories.map(story => story.id)
      return {
        ...state,
        [action.screenId]: {
          ...state[action.screenId],
          storyIds,
          loaded: true,
        },
      }
    default:
      return state
  }
}
