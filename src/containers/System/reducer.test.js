// @flow
import reducer, { initialState } from "./reducer";
import * as actions from "./actions";

test("provide the initial state", () => {
  expect(reducer(undefined, { type: "@@INIT" })).toEqual(initialState);
});

// TODO
test("handle SWITCH_TAB", () => {
  expect(reducer(initialState, actions.switchTab(1))).toEqual({});
});
