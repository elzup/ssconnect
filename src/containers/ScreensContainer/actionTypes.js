// @flow

import type { Screen } from "../../types";

export const RECEIVE_SCREENS: "ScreensContainer/RECEIVE_SCREENS" =
  "ScreensContainer/RECEIVE_SCREENS";

export const Actions = {
  RECEIVE_SCREENS
};

export type ReceiveScreens = {
  type: typeof RECEIVE_SCREENS,
  screens: Screen[]
};

export type Action = ReceiveScreens;
