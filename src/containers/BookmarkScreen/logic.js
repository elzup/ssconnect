// @flow
import type { ThunkAction, Screen } from '../../types'
import * as actions from './actions'

import { toId } from '../../utils'

export function toggleBookmark(screen: Screen): ThunkAction {
  return (dispatch, getState) => {
    const key = toId(screen)
    const bookmarks = getState.BookmarkScreen
    if (key in bookmarks) {
      dispatch(actions.removeBookmark(key))
    } else {
      dispatch(actions.addBookmark(key, screen))
    }
  }
}
