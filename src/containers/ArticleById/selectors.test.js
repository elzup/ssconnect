// @flow
import type { State } from '../../types'
import * as selectros from './selectors'

const state: $Shape<State> = {
  StoriesContainer: [1],
  StoryById: {
    '1': {
      readed: false,
      id: 1,
      title: '楓「瑞樹さんって可愛いですよね」　瑞樹「え？」',
      firstPostedAt: '2017-11-25T14:40:56.000Z',
      tagList: ['シンデレラガールズ'],
      articles: [1, 2, 3, 4],
    },
  },
  ArticlesContainer: [1, 2, 3, 4],
  ArticleById: {
    '1': {
      id: 1,
      url: 'http://elephant.2chblog.jp/archives/52214634.html',
      postedAt: '2017-11-25T10:40:31.000Z',
      blog: 4,
    },
    '2': {
      id: 2,
      url: 'http://elephant.2chblog.jp/archives/52214657.html',
      postedAt: '2017-11-22T14:40:56.000Z',
      blog: 4,
    },
    '3': {
      id: 3,
      url: 'http://elephant.2chblog.jp/archives/52214657.html',
      postedAt: '2017-11-26T14:40:56.000Z',
      blog: 4,
    },
    '4': {
      id: 4,
      url: 'http://elephant.2chblog.jp/archives/52214657.html',
      postedAt: '2017-11-23T14:40:56.000Z',
      blog: 4,
    },
  },
  BlogsContainer: [4],
  BlogById: {
    '4': {
      id: 4,
      title: 'えすえすログ',
    },
  },
}

test('getArticleCompOldest', () => {
  expect(selectros.getArticleCompOldest(state, 1).id).toBe(2)
})
