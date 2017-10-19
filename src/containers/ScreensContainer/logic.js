// @flow
import type { ThunkAction, Article, Story, Blog, Screen } from '../../types'
import * as client from '../../api/client'
import _ from 'lodash'
import { receiveStories } from '../StoriesContainer/actions'
import { receiveBlogs } from '../BlogsContainer/actions'
import { receiveArticles } from '../ArticlesContainer/actions'
import { loadedScreenStories } from '../ScreensContainer/actions'

export function loadScreenStoryAll(): ThunkAction {
  return (dispatch, getState) => {
    _.each(getState().ScreensContainer, screen => {
      dispatch(loadScreenStory(screen))
    })
  }
}

export function loadScreenStory(screen: Screen): ThunkAction {
  return dispatch => {
    client.getStories(screen, ({ stories, blogs, articles }) => {
      dispatch(receiveStories(stories))
      dispatch(receiveArticles(articles))
      dispatch(receiveBlogs(blogs))
      dispatch(loadedScreenStories(screen.id, stories))
    })
  }
}
