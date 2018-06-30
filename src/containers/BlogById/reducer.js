// @flow
import type { Action, Blog, ID } from '../../types'
import { Actions } from '../BlogsContainer/actionTypes'

export type State = { [id: ID]: Blog }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.RECEIVE_BLOGS:
      return {
        ...state,
        ...action.blogs.reduce((obj, blog) => {
          obj[blog.id] = blog
          return obj
        }, {}),
      }
    default:
      return state
  }
}
