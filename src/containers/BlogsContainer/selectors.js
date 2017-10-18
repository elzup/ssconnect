// @flow
import type { State } from '../../types'
import { getArticle } from '../ArticleById/selectors'
import _ from 'lodash'

export const getVisibleStories = (state: State) =>
  state.StoriesContainer.map(id => getArticle(state, id))
