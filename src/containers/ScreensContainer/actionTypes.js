// @flow
import type { PageInfo } from '../../types'

export const LOADED_SCREEN_STORIES: 'ScreensContainer/LOADED_SCREEN_STORIES' =
  'ScreensContainer/LOADED_SCREEN_STORIES'
export const PAGE_CHANGE: 'ScreensContainer/PAGE_CHANGE' =
  'ScreensContainer/PAGE_CHANGE'

export const Actions = {
  LOADED_SCREEN_STORIES,
  PAGE_CHANGE,
}

export type LoadedScreenStories = {
  type: typeof LOADED_SCREEN_STORIES,
  screenId: number,
  storyIds: number[],
  pageInfo: PageInfo,
}

export type PageChange = {
  type: typeof PAGE_CHANGE,
  screenId: number,
  newPage: number,
}

export type Action = LoadedScreenStories | PageChange
