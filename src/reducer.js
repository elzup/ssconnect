// @flow
import { combineReducers } from "redux";
import ArticleById from "./containers/ArticleById/reducer";
import ArticlesContainer from "./containers/ArticlesContainer/reducer";
import CartContainer from "./containers/CartContainer/reducer";
import ProductById from "./containers/ProductById/reducer";
import ProductsContainer from "./containers/ProductsContainer/reducer";
import StoriesContainer from "./containers/StoriesContainer/reducer";
import StoryById from "./containers/StoryById/reducer";

export default combineReducers({
  ArticleById,
  ArticlesContainer,
  CartContainer,
  ProductById,
  ProductsContainer,
  StoriesContainer,
  StoryById
});
