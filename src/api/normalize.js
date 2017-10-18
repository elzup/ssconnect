// @flow

import { normalize, schema } from 'normalizr'
const blog = new schema.Entity('blogs')

// Define your comments schema
const article = new schema.Entity('articles', {
  blog: blog,
})

// Define your article
const story = new schema.Entity('stories', {
  articles: [article],
})

export const normalizeStories = (data: Object) => {
  return normalize(data, [story])
}
