// @flow
import type { Action as CartContainerAction } from "../containers/CartContainer/actionTypes";
import type { Action as ProductsContainerAction } from "../containers/ProductsContainer/actionTypes";
import type { Action as StoriesContainerAction } from "../containers/StoriesContainer/actionTypes";

export type ReduxInitAction = {
  type: "@@INIT"
};

export type Action =
  | ReduxInitAction
  | CartContainerAction
  | ProductsContainerAction
  | StoriesContainerAction;
