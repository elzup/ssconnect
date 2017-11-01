// @flow
import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'
import StoryCell, { type Props } from '../../components/StoryCell'
import { getArticleCompOldest } from '../ArticleById/selectors'
import { openedArticle } from '../ScreensContainer/logic'

type OProps = {
  storyId: number,
}

const ms = (state: State, ownProps: OProps) => ({
  article: getArticleCompOldest(state, ownProps.storyId),
})

// TODO
const onClickAction = () => {}

const conn: Connector<OProps, Props> = connect(ms, {
  onClickAction,
  openedArticle,
})

export default conn(StoryCell)
