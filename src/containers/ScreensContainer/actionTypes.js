// @flow
import type { Screen, Story } from '../../types'

export const LOADED_SCREEN_STORIES: 'ScreensContainer/LOADED_SCREEN_STORIES' =
  'ScreensContainer/LOADED_SCREEN_STORIES'

export const Actions = {
  LOADED_SCREEN_STORIES,
}

export type LoadedScreenStories = {
  type: typeof LOADED_SCREEN_STORIES,
  screenId: number,
  stories: Story[],
}

export type Action = LoadedScreenStories
