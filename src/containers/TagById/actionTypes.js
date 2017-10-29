// @flow
import type { Tag } from '../../types'

export const RECEIVE_TAGS: 'TagById/RECEIVE_TAGS' = 'TagById/RECEIVE_TAGS'

export const Actions = {
  RECEIVE_TAGS,
}

export type ReceiveTags = {
  type: typeof RECEIVE_TAGS,
  tags: Tag[],
}

export type Action = ReceiveTags
