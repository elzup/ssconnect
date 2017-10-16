// @flow
import { combineReducers } from "redux";
import ArticleById from "./containers/ArticleById/reducer";
import ArticlesContainer from "./containers/ArticlesContainer/reducer";
import BlogById from "./containers/BlogById/reducer";
import BlogsContainer from "./containers/BlogsContainer/reducer";
import StoriesContainer from "./containers/StoriesContainer/reducer";
import StoryById from "./containers/StoryById/reducer";

export default combineReducers({
  ArticleById,
  ArticlesContainer,
  BlogById,
  BlogsContainer,
  StoriesContainer,
  StoryById
});
