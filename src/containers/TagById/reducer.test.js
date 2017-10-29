// @flow
import reducer, { initialState } from './reducer'
import * as actions from '../TagById/actions'

test('provide the initial state', () => {
  expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle RECEIVE_TAGS', () => {
  expect(reducer(initialState, actions.receiveTags([]))).toEqual({})
})
