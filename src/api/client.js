// @flow

import camelcaseKeysRecursive from 'camelcase-keys-recursive'
import { normalizeStories } from './normalize'
import request from 'superagent'
import _ from 'lodash'

import type {
  Story,
  Blog,
  Tag,
  QueryParams,
  PageInfo,
  Screen,
  Article,
} from '../types'

const UseHeader = {
  page: 'x-page',
  total: 'x-total-pages',
  next: 'x-next-page',
  prev: 'x-prev-page',
}

const host =
  process.env.NODE_ENV === 'development'
    ? // ? 'http://localhost:3001'
      'https://ssconnect.elzup.com'
    : 'https://ssconnect.elzup.com'
const TIMEOUT = 5000

const baseHeaders = {
  'Content-Type': 'application/json',
}

function permitQuery(screen: Screen): QueryParams {
  switch (screen.type) {
    case 'new': {
      const { page } = screen
      return { page, tag: '', q: '' }
    }
    case 'search': {
      const { page, tag, q } = screen
      return { page, tag, q }
    }
    case 'profile': {
      const { page, tag, q } = screen
      return { page, tag, q }
    }
    default: {
      // NOTE: Why can remove?
      return { page: 0, tag: '', q: '' }
    }
  }
}

type GetStoriesCallback = {
  stories: Story[],
  articles: Article[],
  blogs: Blog[],
  pageInfo: PageInfo,
}

export async function getStories(
  screen: Screen,
  timeout: number = TIMEOUT,
): Promise<GetStoriesCallback> {
  const params = permitQuery(screen)
  const storiesRequest = request
    .get(host + '/v1/stories')
    .query(params)
    .set(baseHeaders)
  const res = await new Promise((resolve, reject) => {
    storiesRequest.end((err, res) => {
      resolve(err || res)
    })
  })

  // { stories: res.data, pageInfo: FeedClient.getPageInfo(res) }
  const normalizedData = normalizeStories(res.body)
  const camelizedData = camelcaseKeysRecursive(normalizedData, { deep: true })
  const pageInfo = getPageInfo(res)

  return {
    stories: [],
    articles: [],
    blogs: [],
    ..._.mapValues(camelizedData.entities, _.values),
    pageInfo,
  }
}

function getPageInfo(res: any): PageInfo {
  return {
    page: parseInt(res.headers[UseHeader.page], 10),
    total: parseInt(res.headers[UseHeader.total], 10),
    next: parseInt(res.headers[UseHeader.next], 10) || false,
    prev: parseInt(res.headers[UseHeader.prev], 10) || false,
  }
}

export async function getTags(timeout: number = TIMEOUT): Promise<Tag[]> {
  const tagsRequest = request.get(host + '/v1/tags').set(baseHeaders)
  const res = await new Promise((resolve, reject) => {
    tagsRequest.end((err, res) => {
      resolve(err || res)
    })
  })

  return _.values(camelcaseKeysRecursive(res.body, { deep: true }))
}
