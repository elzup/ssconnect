// @flow
import reducer, { initialState } from "./reducer";
import * as actions from "../BlogsContainer/actions";

test("provide the initial state", () => {
  expect(reducer(undefined, { type: "@@INIT" })).toEqual(initialState);
});

test("handle RECEIVE_BLOGS", () => {
  expect(reducer(initialState, actions.receiveBlogs([]))).toEqual({});
});
