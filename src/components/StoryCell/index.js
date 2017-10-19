// @flow
import * as React from 'react'
import type { Story, BlogById, ArticleById } from '../../types'
import styled from 'styled-components'

export type Props = {
  story: Story,
  blogs: BlogById,
  articles: ArticleById,
}

const Cell = styled.div`
  width: 100%;
  height: 400px;
  padding: 10px;
  background: orange;
`

const StoryCell = ({ story, blogs, articles }: Props) => {
  return <Cell>{story.title}</Cell>
}

export default StoryCell
