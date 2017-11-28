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

// Shopping Cart
type BaseProduct = {
  id: number,
  title: string,
  price: number,
}

export type Product = BaseProduct & {
  inventory: number,
}

export type ProductInCart = BaseProduct & {
  quantity: number,
}

export type QuantityById = { [id: number]: number }

export type Cart = {
  addedIds: number[],
  quantityById: QuantityById,
}

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

export type Blog = {|
  id: number,
  title: string,
|}
export type BlogById = { [id: number | string]: Blog }

export type Story = {
  id: number,
  title: string,
  readed: boolean,
  firstPostedAt: string,
  tagList: string[],
  articles: number[],
}

export type Article = {
  id: number,
  postedAt: string,
  blog: number,
  url: string,
}
export type ArticleById = { [id: number | string]: Article }

export type ArticleComp = {
  id: number,
  postedAt: string,
  url: string,
  blog: Blog,
  story: Story,
}

export type StoryById = { [id: number | string]: Story }

export type ScreenNoLoadedProp = {
  loaded: false,
}

export type ScreenLoadedProp = {
  loaded: true,
  storyIds: number[],
  pageInfo: PageInfo,
}

export type ScreenBase = {
  id: number,
  page: number,
}

export type ScreenProfile = ScreenBase & {
  type: 'profile',
  q: string,
  tag: string,
}

export type ScreenSearch = ScreenBase & {
  type: 'search',
  q: string,
  tag: string,
}

export type ScreenNews = ScreenBase & {
  type: 'new',
}

export type ScreenLoaded =
  | (ScreenProfile & ScreenLoadedProp)
  | (ScreenSearch & ScreenLoadedProp)
  | (ScreenNews & ScreenLoaded)

export type ScreenNoLoaded =
  | (ScreenProfile & ScreenNoLoaded)
  | (ScreenSearch & ScreenNoLoaded)
  | (ScreenNews & ScreenNoLoaded)

export type Screen = ScreenLoaded | ScreenNoLoaded

export type System = {
  rehydrated: boolean,
  selectedTab: number,
}

export type Tag = {
  id: number,
  name: string,
  taggingsCount: number,
}
