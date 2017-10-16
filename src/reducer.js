// @flow
import { combineReducers } from "redux";
import CartContainer from "./containers/CartContainer/reducer";
import ProductById from "./containers/ProductById/reducer";
import ProductsContainer from "./containers/ProductsContainer/reducer";
import StoriesContainer from "./containers/StoriesContainer/reducer";
import StoryById from "./containers/StoryById/reducer";

export default combineReducers({
  CartContainer,
  ProductById,
  ProductsContainer,
  StoriesContainer,
  StoryById
});
