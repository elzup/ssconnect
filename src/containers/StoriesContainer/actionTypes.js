// @flow
import type { Story } from '../../types'

export const RECEIVE_STORIES: 'StoriesContainer/RECEIVE_STORIES' =
  'StoriesContainer/RECEIVE_STORIES'
export const READED_STORY: 'StoriesContainer/READED_STORY' =
  'StoriesContainer/READED_STORY'

export const Actions = {
  RECEIVE_STORIES,
  READED_STORY,
}

export type ReceiveStories = {
  type: typeof RECEIVE_STORIES,
  stories: $Shape<Story>[],
}

export type ReadedStory = {
  type: typeof READED_STORY,
  storyId: number,
}

export type Action = ReceiveStories | ReadedStory
