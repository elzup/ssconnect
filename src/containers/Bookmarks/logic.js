// @flow
import type { ThunkAction, Screen } from '../../types'
import * as actions from './actions'
import * as selectors from './selectors'

import { toId } from '../../utils'

export function toggleBookmark(screen: Screen): ThunkAction {
  return (dispatch, getState) => {
    const key = toId(screen)
    if (selectors.bookmarked(getState(), screen)) {
      dispatch(actions.removeBookmark(key))
    } else {
      dispatch(actions.addBookmark(key, screen))
    }
  }
}
