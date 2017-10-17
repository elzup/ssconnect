// @flow
import type { Screen } from "../../types";

import { RECEIVE_SCREENS } from "./actionTypes";
import type { ReceiveScreens } from "./actionTypes";

export function receiveScreens(screens: Screen[]): ReceiveScreens {
  return {
    type: RECEIVE_SCREENS,
    screens
  };
}
