// @flow
import type { PageInfo } from '../../types'

import {
  LOADED_SCREEN_STORIES,
  PAGE_CHANGE,
  MAKE_SCREEN_PROFILE,
} from './actionTypes'
import type {
  LoadedScreenStories,
  PageChange,
  MakeScreenProfile,
} from './actionTypes'

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
export function makeScreenProfile(q: string, tag: string): MakeScreenProfile {
  return {
    type: MAKE_SCREEN_PROFILE,
    q,
    tag,
  }
}
