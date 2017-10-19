// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { Action as _Action } from './action'
import type { State as _State } from './state'

export type State = _State
export type Action = _Action

export type GetState = () => State

export type ThunkAction = (
  dispatch: Dispatch,
  getState: GetState
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

export type Article = {|
  id: number,
  postedAt: string,
  blogId: number,
|}

export type Story = {
  id: number,
  title: string,
  firstPostedAt: string,
  tagList: string[],
  articleId: number[],
}

export type ScreenNoLoaded = {
  loaded: false,
}

export type ScreenLoaded = {
  loaded: true,
  storyIds: number[],
}

export type ScreenBase = {
  id: number,
  page: number,
}

export type ScreenSearch = ScreenBase & {
  type: 'search',
  q: string,
  tag: string,
}

export type ScreenNews = ScreenBase & {
  type: 'new',
}

export type Screen =
  | (ScreenSearch & ScreenLoaded)
  | (ScreenSearch & ScreenNoLoaded)
  | (ScreenNews & ScreenLoaded)
  | (ScreenNews & ScreenNoLoaded)

export type System = {|
  selectedTab: number,
  loaded: number,
|}
