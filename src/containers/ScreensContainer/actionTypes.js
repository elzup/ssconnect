// @flow
import type { ScreenStore } from '../../types'

export const SAVE_SCREEN: 'ScreensContainer/SAVE_SCREEN' =
  'ScreensContainer/SAVE_SCREEN'

export const Actions = {
  SAVE_SCREEN,
}

export type SaveScreen = {
  type: typeof SAVE_SCREEN,
  key: string,
  screenStore: ScreenStore,
}

export type Action = SaveScreen
