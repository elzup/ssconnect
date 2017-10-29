// @flow
import type { Action, Blog } from '../../types'
import { Actions } from '../BlogsContainer/actionTypes'

export type State = { [id: number]: Blog }

export const initialState: State = {}

export default function(
  state: State = initialState,
  action: Action,
): Exact<State> {
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
