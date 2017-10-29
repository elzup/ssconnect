// @flow
import type { State } from '../../types'
import { getArticlesByStory } from '../ArticleById/selectors'

export const getStory = (state: State, id: number) => state.StoryById[id]

export const getStoryFull = (state: State, id: number) => {
  const story = getStory(state, id)
  const articles = getArticlesByStory(state, story)
  const blogs = state.BlogsContainer
  return { story, articles, blogs }
}
