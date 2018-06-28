// @flow
import type { Action as ArticlesContainerAction } from '../containers/ArticlesContainer/actionTypes'
import type { Action as BlogsContainerAction } from '../containers/BlogsContainer/actionTypes'
import type { Action as BookmarkScreenAction } from '../containers/BookmarkScreen/actionTypes'
import type { Action as ScreensContainerAction } from '../containers/ScreensContainer/actionTypes'
import type { Action as StoriesContainerAction } from '../containers/StoriesContainer/actionTypes'
import type { Action as SystemAction } from '../containers/System/actionTypes'
import type { Action as TagByIdAction } from '../containers/TagById/actionTypes'

export type ReduxInitAction = {
  type: '@@INIT',
}

export type Action =
  | ReduxInitAction
  | ArticlesContainerAction
  | BlogsContainerAction
  | BookmarkScreenAction
  | ScreensContainerAction
  | StoriesContainerAction
  | SystemAction
  | TagByIdAction
