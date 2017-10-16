// @flow
import type { State } from '../../types'
import { getArticle } from '../ArticleById/selectors'

export const getVisibleStories = (state: State) =>
  state.StoriesContainer.map(id => getArticle(state, id))
