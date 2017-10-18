// @flow
import type { Action, Screen } from '../../types'
import { Actions } from './actionTypes'

export type State = { [id: number | string]: Screen }

export const initialState: State = {
  '0': {
    id: 0,
    page: 1,
    type: 'new',
    tag: '',
    q: '',
    loaded: false,
    storyIds: [],
  },
  '1': {
    id: 1,
    page: 4,
    type: 'base',
    tag: '',
    q: 'タブ2',
    loaded: false,
    storyIds: [],
  },
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.LOADED_SCREEN_STORIES:
      const storyIds = action.stories.map(story => story.id)
      return {
        ...state,
        [action.screenId]: { ...state[action.screenId], storyIds },
      }
    default:
      return state
  }
}
