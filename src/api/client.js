// @flow

import { create } from 'apisauce'
import type { Story, Blog } from '../types'

const host =
  process.env.NODE_ENV == 'development'
    ? 'http://localhost:3001'
    : 'https://ssconnect.elzup.com'
const TIMEOUT = 1000

const api = create({
  baseURL: host,
  timeout: TIMEOUT,
})

type PageInfo = {
  page: number,
  total: number,
  prev: number | false,
  next: number | false,
}

type Params = {
  page?: number,
  tag?: string,
  blog_id?: number,
  q?: string,
}

export function getStories(
  cb: Function,
  params: ?Params,
  timeout: number = TIMEOUT
) {
  const defaultParams = { page: 1 }
  const res = api
    .get('/v1/stories', {
      ...defaultParams,
      ...params,
    })
    .then(res => {
      // { stories: res.data, pageInfo: FeedClient.getPageInfo(res) }
      debugger
      cb(res.data)
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
