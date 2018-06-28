// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { State, Screen, ID, PageInfo } from '../../types'
import StoryCellContainer from '../StoryCellContainer'
import PagingBar from '../../components/PagingBar'
import * as screenSelector from '../ScreensContainer/selectors'

import { loadScreenStory } from '../ScreensContainer/logic'

type Props = {
  screen: Screen,
  storyIds: ID[],
  pageInfo: PageInfo,
  loadScreenStory: typeof loadScreenStory,
}

type OProps = {
  screen: Screen,
}

class Container extends React.Component<Props> {
  componentDidMount() {
    this.props.loadScreenStory(this.props.screen)
  }
  render() {
    const { props } = this
    return (
      <div>
        <PagingBar pageInfo={props.pageInfo} pageChange={() => {}} />
        {props.storyIds.map(id => <StoryCellContainer key={id} storyId={id} />)}
        <PagingBar pageInfo={props.pageInfo} pageChange={() => {}} />
      </div>
    )
  }
}

const ms = (state: State, op: OProps) => {
  return {
    ...op,
    storyIds: screenSelector.getStoryIds(state, op.screen),
    pageInfo: screenSelector.getPageInfo(state, op.screen),
  }
}

const conn = connect(
  ms,
  { loadScreenStory },
)

export default conn(Container)
