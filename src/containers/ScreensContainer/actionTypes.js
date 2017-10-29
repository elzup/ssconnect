// @flow
import type { PageInfo } from '../../types'

export const LOADED_SCREEN_STORIES: 'ScreensContainer/LOADED_SCREEN_STORIES' =
  'ScreensContainer/LOADED_SCREEN_STORIES'
export const PAGE_CHANGE: 'ScreensContainer/PAGE_CHANGE' =
  'ScreensContainer/PAGE_CHANGE'
export const MAKE_SCREEN_PROFILE: 'ScreensContainer/MAKE_SCREEN_PROFILE' =
  'ScreensContainer/MAKE_SCREEN_PROFILE'
export const DELETE_SCREEN_PROFILE: 'ScreensContainer/DELETE_SCREEN_PROFILE' =
  'ScreensContainer/DELETE_SCREEN_PROFILE'

export const Actions = {
  LOADED_SCREEN_STORIES,
  PAGE_CHANGE,
  MAKE_SCREEN_PROFILE,
  DELETE_SCREEN_PROFILE,
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

export type MakeScreenProfile = {
  type: typeof MAKE_SCREEN_PROFILE,
  q: string,
  tag: string,
}

export type DeleteScreenProfile = {
  type: typeof DELETE_SCREEN_PROFILE,
  screenId: number,
}

export type Action =
  | LoadedScreenStories
  | PageChange
  | MakeScreenProfile
  | DeleteScreenProfile
