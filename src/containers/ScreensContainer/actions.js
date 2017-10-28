// @flow
import type { ScreenLoaded, Story, PageInfo } from '../../types'

import { LOADED_SCREEN_STORIES } from './actionTypes'
import type { LoadedScreenStories } from './actionTypes'

export function loadedScreenStories(
  screenId: number,
  storyIds: number[],
  pageInfo: PageInfo,
): LoadedScreenStories {
  return {
    type: LOADED_SCREEN_STORIES,
    screenId,
    storyIds,
    pageInfo,
  }
}
