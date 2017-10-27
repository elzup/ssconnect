// @flow
import type { Screen, Story } from '../../types'

import { LOADED_SCREEN_STORIES } from './actionTypes'
import type { LoadedScreenStories } from './actionTypes'

export function loadedScreenStories(
  screenId: number,
  stories: Story[],
): LoadedScreenStories {
  return {
    type: LOADED_SCREEN_STORIES,
    screenId,
    stories,
  }
}
