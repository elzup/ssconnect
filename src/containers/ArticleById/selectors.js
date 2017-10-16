// @flow
import type { State } from '../../types'

export const getArticle = (state: State, id: number) => state.ArticleById[id]
