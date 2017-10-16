// @flow
import type { State } from '../../types'

export const getBlog = (state: State, id: number) => state.BlogById[id]
