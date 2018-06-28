// @flow
import type { Screen } from '../../types'

export const ADD_BOOKMARK: 'BookmarkScreen/ADD_BOOKMARK' =
  'BookmarkScreen/ADD_BOOKMARK'
export const REMOVE_BOOKMARK: 'BookmarkScreen/REMOVE_BOOKMARK' =
  'BookmarkScreen/REMOVE_BOOKMARK'

export const Actions = {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
}

export type AddBookmark = {
  type: typeof ADD_BOOKMARK,
  key: string,
  screen: Screen,
}

export type RemoveBookmark = {
  type: typeof REMOVE_BOOKMARK,
  key: string,
}

export type Action = AddBookmark | RemoveBookmark
