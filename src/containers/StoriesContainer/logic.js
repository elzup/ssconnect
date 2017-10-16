// @flow
import * as client from '../../api/client'
import type { ThunkAction, Story } from '../../types'
import * as actions from './actions'

export function getHomeStories(): ThunkAction {
  return dispatch => {
    client.getStories((stories: Story[]) => {
      dispatch(actions.receiveStories(stories))
    })
  }
}
