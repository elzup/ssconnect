// @flow
import type { Story } from '../../types'

import { RECEIVE_STORIES } from './actionTypes'
import type { ReceiveStories } from './actionTypes'

export function receiveStories(stories: Story[]): ReceiveStories {
  return {
    type: RECEIVE_STORIES,
    stories,
  }
}
