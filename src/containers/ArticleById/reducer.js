// @flow
import type { Action, Article } from '../../types'
import { Actions } from '../ArticlesContainer/actionTypes'
import { Actions as ArticleActions } from '../ArticlesContainer/actionTypes'

export type State = { [id: number]: Article }

export const initialState: State = {}

export default function(
  state: State = initialState,
  action: Action
): Exact<State> {
  switch (action.type) {
    case Actions.RECEIVE_ARTICLES:
      return {
        ...state,
        ...action.articles.reduce((obj, article) => {
          obj[article.id] = article
          return obj
        }, {}),
      }
    default:
      return state
  }
}
