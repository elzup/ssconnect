// @flow

import camelcaseKeys from 'camelcase-keys'
import _ from 'lodash'
import { normalizeStories } from './normalize'
import request from 'superagent'

import type {
  Story,
  Blog,
  QueryParams,
  PageInfo,
  Screen,
  Article,
} from '../types'

const UseHeader = {
  page: 'X-Page',
  total: 'X-Total-Pages',
  next: 'X-Next-Page',
  prev: 'X-Prev-Page',
}

const host =
  process.env.NODE_ENV == 'development'
    ? // ? 'http://localhost:3001'
      'https://ssconnect.elzup.com'
    : 'https://ssconnect.elzup.com'
const TIMEOUT = 1000

const requestHeaders = _.values(UseHeader).join(', ')

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
    default: {
      // NOTE: Why can remove?
      return { page: 0, tag: '', q: '' }
    }
  }
}

type GetStoriesCallback = ({
  stories: Story[],
  articles: Article[],
  blogs: Blog[],
  pageInfo: PageInfo,
}) => void

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
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })

  // { stories: res.data, pageInfo: FeedClient.getPageInfo(res) }
  const normalizedData = normalizeStories(res.body)
  const camelizedData = camelcaseKeys(normalizedData, { deep: true })
  const pageInfo = getPageInfo(res)

  return { ..._.mapValues(camelizedData.entities, _.values), pageInfo }
}

function getPageInfo(res: any): PageInfo {
  return {
    page: parseInt(res.header[UseHeader.page], 10),
    total: parseInt(res.header[UseHeader.total], 10),
    next: parseInt(res.header[UseHeader.next], 10) || false,
    prev: parseInt(res.header[UseHeader.prev], 10) || false,
  }
}
