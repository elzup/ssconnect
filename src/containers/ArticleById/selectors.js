// @flow
import type { State, Story } from '../../types'

export const getArticle = (state: State, id: number) => state.ArticleById[id]
export const getArticlesByStory = (state: State, story: Story) =>
  story.articles.map(id => getArticle(state, id))
