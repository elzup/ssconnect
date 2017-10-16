// @flow
import reducer, { initialState } from './reducer'
import * as actions from '../StoriesContainer/actions'

test('provide the initial state', () => {
  expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle RECEIVE_STORIES', () => {
  expect(reducer(initialState, actions.receiveStories([]))).toEqual({})
})
