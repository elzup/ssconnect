// @flow
import { SWITCH_TAB, TOGGLE_DRAWER } from './actionTypes'
import type { SwitchTab, ToggleDrawer } from './actionTypes'

export function switchTab(target: number): SwitchTab {
  return {
    type: SWITCH_TAB,
    target,
  }
}
export function toggleDrawer(): ToggleDrawer {
  return {
    type: TOGGLE_DRAWER,
  }
}
