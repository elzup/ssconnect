// @flow

import type { Action, Screen } from '../../types'
import { Actions } from './actionTypes'
import _ from 'lodash'

export type State = { [id: number | string]: Screen }

export const initialState: State = {
  '0': {
    id: 0,
    page: 1,
    type: 'new',
    loaded: false,
  },
  '1': {
    id: 1,
    page: 1,
    type: 'search',
    tag: '',
    q: '',
    loaded: false,
  },
  '2': {
    id: 2,
    page: 1,
    type: 'profile',
    tag: '',
    q: '櫻子',
    loaded: false,
  },
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.MAKE_SCREEN_PROFILE:
      const id = Object.keys(state).length
      return {
        ...state,
        [id]: {
          id: id,
          type: 'profile',
          page: 1,
          tag: action.tag,
          q: action.q,
          loaded: false,
        },
      }

    case Actions.PAGE_CHANGE: {
      const { newPage, screenId } = action
      return {
        ...state,
        [screenId]: {
          ..._.omit(state[screenId], ['storyIds', 'pageInfo']),
          page: newPage,
          loaded: false,
        },
      }
    }

    case Actions.LOADED_SCREEN_STORIES: {
      const { screenId, storyIds, pageInfo } = action
      return {
        ...state,
        [screenId]: {
          ..._.omit(state[screenId], ['storyIds', 'pageInfo']),
          storyIds: storyIds,
          pageInfo: pageInfo,
          loaded: true,
        },
      }
    }
    default:
      return state
  }
}
