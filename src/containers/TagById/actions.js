// @flow
import type { Tag } from '../../types'

import { RECEIVE_TAGS } from './actionTypes'
import type { ReceiveTags } from './actionTypes'

export function receiveTags(tags: Tag[]): ReceiveTags {
  return {
    type: RECEIVE_TAGS,
    tags,
  }
}
