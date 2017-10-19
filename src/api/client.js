// @flow

import { create } from 'apisauce'
import camelcaseKeys from 'camelcase-keys'
import _ from 'lodash'
import { normalizeStories } from './normalize'

import type { Story, Blog, QueryParams, PageInfo, Screen } from '../types'

const host =
  process.env.NODE_ENV == 'development'
    ? // ? 'http://localhost:3001'
      'https://ssconnect.elzup.com'
    : 'https://ssconnect.elzup.com'
const TIMEOUT = 1000

const api = create({
  baseURL: host,
  timeout: TIMEOUT,
})

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
    default: {
      // NOTE: Why can remove?
      return { page: 0, tag: '', q: '' }
    }
  }
}

export function getStories(
  screen: Screen,
  cb: Function,
  timeout: number = TIMEOUT
) {
  const params = permitQuery(screen)
  const res = api.get('/v1/stories', params).then(res => {
    // { stories: res.data, pageInfo: FeedClient.getPageInfo(res) }
    const normalizedData = normalizeStories(res.data)
    const camelizedData = camelcaseKeys(normalizedData, { deep: true })
    const { articles, blogs, stories } = camelizedData.entities
    const articlesFlat = _.values(articles)
    cb(_.values(articles), _.values(blogs), _.values(stories))
  })
}

function getPageInfo(res: any): PageInfo {
  return {
    page: parseInt(res.headers['x-page'], 10),
    total: parseInt(res.headers['x-total-pages'], 10),
    next: parseInt(res.headers['x-next-page'], 10) || false,
    prev: parseInt(res.headers['x-prev-page'], 10) || false,
  }
}
