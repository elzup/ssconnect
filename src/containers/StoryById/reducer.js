// @flow
import type { Action, Story } from '../../types'
import { Actions } from '../StoriesContainer/actionTypes'

export type State = { [id: number | string]: Story }

export const initialState: State = {}
export const initialStoryState: $Shape<Story> = {
  readed: false,
}

function reduceStory(state: Story, action: Action): Story {
  switch (action.type) {
    case Actions.READED_STORY:
      return {
        ...state,
        readed: true,
      }
    default:
      return state
  }
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.RECEIVE_STORIES:
      return {
        ...state,
        ...action.stories.reduce((obj, story) => {
          obj[story.id] = { ...initialStoryState, ...state[story.id], ...story }
          return obj
        }, {}),
      }
    case Actions.READED_STORY:
      return {
        ...state,
        [action.storyId]: reduceStory(state[action.storyId], action),
      }
    default:
      return state
  }
}
