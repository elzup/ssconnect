// @flow
import type { Story } from "../../types";

export const RECEIVE_STORIES: "StoriesContainer/RECEIVE_STORIES" =
  "StoriesContainer/RECEIVE_STORIES";

export const Actions = {
  RECEIVE_STORIES
};

export type ReceiveStories = {
  type: typeof RECEIVE_STORIES,
  stories: Story[]
};

export type Action = ReceiveStories;
