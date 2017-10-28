// @flow
import type { Screen, Story, PageInfo } from '../../types'

import { LOADED_SCREEN_STORIES } from './actionTypes'
import type { LoadedScreenStories } from './actionTypes'

export function loadedScreenStories(
  screen: $Shape<Screen>,
): LoadedScreenStories {
  return {
    type: LOADED_SCREEN_STORIES,
    screen,
  }
}
