// @flow
import type { State, Screen } from '../../types'
import { toId } from '../../utils'

export const getBookmarks = (state: State) => {
  return state.Bookmarks.map(v => state.BookmarkById[v])
}

export const bookmarked = (state: State, screen: Screen) => {
  const key = toId(screen)
  return state.Bookmarks.indexOf(key) > -1
}
