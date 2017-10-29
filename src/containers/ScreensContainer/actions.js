// @flow
import type { ScreenLoaded, Story, PageInfo } from '../../types'

import { LOADED_SCREEN_STORIES, PAGE_CHANGE } from './actionTypes'
import type { LoadedScreenStories, PageChange } from './actionTypes'

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
export function pageChange(screenId: number, newPage: number): PageChange {
  return {
    type: PAGE_CHANGE,
    screenId,
    newPage,
  }
}
