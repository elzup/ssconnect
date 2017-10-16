// @flow
import type { State as ArticleById } from "../containers/ArticleById/reducer";
import type { State as ArticlesContainer } from "../containers/ArticlesContainer/reducer";
import type { State as CartContainer } from "../containers/CartContainer/reducer";
import type { State as ProductById } from "../containers/ProductById/reducer";
import type { State as ProductsContainer } from "../containers/ProductsContainer/reducer";
import type { State as StoriesContainer } from "../containers/StoriesContainer/reducer";
import type { State as StoryById } from "../containers/StoryById/reducer";

export type State = {
  ArticleById: ArticleById,
  ArticlesContainer: ArticlesContainer,
  CartContainer: CartContainer,
  ProductById: ProductById,
  ProductsContainer: ProductsContainer,
  StoriesContainer: StoriesContainer,
  StoryById: StoryById
};
