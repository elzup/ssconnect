// @flow

import { REHYDRATE } from 'redux-persist/constants'
import type { System } from '.'
import type { Action as ArticlesContainerAction } from '../containers/ArticlesContainer/actionTypes'
import type { Action as BlogsContainerAction } from '../containers/BlogsContainer/actionTypes'
import type { Action as ScreensContainerAction } from '../containers/ScreensContainer/actionTypes'
import type { Action as StoriesContainerAction } from '../containers/StoriesContainer/actionTypes'
import type { Action as SystemAction } from '../containers/System/actionTypes'

export type ReduxInitAction = {
  type: '@@INIT',
}

export type Rehydrate = {
  type: REHYDRATE,
  payload: {
    System: System,
  },
}

export type Action =
  | ReduxInitAction
  | ArticlesContainerAction
  | BlogsContainerAction
  | ScreensContainerAction
  | StoriesContainerAction
  | SystemAction
