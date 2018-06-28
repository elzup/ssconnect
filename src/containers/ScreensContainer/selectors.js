// @flow
import type { State, Screen, PageInfo } from '../../types'

import { toId } from '../../utils'

export const getScreenStore = (state: State, screen: Screen) => {
  return state.ScreensContainer[toId(screen)]
}

export const getStoryIds = (state: State, screen: Screen) => {
  const s = getScreenStore(state, screen)
  if (!s) {
    return []
  }
  return s.pages[screen.page]
}

export function getPageInfo(state: State, screen: Screen): PageInfo {
  const s = getScreenStore(state, screen)
  if (!s) {
    return {
      total: 0,
      page: 0,
      next: false,
      prev: false,
    }
  }
  const { total } = s
  const { page } = screen
  return {
    total,
    page,
    next: page < total ? page + 1 : false,
    prev: page > 2 ? page - 1 : false,
  }
}
