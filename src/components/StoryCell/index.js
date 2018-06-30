// @flow
import * as React from 'react'
import type { ArticleComp } from '../../types'
import styled from 'styled-components'
import moment from 'moment'

export type Props = {
  article: ArticleComp,
  openedArticle: Function,
}

const Wrapper = styled.div`
  width: 100%;
`

const Cell = styled.div`
  padding: 10px;
  cursor: pointer;
  opacity: ${p => (p.readed ? '.3' : '1')};
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.6em;
`

const Title = styled.div`
  font-size: 1.2em;
`

const Footer = styled.div`
  display: flex;
`

const TagLabel = styled.div`
  border: 1px solid gray;
  font-size: 0.5em;
  padding: 0 4px;
  border-radius: 3px;
  &:not(:first-child) {
    margin-left: 3px;
  }
`

const StoryCell = ({ article, openedArticle }: Props) => {
  const timestamp = moment(article.story.firstPostedAt).fromNow()
  return (
    <Wrapper>
      <Cell
        readed={article.story.readed}
        onClick={() => {
          window.open(article.url)
          openedArticle(article, article.story)
        }}
      >
        <Header>
          <span>{article.blog.title}</span>
          <span>{timestamp}</span>
        </Header>
        <Title>{article.story.title}</Title>
        <Footer>
          {article.story.tagList.map(tag => (
            <TagLabel key={tag}>{tag}</TagLabel>
          ))}
        </Footer>
      </Cell>
    </Wrapper>
  )
}

export default StoryCell
