// @flow
import type { Blog } from '../../types'

export const RECEIVE_BLOGS: 'BlogsContainer/RECEIVE_BLOGS' =
  'BlogsContainer/RECEIVE_BLOGS'

export const Actions = {
  RECEIVE_BLOGS,
}

export type ReceiveBlogs = {
  type: typeof RECEIVE_BLOGS,
  blogs: Blog[],
}

export type Action = ReceiveBlogs
