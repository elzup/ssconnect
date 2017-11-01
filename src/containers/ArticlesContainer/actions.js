// @flow
import type { Article } from '../../types'

import { RECEIVE_ARTICLES } from './actionTypes'
import type { ReceiveArticles } from './actionTypes'

export function receiveArticles(articles: $Shape<Article>[]): ReceiveArticles {
  return {
    type: RECEIVE_ARTICLES,
    articles,
  }
}
