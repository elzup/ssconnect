// @flow
import { connect } from 'react-redux'
import type { State, ID } from '../../types'
import StoryCell from '../../components/StoryCell'
import { getArticleCompOldest } from '../ArticleById/selectors'
import { openedArticle } from '../ScreensContainer/logic'

type OProps = {
  storyId: ID,
}

const ms = (state: State, ownProps: OProps) => ({
  article: getArticleCompOldest(state, ownProps.storyId),
})

// TODO
const onClickAction = () => {}

const conn = connect(
  ms,
  {
    onClickAction,
    openedArticle,
  },
)

export default conn(StoryCell)
