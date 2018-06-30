// @flow
export const SWITCH_TAB: 'System/SWITCH_TAB' = 'System/SWITCH_TAB'
export const TOGGLE_DRAWER: 'System/TOGGLE_DRAWER' = 'System/TOGGLE_DRAWER'

export const Actions = {
  SWITCH_TAB,
  TOGGLE_DRAWER,
}

export type SwitchTab = {
  type: typeof SWITCH_TAB,
  target: number,
}

export type ToggleDrawer = {
  type: typeof TOGGLE_DRAWER,
}

export type Action = SwitchTab | ToggleDrawer
