// @flow
import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'
import StoryCell, { type Props } from '../../components/StoryCell'
import { getArticleCompOldest } from '../ArticleById/selectors'

type OProps = {
  storyId: number,
}

const ms = (state: State, ownProps: OProps) => ({
  article: getArticleCompOldest(state, ownProps.storyId),
})

// TODO
const onClickAction = () => {}

const conn: Connector<OProps, Props> = connect(ms, { onClickAction })

export default conn(StoryCell)
