// @flow
import type { Screen } from "../../types";

export const SWITCH_TAB: "System/SWITCH_TAB" = "System/SWITCH_TAB";

export const Actions = {
  SWITCH_TAB
};

export type SwitchTab = {
  type: typeof SWITCH_TAB,
  target: number
};

export type Action = SwitchTab;
