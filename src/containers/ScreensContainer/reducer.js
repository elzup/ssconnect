// @flow
import type { Action, Screen } from '../../types'
import { Actions } from './actionTypes'

export type State = Screen[]

export const initialState: State = [
  {
    id: 0,
    page: 1,
    type: 'base',
    tag: '',
    q: '',
  },
  {
    id: 1,
    page: 4,
    type: 'base',
    tag: '',
    q: '京子',
  },
]

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.RECEIVE_SCREENS:
      return action.screens
    default:
      return state
  }
}
