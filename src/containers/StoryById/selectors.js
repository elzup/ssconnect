// @flow
import type { State, ID } from '../../types'
import { getArticlesByStory } from '../ArticleById/selectors'

export const getStory = (state: State, id: ID) => state.StoryById[id]

export const getStoryFull = (state: State, id: ID) => {
  const story = getStory(state, id)
  const articles = getArticlesByStory(state, story)
  const blogs = state.BlogsContainer
  return { story, articles, blogs }
}
