// @flow
import type { Action as ArticlesContainerAction } from "../containers/ArticlesContainer/actionTypes";
import type { Action as BlogsContainerAction } from "../containers/BlogsContainer/actionTypes";
import type { Action as CartContainerAction } from "../containers/CartContainer/actionTypes";
import type { Action as ProductsContainerAction } from "../containers/ProductsContainer/actionTypes";
import type { Action as StoriesContainerAction } from "../containers/StoriesContainer/actionTypes";

export type ReduxInitAction = {
  type: "@@INIT"
};

export type Action =
  | ReduxInitAction
  | ArticlesContainerAction
  | BlogsContainerAction
  | CartContainerAction
  | ProductsContainerAction
  | StoriesContainerAction;
