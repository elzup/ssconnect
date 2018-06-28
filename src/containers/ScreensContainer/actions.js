// @flow
import type { ScreenStore } from '../../types'

import { SAVE_SCREEN } from './actionTypes'
import type { SaveScreen } from './actionTypes'

export function saveScreen(key: string, screenStore: ScreenStore): SaveScreen {
  return {
    type: SAVE_SCREEN,
    key,
    screenStore,
  }
}
