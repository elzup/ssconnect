// @flow
import React from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { muiTheme } from 'storybook-addon-material-ui'

import '../injectGlobal'

import ButtonBar from '../components/BottomBar'
import LoadingIndicator from '../components/LoadingIndicator'
import StoryCell from '../components/StoryCell'
import type {
  Screen,
  Story,
  Article,
  ArticleById,
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
const articles: ArticleById = {
  '75603': {
    id: 75603,
    url: 'http://ayamevip.com/archives/46843668.html',
    postedAt: '2016-02-16T07:55:00.000Z',
    blog: 3,
  },
  '97311': {
    id: 97311,
    url: 'http://blog.livedoor.jp/mode_ss/archives/52009474.html',
    postedAt: '2016-02-17T16:00:00.000Z',
    blog: 5,
  },
}

const blogs: BlogById = {
  '3': {
    id: 3,
    title: 'あやめ速報',
  },
  '5': {
    id: 5,
    title: 'えすえすmode',
  },
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
      <StoryCell story={story} articles={articles} blogs={blogs} />
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
