// @flow
import * as client from '../../api/client'
import type { ThunkAction, Story, Blog, Article } from '../../types'
import * as actions from './actions'
import { receiveBlogs } from '../BlogsContainer/actions'
import { receiveArticles } from '../ArticlesContainer/actions'

export function getHomeStories(): ThunkAction {
  return dispatch => {
    client.getStories(
      (stories: Story[], blogs: Blog[], articles: Article[]) => {
        dispatch(actions.receiveStories(stories))
        dispatch(receiveBlogs(blogs))
        dispatch(receiveArticles(articles))
      }
    )
  }
}
