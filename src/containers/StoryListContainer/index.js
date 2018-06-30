// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { State, Screen, ID, PageInfo } from '../../types'
import StoryCellContainer from '../StoryCellContainer'
import { withRouter, type RouterHistory } from 'react-router-dom'
import queryString from 'query-string'

import PagingBar from '../../components/PagingBar'
import PageInfoBlock from '../../components/PagingBar/PageInfoBlock'
import * as screenSelector from '../ScreensContainer/selectors'

import { loadScreenStory } from '../ScreensContainer/logic'

type Props = {
  screen: Screen,
  storyIds: ID[],
  history: RouterHistory,
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
  pageChange = ({ page }) => {
    const newScreen = { ...this.props.screen, page }
    this.props.loadScreenStory(newScreen)
    this.props.history.push({
      search: queryString.stringify(newScreen),
    })
  }
  render() {
    const { props } = this
    return (
      <div>
        <PagingBar pageInfo={props.pageInfo} pageChange={this.pageChange} />
        <PageInfoBlock pageInfo={props.pageInfo} pageChange={this.pageChange} />
        {props.storyIds.map(id => <StoryCellContainer key={id} storyId={id} />)}
        <PageInfoBlock pageInfo={props.pageInfo} pageChange={this.pageChange} />
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

export default conn(withRouter(Container))
