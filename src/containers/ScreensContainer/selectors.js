// @flow
import type { State } from '../../types'

export const getActiveScreen = (state: State) =>
  state.ScreensContainer[state.System.selectedTab]
