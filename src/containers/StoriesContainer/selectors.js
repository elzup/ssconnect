// @flow
import type { State } from '../../types'
import { getStory } from '../StoryById/selectors'

export const getVisibleStories = (state: State) =>
  state.StoriesContainer.map(id => getStory(state, id))
