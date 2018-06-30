// @flow
import type { Story, ID } from '../../types'

import { RECEIVE_STORIES, READED_STORY } from './actionTypes'
import type { ReceiveStories, ReadedStory } from './actionTypes'

export function receiveStories(stories: $Shape<Story>[]): ReceiveStories {
  return {
    type: RECEIVE_STORIES,
    stories,
  }
}
export function readedStory(storyId: ID): ReadedStory {
  return {
    type: READED_STORY,
    storyId,
  }
}
