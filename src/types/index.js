// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { Action as _Action } from './action'
import type { State as _State } from './state'

type RehydrateAction = {
  type: 'persist/REHYDRATE',
  payload: _State,
}

export type State = _State
export type Action = _Action | RehydrateAction

export type Reducer = (state: State, action: Action) => State
export type Reducers = {
  [key: string]: Reducer,
}

export type GetState = () => State

export type ThunkAction = (
  dispatch: ReduxDispatch<*>,
  getState: GetState,
) => void | Promise<void>

type ThunkDispatch<A> = ThunkAction => A

export type Dispatch = ReduxDispatch<Action> & ThunkDispatch<Action>
export type Store = ReduxStore<State, Action, Dispatch>

export type PageInfo = {
  page: number,
  total: number,
  prev: number | false,
  next: number | false,
}

export type QueryParams = {
  page: number,
  tag: string,
  q: string,
}
export type ID = number | string

export type Blog = {|
  id: ID,
  title: string,
|}
export type BlogById = { [id: ID]: Blog }

export type Story = {
  id: ID,
  title: string,
  readed: boolean,
  firstPostedAt: string,
  tagList: string[],
  articles: number[],
}

export type Article = {
  id: ID,
  postedAt: string,
  blog: number,
  url: string,
}
export type ArticleById = { [id: ID]: Article }

export type ArticleComp = {
  id: ID,
  postedAt: string,
  url: string,
  blog: Blog,
  story: Story,
}

export type StoryById = { [id: ID]: Story }

export type Screen = {
  page: number,
  q: string,
  tag: string,
  id: string,
  label: string,
}

export type ScreenStore = {
  pages: { [page: number]: ID[] },
  total: number,
}

export type ScreenStoreById = {
  [id: string]: ScreenStore,
}

export type System = {
  selectedTab: number,
  drawer: {
    open: boolean,
  },
}

export type Tag = {
  id: ID,
  name: string,
  taggingsCount: number,
}
