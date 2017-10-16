// @flow
import type { State } from '../../types'

export const getStory = (state: State, id: number) => state.StoryById[id]
