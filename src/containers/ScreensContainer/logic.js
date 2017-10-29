// @flow
import type { ThunkAction, Screen } from '../../types'
import _ from 'lodash'
import moment from 'moment'

import * as client from '../../api/client'
import { receiveStories } from '../StoriesContainer/actions'
import { receiveBlogs } from '../BlogsContainer/actions'
import { switchTab } from '../System/actions'
import { receiveArticles } from '../ArticlesContainer/actions'
import * as actions from './actions'
import * as selectors from './selectors'

export function loadScreenStoryAll(): ThunkAction {
  return (dispatch, getState) => {
    _.each(getState().ScreensContainer, screen => {
      dispatch(loadScreenStory(screen))
    })
  }
}

export function loadScreenStory(screen: Screen): ThunkAction {
  return async dispatch => {
    const res = await client.getStories(screen).catch(err => {
      console.log(err)
      return false
    })
    if (res === false) {
      console.log('load error')
      return
    }
    const { stories, blogs, articles, pageInfo } = res
    dispatch(receiveStories(stories))
    dispatch(receiveArticles(articles))
    dispatch(receiveBlogs(blogs))

    const storyIds = stories
      .sort(
        (a, b) =>
          moment(a.firstPostedAt).isBefore(moment(b.firstPostedAt)) ? 1 : -1,
      )
      .map(story => story.id)

    dispatch(actions.loadedScreenStories(screen.id, storyIds, pageInfo))
  }
}

export function pageChange(screen: Screen, newPage: number): ThunkAction {
  return async (dispatch, getState) => {
    await dispatch(actions.pageChange(screen.id, newPage))
    dispatch(loadScreenStory(getState().ScreensContainer[screen.id]))
  }
}

export function searchSubmit(q: string, tag: string): ThunkAction {
  return async (dispatch, getState) => {
    await dispatch(actions.makeScreenProfile(q, tag))
    const screen = selectors.getNewScreen(getState())
    dispatch(switchTab(screen.id))
    dispatch(loadScreenStory(screen))
  }
}

export function deleteSubmit(screenId: number): ThunkAction {
  return async (dispatch, getState) => {
    await dispatch(switchTab(screenId - 1))
    await dispatch(actions.deleteScreenProfile(screenId))
  }
}
