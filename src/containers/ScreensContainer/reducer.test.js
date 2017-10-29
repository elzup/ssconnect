// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
  expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle LOADED_SCREEN_STORIES', () => {
  expect(reducer(initialState, actions.loadedScreenStories())).toEqual({
    '0': {
      id: 0,
      page: 1,
      type: 'new',
      tag: '',
      q: '',
      loaded: false,
      storyIds: [],
    },
    '1': {
      id: 1,
      page: 4,
      type: 'base',
      tag: '',
      q: 'タブ2',
      loaded: true,
      storyIds: [],
    },
  })
})

test('handle PAGE_CHANGE', () => {
  expect(reducer(initialState, actions.pageChange())).toEqual({
    '0': { id: 0, page: 1, type: 'new', loaded: false },
    '1': { id: 1, page: 1, type: 'search', tag: '', q: '櫻子', loaded: false },
  })
})
