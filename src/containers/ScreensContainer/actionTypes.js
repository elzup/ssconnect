// @flow
import type { ScreenLoaded, Story, PageInfo } from '../../types'

export const LOADED_SCREEN_STORIES: 'ScreensContainer/LOADED_SCREEN_STORIES' =
  'ScreensContainer/LOADED_SCREEN_STORIES'

export const Actions = {
  LOADED_SCREEN_STORIES,
}

export type LoadedScreenStories = {
  type: typeof LOADED_SCREEN_STORIES,
  screenId: number,
  storyIds: number[],
  pageInfo: PageInfo,
}

export type Action = LoadedScreenStories
