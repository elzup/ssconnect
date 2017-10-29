// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
  expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle LOADED_SCREEN_STORIES', () => {
  expect(
    reducer(
      initialState,
      actions.loadedScreenStories(0, [1, 2, 3], {
        page: 1,
        prev: false,
        next: 2,
        total: 100,
      }),
    ),
  ).toEqual({
    '0': {
      id: 0,
      page: 1,
      type: 'new',
      loaded: true,
      storyIds: [1, 2, 3],
      pageInfo: {
        page: 1,
        prev: false,
        next: 2,
        total: 100,
      },
    },
    '1': { id: 1, page: 1, type: 'search', tag: '', q: '', loaded: false },
    '2': { id: 2, page: 1, type: 'profile', tag: '', q: '櫻子', loaded: false },
  })
})

test('handle PAGE_CHANGE', () => {
  expect(reducer(initialState, actions.pageChange(1, 4))).toEqual({
    '0': {
      id: 0,
      page: 1,
      type: 'new',
      loaded: false,
    },
    '1': {
      id: 1,
      page: 4,
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
  })
})

test('handle MAKE_SCREEN_PROFILE', () => {
  expect(
    reducer(initialState, actions.makeScreenProfile('keyword', '')),
  ).toEqual({
    '0': { id: 0, page: 1, type: 'new', loaded: false },
    '1': { id: 1, page: 1, type: 'search', tag: '', q: '', loaded: false },
    '2': { id: 2, page: 1, type: 'profile', tag: '', q: '櫻子', loaded: false },
    '3': {
      id: 3,
      page: 1,
      type: 'profile',
      tag: '',
      q: 'keyword',
      loaded: false,
    },
  })
})
