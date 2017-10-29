// @flow
import type { State } from '../../types'

export const getActiveScreen = (state: State) =>
  state.ScreensContainer[state.System.selectedTab]

export const getNewScreen = (state: State) =>
  state.ScreensContainer[Object.keys(state.ScreensContainer).length - 1]
