// @flow
import React from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { muiTheme } from 'storybook-addon-material-ui'

import '../injectGlobal'

import ButtonBar from '../components/BottomBar'
import PagingBar from '../components/PagingBar'
import LoadingIndicator from '../components/LoadingIndicator'
import StoryCell from '../components/StoryCell'
import type {
  Screen,
  PageInfo,
  Story,
  Article,
  ArticleComp,
  Blog,
  BlogById,
  System,
} from '../types'

const story: Story = {
  id: 1,
  title: '櫻子｢名探偵櫻子ちゃんだ！｣',
  tagList: ['ゆるゆり'],
  firstPostedAt: '2016-02-16T07:55:00.000Z',
  articles: [75603, 97311],
}
const blog: Blog = {
  id: 3,
  title: 'あやめ速報',
}

const article: ArticleComp = {
  id: 75603,
  url: 'http://ayamevip.com/archives/46843668.html',
  postedAt: '2016-02-16T07:55:00.000Z',
  blog,
  story,
}

const PhoneWrap = styled.div`
  width: 375px;
  height: 667px;
  margin: 10px;
  box-shadow: 0px 0px 10px 0px;
`

storiesOf('StoryCell', module)
  .addDecorator(muiTheme())
  .add('normal', () => (
    <PhoneWrap>
      <StoryCell article={article} />
    </PhoneWrap>
  ))

const screens: Screen[] = [
  {
    id: 1,
    type: 'new',
    page: 1,
    loaded: false,
  },
  {
    id: 2,
    type: 'search',
    tag: 'ゆるゆり',
    q: '京子',
    page: 1,
    loaded: false,
  },
]

const system: System = {
  loaded: 0,
  selectedTab: 1,
}

storiesOf('ButtonBar', module)
  .addDecorator(muiTheme())
  .add('normal', () => (
    <PhoneWrap>
      <ButtonBar
        screens={screens}
        switchTab={id => {
          console.log(`switch to ${id}`)
        }}
        system={system}
      />
    </PhoneWrap>
  ))

storiesOf('LoadingIndicator', module)
  .addDecorator(muiTheme())
  .add('normal', () => (
    <PhoneWrap>
      <LoadingIndicator />
    </PhoneWrap>
  ))

storiesOf('PagingBar', module)
  .addDecorator(muiTheme())
  .add('normal', () => (
    <PhoneWrap>
      <PagingBar
        pageInfo={{
          prev: 3,
          page: 4,
          next: 5,
          total: 100,
        }}
        pageChange={v => {
          console.log(v)
        }}
      />
      <PagingBar
        pageInfo={{
          prev: 1000,
          page: 1001,
          next: 1002,
          total: 9999,
        }}
        pageChange={console.log}
      />
    </PhoneWrap>
  ))
  .add('parts', () => (
    <PhoneWrap>
      <PagingBar
        pageInfo={{
          prev: false,
          page: 1,
          next: 2,
          total: 100,
        }}
        pageChange={console.log}
      />
      <PagingBar
        pageInfo={{
          prev: 99,
          page: 100,
          next: false,
          total: 100,
        }}
        pageChange={console.log}
      />
    </PhoneWrap>
  ))
