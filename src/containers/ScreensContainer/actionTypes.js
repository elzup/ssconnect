// @flow
import type { Screen, Story, PageInfo } from '../../types'

export const LOADED_SCREEN_STORIES: 'ScreensContainer/LOADED_SCREEN_STORIES' =
  'ScreensContainer/LOADED_SCREEN_STORIES'

export const Actions = {
  LOADED_SCREEN_STORIES,
}

export type LoadedScreenStories = {
  type: typeof LOADED_SCREEN_STORIES,
  screen: $Shape<Screen>,
}

export type Action = LoadedScreenStories
