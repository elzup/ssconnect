// @flow
import { combineReducers } from './config'
import ArticleById from './containers/ArticleById/reducer'
import ArticlesContainer from './containers/ArticlesContainer/reducer'
import BlogById from './containers/BlogById/reducer'
import BlogsContainer from './containers/BlogsContainer/reducer'
import BookmarkById from './containers/BookmarkById/reducer'
import Bookmarks from './containers/Bookmarks/reducer'
import ScreensContainer from './containers/ScreensContainer/reducer'
import StoriesContainer from './containers/StoriesContainer/reducer'
import StoryById from './containers/StoryById/reducer'
import System from './containers/System/reducer'
import TagById from './containers/TagById/reducer'

export default combineReducers({
  ArticleById,
  ArticlesContainer,
  BlogById,
  BlogsContainer,
  BookmarkById,
  Bookmarks,
  ScreensContainer,
  StoriesContainer,
  StoryById,
  System,
  TagById,
})
