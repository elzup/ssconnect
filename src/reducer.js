// @flow
import { combineReducers } from "redux";
import ArticleById from "./containers/ArticleById/reducer";
import ArticlesContainer from "./containers/ArticlesContainer/reducer";
import BlogById from "./containers/BlogById/reducer";
import BlogsContainer from "./containers/BlogsContainer/reducer";
import ScreensContainer from "./containers/ScreensContainer/reducer";
import StoriesContainer from "./containers/StoriesContainer/reducer";
import StoryById from "./containers/StoryById/reducer";
import System from "./containers/System/reducer";

export default combineReducers({
  ArticleById,
  ArticlesContainer,
  BlogById,
  BlogsContainer,
  ScreensContainer,
  StoriesContainer,
  StoryById,
  System
});
