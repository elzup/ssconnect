// @flow
import type { Article } from '../../types'

export const RECEIVE_ARTICLES: 'ArticlesContainer/RECEIVE_ARTICLES' =
  'ArticlesContainer/RECEIVE_ARTICLES'

export const Actions = {
  RECEIVE_ARTICLES,
}

export type ReceiveArticles = {
  type: typeof RECEIVE_ARTICLES,
  articles: $Shape<Article>[],
}

export type Action = ReceiveArticles
