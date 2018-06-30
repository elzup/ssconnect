// @flow
import type { Screen } from '../../types'

import { ADD_BOOKMARK, REMOVE_BOOKMARK } from './actionTypes'
import type { AddBookmark, RemoveBookmark } from './actionTypes'

export function addBookmark(key: string, screen: Screen): AddBookmark {
  return {
    type: ADD_BOOKMARK,
    key,
    screen,
  }
}
export function removeBookmark(key: string): RemoveBookmark {
  return {
    type: REMOVE_BOOKMARK,
    key,
  }
}
