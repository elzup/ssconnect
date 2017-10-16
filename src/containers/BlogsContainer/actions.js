// @flow
import type { Blog } from "../../types";

import { RECEIVE_BLOGS } from "./actionTypes";
import type { ReceiveBlogs } from "./actionTypes";

export function receiveBlogs(blogs: Blog[]): ReceiveBlogs {
  return {
    type: RECEIVE_BLOGS,
    blogs
  };
}
