// @flow
import * as React from 'react'
import type { Story, Blog, Article } from '../../types'
import styled from 'styled-components'

export type Props = {
  story: Story,
  blog: Blog,
  article: Article,
}

const Cell = styled.div`
  width: 100%;
  height: 400px;
  padding: 10px;
  background: orange;
`

const StoryCell = ({ story, blog, article }: Props) => {
  return <Cell>{story.title}</Cell>
}

export default StoryCell
