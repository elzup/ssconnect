// @flow
import * as React from 'react'
import type { Story, Article, BlogById, ArticleById } from '../../types'
import styled from 'styled-components'
import moment from 'moment'

export type Props = {
  story: Story,
  blogs: BlogById,
  articles: ArticleById,
}

const Wrapper = styled.div`
  width: 100%;
  background: #fafafa;
`

const Cell = styled.div`
  padding: 10px;
  width: 100%;
`

function oldestArticle(story: Story, articles: ArticleById) {
  const oldestArticleId = story.articles.reduce((o, c) => {
    return moment(articles[o].postedAt).isAfter(moment(articles[c].postedAt))
      ? o
      : c
  }, story.articles[0])
  return articles[oldestArticleId]
}

const StoryCell = ({ story, blogs, articles }: Props) => {
  const article = oldestArticle(story, articles)
  return (
    <Wrapper>
      <Cell>
        {blogs[article.blog].title}
        {story.title}
      </Cell>
    </Wrapper>
  )
}

export default StoryCell
