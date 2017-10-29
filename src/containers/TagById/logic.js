// @flow
import type { ThunkAction } from '../../types'
import * as actions from './actions'
import * as client from '../../api/client'

export function loadTags(): ThunkAction {
  return async dispatch => {
    const tags = await client.getTags()
    dispatch(actions.receiveTags(tags))
  }
}
