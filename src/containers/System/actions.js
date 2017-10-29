// @flow
import { SWITCH_TAB } from './actionTypes'
import type { SwitchTab } from './actionTypes'

export function switchTab(target: number): SwitchTab {
  return {
    type: SWITCH_TAB,
    target,
  }
}
