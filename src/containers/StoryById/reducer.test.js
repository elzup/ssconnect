// @flow
import reducer, { initialState, type State } from './reducer'
import * as actions from '../StoriesContainer/actions'

test('provide the initial state', () => {
  expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

const stories: State = {
  '1': {
    id: 1,
    articles: [1, 2, 3],
    firstPostedAt: '',
    tagList: [],
    title: '',
    readed: false,
  },
}

test('handle RECEIVE_STORIES', () => {
  expect(
    reducer(
      stories,
      actions.receiveStories([
        {
          id: 1,
          articles: [1, 2, 3],
          firstPostedAt: '',
          tagList: [],
          title: '',
        },
        {
          id: 2,
          articles: [1, 2, 3],
          firstPostedAt: '',
          tagList: [],
          title: '',
        },
      ]),
    ),
  ).toEqual({
    '1': {
      id: 1,
      articles: [1, 2, 3],
      firstPostedAt: '',
      tagList: [],
      title: '',
      readed: false,
    },
    '2': {
      id: 2,
      articles: [1, 2, 3],
      firstPostedAt: '',
      tagList: [],
      title: '',
      readed: false,
    },
  })
})

test('handle READED_STORY', () => {
  expect(reducer(stories, actions.readedStory(1))).toEqual({
    '1': {
      id: 1,
      articles: [1, 2, 3],
      firstPostedAt: '',
      tagList: [],
      title: '',
      readed: true,
    },
  })
})
