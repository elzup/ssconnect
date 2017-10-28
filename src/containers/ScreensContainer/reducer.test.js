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
      actions.loadedScreenStories({
        id: 1,
        page: 4,
        type: 'base',
        tag: '',
        q: 'タブ2',
        loaded: true,
        pageInfo: {
          page: 1,
          next: 2,
          prev: false,
          total: 10,
        },
        storyIds: [],
      }),
    ),
  ).toEqual({
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
