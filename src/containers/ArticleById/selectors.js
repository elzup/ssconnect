// @flow
import type { State, Story, ArticleComp, Article, ID } from '../../types'
import { getBlog } from '../BlogById/selectors'
import { getStory } from '../StoryById/selectors'
import _ from 'lodash'
import moment from 'moment'

export const getArticle = (state: State, id: ID) => state.ArticleById[id]

export function getArticleCompOldest(state: State, id: ID): ArticleComp {
  const story = getStory(state, id)
  const articles = story.articles.map(aid => getArticle(state, aid))
  const oldestArticle = articles.filter(_.isObject).reduce((oa, ca) => {
    return moment(oa.postedAt).isBefore(moment(ca.postedAt)) ? oa : ca
  })
  return getArticleComp(state, oldestArticle, story)
}

export function getArticleComp(
  state: State,
  article: Article,
  story: Story,
): ArticleComp {
  const blog = getBlog(state, article.blog)
  return {
    ..._.omit(article, 'blog'),
    blog,
    story,
  }
}

export const getArticlesByStory = (state: State, story: Story) => ({
  ...story.articles.reduce((obj, id) => {
    obj[id] = getArticle(state, id)
    return obj
  }, {}),
})
